import React, { useEffect } from "react";

const Student = (props) => {
  const details = props.location.state.detail;
  const { fname, lname, email, phone, address } = details;
  return (
    <div className="card m-3">
      <div className="card-body">
        <h1 className="card-title">
          {fname} {lname}
        </h1>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        <p className="card-text">{address}</p>
      </div>
    </div>
  );
};

export default Student;
