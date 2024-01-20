import request from "../utils/request";
import { GenericResponse, Todo, TodoDto } from "../use-case/todo";

export async function getTodos(): Promise<TodoDto> {
  const res = await request('/api/todo', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function createTodo(title: Todo["title"]): Promise<GenericResponse> {
  const res = await request('/api/todo', {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function deleteTodo(id: Todo["id"]): Promise<GenericResponse> {
  const res = await request(`/api/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
