import { RequestHandler } from "express";
import {
  deleteTodoByIdService,
  createTodoService,
  getTodoService,
} from "./services";
import { Todo } from "./types";

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const { title } = req.body;
    await createTodoService(title);
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTodoByIdService(Number(id));
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todosQuery = await getTodoService();
    const todos = todosQuery?.rows as Todo[];
    res.status(200).send({
      data: todos,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
