import React, { useEffect, useState } from "react";

function useGetAllTodos() {
  const [todos, setTodos] = useState([]);
  const [getTodosLoading, setGetTodosLoading] = useState(false);
  const [getTodosError, setGetTodosError] = useState(null);

  useEffect(() => {
    async function getTodos() {
      try {
        setGetTodosLoading(true);
        const response = await fetch("http://localhost:3050/todolist", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.message);
        }

        setTodos(data);
      } catch (error) {
        setGetTodosError(true);
      } finally {
        setGetTodosLoading(false);
      }
    }

    getTodos();
  }, []);

  return { todos, getTodosLoading, getTodosError };
}

export default useGetAllTodos;
