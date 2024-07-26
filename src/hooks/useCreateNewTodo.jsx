import React, { useState } from "react";

function useCreateNewTodo() {
  const [todoInput, setTodoInput] = useState({
    description: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [createTodoLoading, setCreateTodoLoading] = useState(false);
  const [createTodoError, setCreateTodoError] = useState(null);

  function openCloseModal() {
    setModalIsOpen(!modalIsOpen);
  }

  async function handleCreateNewTodo(e) {
    e.preventDefault();
    try {
      setCreateTodoLoading(true);
      const response = await fetch("http://localhost:3050/todolist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todoInput),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error();
      }

      location.reload();
    } catch (error) {
      setCreateTodoError(true);
    } finally {
      setCreateTodoLoading(false);
    }
  }

  function handleChangeTodo(e) {
    const { name, value } = e.target;
    setTodoInput({ ...todoInput, [name]: value });
  }

  return {
    openCloseModal,
    handleCreateNewTodo,
    handleChangeTodo,
    modalIsOpen,
    todoInput,
    createTodoLoading,
    createTodoError,
  };
}

export default useCreateNewTodo;
