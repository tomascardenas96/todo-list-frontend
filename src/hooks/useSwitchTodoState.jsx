import { useState } from "react";

function useSwitchTodoState() {
  const [switchTodoLoading, setSwitchTodoLoading] = useState(false);
  const [switchTodoError, setSwitchTodoError] = useState(null);

  async function switchTodoState(todoId) {
    setSwitchTodoLoading(true);
    try {
      const response = await fetch(`http://localhost:3050/task/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }
    } catch (error) {
      setSwitchTodoError(true);
    } finally {
      setSwitchTodoLoading(false);
    }
  }

  return { switchTodoState, switchTodoLoading, switchTodoError };
}

export default useSwitchTodoState;
