import { MdDelete } from "react-icons/md";
import useDeleteTodo from "../hooks/useDeleteTodo";
import useSwitchTodoState from "../hooks/useSwitchTodoState";
import "./TodoCard.css";

function TodoCard({ description, todoId, status, date }) {
  const { deleteTodo } = useDeleteTodo();
  const { switchTodoState } = useSwitchTodoState();

  //Le damos formato a la fecha de creacion
  function getDate(date) {
    const newDateFormat = new Date(date);
    const day = newDateFormat.getDate();
    const month = newDateFormat.getMonth() + 1;

    const formatedDay = day.toString().padStart(2, "0");
    const formatedMonth = month.toString().padStart(2, "0");

    return `${formatedDay}/${formatedMonth}`;
  }

  return (
    <div className="todo-card" onClick={() => switchTodoState(todoId)}>
      <div className="todo-check">
        <input type="checkbox" checked={status} />
      </div>
      <div className="todo-description">
        <p className={status ? "todo-true" : "todo-false"}>{description}</p>
        <p className="todo-date">{getDate(date)}</p>
      </div>
      <div className="todo-btn" onClick={(event) => event.stopPropagation()}>
        <MdDelete className="todo-delete" onClick={() => deleteTodo(todoId)} />
      </div>
    </div>
  );
}

export default TodoCard;
