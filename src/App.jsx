import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoCard from "./components/TodoCard";
import useGetAllTodos from "./hooks/useGetAllTodos";

function App() {
  const { todos } = useGetAllTodos();

  return (
    <main>
      <section>
        <div className="todo-list_title">
          <h1>TODO LIST</h1>
        </div>

        <div className="todo-list_body">
          <div className="body-button">
            <AddToDo />
          </div>
          <div className="body-items">
            {todos.length ? (
              todos
                .slice()
                .reverse()
                .map((todo) => (
                  <TodoCard
                    key={todo.todoId}
                    description={todo.description}
                    todoId={todo.todoId}
                    status={todo.status}
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
