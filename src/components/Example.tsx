import React from "react";
import useFetch from "../Hooks/useFetch";

const Example = () => {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return <div>Example</div>;
};

export default Example;
