import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./action";

const Todos = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            marginTop: "100px",
            fontSize: "24px",
            color: "blue",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            marginTop: "100px",
            fontSize: "24px",
            color: "blue",
          }}
        >
          <span style={{ color: "red" }}>Error: </span>
          {error}
        </div>
      </div>
    );
  }

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
