import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateData } from "./studentslice";

const Edit = (props) => {
  const data = props.location.state.edit;
  const [fname, setfName] = useState(data.fname);
  const [lname, setlName] = useState(data.lname);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateData({
        id: data.id,
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        address: address,
      })
    );
    history.push("/");
  };
  return (
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
