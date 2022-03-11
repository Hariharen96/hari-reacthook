import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const Usertodo = ({ data }) => {
  let renderedTodo = data.slice(0, 10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <p>{renderedTodo}</p>
    </div>
  );
};

const SearchTodos = HOC(Usertodo, "todos");

export default SearchTodos;
