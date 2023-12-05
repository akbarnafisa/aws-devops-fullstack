import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Todo,
  createTodoUseCase,
  deleteTodoUseCase,
  getTodosUseCase,
} from "./use-case/todo";
import { getTodos, createTodo, deleteTodo } from "./data/todo";

interface CustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setLoading(true);
    fetchTodo().finally(() => setLoading(false));
  }, []);

  const fetchTodo = async () => {
    const todoData = await getTodosUseCase({
      getTodos,
    });
    setTodos(todoData.data);
  };

  const onSubmit = async (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;

    setLoading(true);
    await createTodoUseCase(
      {
        createTodo,
      },
      {
        title: target.title.value,
      }
    );

    await fetchTodo();
    setLoading(false);
    formRef.current?.reset();
  };

  const onDeleteTodo = async (id: number) => {
    setLoading(true);
    await deleteTodoUseCase(
      {
        deleteTodo,
      },
      {
        id,
      }
    );

    await fetchTodo();
    setLoading(false);
  };

  return (
    <main className="container">
      <div>
        <form ref={formRef} onSubmit={onSubmit} className="form-inline">
          <input
            id="title"
            className="form-control"
            placeholder="Add a new todo..."
            disabled={isLoading}
          />
          <button disabled={isLoading} type="submit" className="btn">
            Add
          </button>
        </form>

        <ul className="list-group">
          {todos.map((item, index) => {
            return (
              <li key={index} className="list-group-item ">
                <span
                  className="glyphicon glyphicon-ok icon"
                  aria-hidden="true"
                >
                  {item.title}
                </span>
                <button
                  type="button"
                  className="btn btn--icon"
                  onClick={() => onDeleteTodo(item.id)}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
