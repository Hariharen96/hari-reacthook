import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentItems from "./StudentItems";
import { addData } from "./studentslice";

const Students = () => {
  const student = useSelector((state) => state.stud.students);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        id: student[student.length - 1].id + 1,
        fname,
        lname,
        email,
        phone,
        address,
      })
    );
    setfName("");
    setlName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
              placeholder="Enter fname"
              className="form-control"
            />
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
              placeholder="Enter lname"
              className="form-control"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="form-control"
            />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone"
              className="form-control"
            />
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              className="form-control"
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <div className="container d-md-flex justify-content-between align-items-center flex-wrap-wrap">
        {student.map((item) => {
          return (
            <div className="card m-3">
              <StudentItems data={item} key={item.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Students;
