const Controller = require('../Controllers/controller')

const route = require('express').Router()

route.get('/', Controller.findAll)
route.get('/add', Controller.addTask)
route.post('/add', Controller.saveTask)
route.get('/complete/:id', Controller.changeStatusToComplete)
route.get('/uncomplete/:id', Controller.changeStatusToUncomplete)
route.get('/delete/:id', Controller.deleteTask)


module.exports = route