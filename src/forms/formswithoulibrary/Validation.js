export default function Validation(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    /^([a-z\d/.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.([a-z]{2,8})?$/.test(
      values.email
    )
  ) {
    errors.email = "Email id is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "password must be 6 characters or more";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "Password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Password do not match";
  }

  return errors;
}
