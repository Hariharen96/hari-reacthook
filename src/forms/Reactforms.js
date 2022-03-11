import React, { useState } from "react";

const Reactforms = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("my fname is " + fname + "my lname is " + lname);

    setFname("");
    setLname("");
  };
  return (
    <div className="container m-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fname"
                className="form-control w-50 m-2"
                placeholder="firstname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lname"
                className="form-control m-2 w-50"
                placeholder="lastname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control m-2 w-50"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reactforms;
