import React from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";

function App() {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h2>Data todo</h2>
      {Boolean(todos?.length) &&
        todos?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </>
  );
}

export default App;
