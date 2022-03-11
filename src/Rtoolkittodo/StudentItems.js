import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData } from "./studentslice";

const StudentItems = (props) => {
  const { id, fname, lname, phone, email, address } = props.data;
  const dispatch = useDispatch();
  const deleteId = (e) => {
    e.preventDefault();
    dispatch(deleteData({ id }));
  };
  return (
    <div className="card-body">
      <h1 className="card-title">
        {fname} {lname}
      </h1>
      <p className="card-text">{phone}</p>
      <p className="card-text">{email}</p>
      <p className="card-text">{address}</p>
      <Link to={{ pathname: `/student/${id}`, state: { detail: props.data } }}>
        <button>Show</button>
      </Link>
      <Link to={{ pathname: `/edit/${id}`, state: { edit: props.data } }}>
        <button>Edit</button>
      </Link>
      <button onClick={deleteId}>Delete</button>
    </div>
  );
};

export default StudentItems;
