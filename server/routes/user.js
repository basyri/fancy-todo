const express = require('express')
const Router = express.Router()
const UserController = require('../controllers/userController')

Router.post('/signup', UserController.signup)
Router.post('/signin', UserController.signin)

module.exports = Router