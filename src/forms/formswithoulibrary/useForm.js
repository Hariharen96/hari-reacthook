import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(values);
    setValues("");
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
