export type Todo = {
  id: number;
  title: string;
};

export type GenericResponse = {
  success: boolean;
  error?: {
    errorMsg: string;
    errorCode: string;
  };
};

export type TodoDto = GenericResponse & {
  data: Todo[];
};

export type CreateTodo = (title: Todo["title"]) => Promise<GenericResponse>;
export type DeleteTodo = (id: Todo["id"]) => Promise<GenericResponse>;
export type GetTodos = () => Promise<TodoDto>;

export async function createTodoUseCase(
  context: { createTodo: CreateTodo },
  data: { title: Todo["title"] }
) {
  await context.createTodo(data.title);
}

export async function deleteTodoUseCase(
  context: { deleteTodo: DeleteTodo },
  data: { id: Todo["id"] }
) {
  await context.deleteTodo(data.id);
}

export async function getTodosUseCase(context: { getTodos: GetTodos }) {
  return await context.getTodos();
}
