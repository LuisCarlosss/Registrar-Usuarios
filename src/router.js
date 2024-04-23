const express = require('express')
const controller = require('./controllers/tasksController')
const tasksMiddleware = require('./middleware/taskMiddleware')

const router = express.Router();


router.get('/',controller.homepage)

router.get('/tasks',controller.showAllTasks)

router.get('/tasks/:id',controller.showUser)

router.post('/tasks',tasksMiddleware.validateBody,controller.createUser)

router.put('/tasks/:id',controller.updateUser)

router.delete('/tasks/:id',controller.deleteUser)


module.exports = router;
