const express = require('express')
const router = express.Router()

// CONTROLLERS

const {add, getAll,getOne,update, deleted} = require('../controllers/activity')
const {addTodo,getTodo,getsTodo,updateTodo,deleteTodo} = require('../controllers/todolist')

// ROUTE

router.post('/activity-groups', add)
router.get('/activity-groups', getAll)
router.get('/activity-groups/:id', getOne)
router.patch('/activity-groups/:id', update)
router.delete('/activity-groups/:id', deleted)

router.post('/todo-items', addTodo)
router.get('/todo-items/:id', getTodo)
router.get('/todo-items', getsTodo)
router.patch('/todo-items/:id', updateTodo)
router.delete('/todo-items/:id', deleteTodo)

module.exports = router
