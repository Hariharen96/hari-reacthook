import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Reacthook = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-z\d]{5,12}$/, "firstname should be correct"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-z\d]{5,12}$/, "lastname should be correct"),
    dob: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z\d/.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.([a-z]{2,8})?$/,
        "enter an valid email"
      )
      .email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/^[\w@-]{5,20}$/, "Enter valid password")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .matches(/^[\w@-]{5,20}$/, "Enter valid password")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { handleSubmit, register, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = (data) => {
    alert("Success" + JSON.stringify(data, null, 4));
    console.log("hello");
  };
  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">React Hook Form</h5>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="title">Title</label>
              <select
                name="title"
                {...register("title")}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
              >
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              <div className="invalid-feedback">{errors.title?.message}</div>
            </div>

            <div className="form-group col">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                name="firstName"
                {...register("firstName")}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>

            <div className="form-group col">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastName"
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <label htmlFor="date of birth">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                {...register("dob")}
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.dob?.message}</div>
            </div>
            <div className="form-group col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-group col">
              <label htmlFor="confirmpassword">confirmPassword</label>
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>
          </div>

          <div className="form-group m-3">
            <input
              type="checkbox"
              name="acceptTerms"
              className="form-check-input"
              id="acceptTerms"
            />
            <label htmlFor="acceptTerms" className="form-check-label mr-1">
              Accept Terms & Conditions
            </label>
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary m-3">
              Submit
            </button>
            <button
              type="reset"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reacthook;
