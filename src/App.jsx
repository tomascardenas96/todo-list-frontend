import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoCard from "./components/TodoCard";
import useGetAllTodos from "./hooks/useGetAllTodos";

function App() {
  const { todos, getTodosLoading, getTodosError } = useGetAllTodos();

  return (
    <main>
      <section>
        <div className="todo-list_title">
          <h1>TO-DO LIST</h1>
        </div>

        <div className="todo-list_body">
          <div className="body-button">
            <AddToDo />
          </div>
          <div className="body-items">
            {getTodosError ? (
              <img src="../src/assets/error.png" alt="error-todo" />
            ) : getTodosLoading ? (
              <h1 className="loading-spinner">Loading...</h1>
            ) : todos.length ? (
              todos
                .slice()
                .reverse()
                .map((todo) => (
                  <TodoCard
                    key={todo.todoId}
                    description={todo.description}
                    todoId={todo.todoId}
                    status={todo.status}
                    date={todo.createdAt}
                  />
                ))
            ) : (
              <h1 className="no-todos">There are not Todos</h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
