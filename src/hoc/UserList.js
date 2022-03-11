import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  let renderedUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <p>{renderedUsers}</p>
    </div>
  );
};

const SearchUsers = HOC(UserList, "users");

export default SearchUsers;
