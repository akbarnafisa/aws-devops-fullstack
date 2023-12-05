import express from 'express'
import { getTodos, createTodo, deleteTodo } from './controller'

const routes = express.Router()

routes.get('/api/todo', getTodos)
routes.post('/api/todo', createTodo)
routes.delete('/api/todo/:id', deleteTodo)

export default routes