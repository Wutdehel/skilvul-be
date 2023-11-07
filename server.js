const Express = require('express')
const App = Express()
const PORT = 5000
const Cors = require('cors')

App.use(Cors())
App.use(Express.json())

App.listen(PORT, function () {
    console.log(`server is running in port : ${ PORT }` )
})

App.get('/', function(req, res) {
    res.status(200).send('waddup be')
})



// routes

const HelloRoutes = require('./routes/hello-routes')
App.use('/apiV1', HelloRoutes)
