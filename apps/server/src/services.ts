import pool from "./db";

export const deleteTodoByIdService = async (id: number) => {
  const query = `DELETE from todos WHERE todos.id=$1`;

  return await pool.query(query, [id]);
};

export const createTodoService = async (title: string) => {
  const query = `INSERT INTO todos (title) VALUES ($1)`;
  return await pool.query(query, [title]);
};

export const getTodoService = async () => {
  const query = `SELECT * from todos`;
  return await pool.query(query);
};
