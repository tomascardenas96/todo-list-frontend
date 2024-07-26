import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useGetAllTodos() {
  const [todos, setTodos] = useState([]);
  const [getTodosLoading, setGetTodosLoading] = useState(false);
  const [getTodosError, setGetTodosError] = useState(null);

  //Web socket para actualizar en tiempo real el status(boolean) del objeto Todo.
  useEffect(() => {
    const socket = io("http://localhost:8001");

    socket.on("switchTodoState", (updatedTodo) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.todoId === updatedTodo.todoId ? updatedTodo : todo
        )
      );
    });

    return () => {
      socket.off("switchTodoState");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    async function getTodos() {
      try {
        setGetTodosLoading(true);
        const response = await fetch("http://localhost:3050/task", {
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
