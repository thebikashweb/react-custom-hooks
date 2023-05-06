import { useState, useEffect } from "react";

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useFetch = (url: string): [TodoType[]] | [null] => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [url]);

  return [data];
};

export default useFetch;
