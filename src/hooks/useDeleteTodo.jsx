import { useState } from "react";

function useDeleteTodo() {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  async function deleteTodo(todoId) {
    try {
      setDeleteLoading(true);
      const response = await fetch(`http://localhost:3050/task/${todoId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (data.error) {
        throw new Error();
      }

      location.reload();
    } catch (error) {
      setDeleteError(true);
    } finally {
      setDeleteLoading(false);
    }
  }

  return { deleteTodo, deleteLoading, deleteError };
}

export default useDeleteTodo;
