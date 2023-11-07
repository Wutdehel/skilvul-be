const Express = require('express')
const Routes =  Express.Router()

// controller
const AuthController = require('../../controllers/auth')

//Middleware

const AuthMidlleware = require ('../../middlewares/auth/bodyValidation')




Routes.get('/', AuthController.View)

Routes.post('/add', [AuthMidlleware.bodyValidationRegister], AuthController.Register)

Routes.delete('/delete/:id', AuthController.Delete)


module.exports = Routes