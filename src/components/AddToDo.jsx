import useCreateNewTodo from "../hooks/useCreateNewTodo";
import "./AddToDo.css";

function AddToDo() {
  const {
    openCloseModal,
    modalIsOpen,
    handleChangeTodo,
    todoInput,
    handleCreateNewTodo,
  } = useCreateNewTodo();

  console.log(todoInput);

  return (
    <>
      <button className="add-todo" onClick={() => openCloseModal()}>
        Add task
      </button>
      {modalIsOpen && (
        <div className="add-todo_modal">
          <div className="modal">
            <div className="modal_title">
              <h1>Create new Todo</h1>
            </div>

            <div className="modal_body">
              <form onSubmit={handleCreateNewTodo}>
                <textarea
                  name="description"
                  value={todoInput.description}
                  onChange={handleChangeTodo}
                />
                <input type="submit" value="Create" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddToDo;
