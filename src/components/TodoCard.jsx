import { useState } from "react";
import "./TodoCard.css";
import { MdDelete } from "react-icons/md";
import useDeleteTodo from "../hooks/useDeleteTodo";

function TodoCard({ description, todoId }) {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTodo } = useDeleteTodo();

  const switchCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="todo-card" onClick={switchCheckbox}>
      <div className="todo-check">
        <input type="checkbox" checked={isChecked} />
      </div>
      <div className="todo-description">
        <p>{description}</p>
      </div>
      <div className="todo-btn" onClick={(event) => event.stopPropagation()}>
        <MdDelete className="todo-delete" onClick={() => deleteTodo(todoId)} />
      </div>
    </div>
  );
}

export default TodoCard;
