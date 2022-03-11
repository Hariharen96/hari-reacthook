import React from "react";
import useForm from "./useForm";
import Validation from "./Validation";

const Forms = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(Validation);
  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-1">
          <input
            type="text"
            name="username"
            className="form-control w-50"
            placeholder="Enter username"
            value={values.name}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="d-flex flex-start text-danger">{errors.username}</p>
          )}
        </div>
        <div className="form-group m-1">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            className="form-control w-50"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="d-flex flex-start text-danger">{errors.email}</p>
          )}
        </div>
        <div className="form-group m-1">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control w-50"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="d-flex flex-start text-danger">{errors.password}</p>
          )}
        </div>
        <div className="form-group m-1">
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm your password"
            className="form-control w-50"
            value={values.confirmpassword}
            onChange={handleChange}
          />
          {errors.confirmpassword && (
            <p className="d-flex flex-start text-danger">
              {errors.confirmpassword}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary m-3 d-flex flex-start">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Forms;
