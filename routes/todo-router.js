const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/todo-controller');
const todoController = require('../controllers/todo-controller');

router.post('/todoList', todoController.createToDoList);
router.get('/todos/:email', TodoController.getTodos);
router.put('/todo/:id', TodoController.addToDoItems);
router.put('/todo/completed/:id', TodoController.updateTodoCompleted);
router.delete('/todo/:id', TodoController.deleteTodo);

module.exports = router;