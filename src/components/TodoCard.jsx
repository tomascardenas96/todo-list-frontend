import { MdDelete } from "react-icons/md";
import useDeleteTodo from "../hooks/useDeleteTodo";
import useSwitchTodoState from "../hooks/useSwitchTodoState";
import "./TodoCard.css";

function TodoCard({ description, todoId, status }) {
  const { deleteTodo } = useDeleteTodo();
  const { switchTodoState } = useSwitchTodoState();

  return (
    <div className="todo-card" onClick={() => switchTodoState(todoId)}>
      <div className="todo-check">
        <input type="checkbox" checked={status} />
      </div>
      <div className="todo-description">
        <p className={status ? "todo-true" : "todo-false"}>{description}</p>
      </div>
      <div className="todo-btn" onClick={(event) => event.stopPropagation()}>
        <MdDelete className="todo-delete" onClick={() => deleteTodo(todoId)} />
      </div>
    </div>
  );
}

export default TodoCard;
