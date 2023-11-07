const Express = require('express')
const Routes =  Express.Router()

Routes.get('/',  function(req, res){
    res.status(200).send("yowss")
})

Routes.get('/product', (req, res) =>{
    res.send({
        data: [
            { nama: "udin", age: 20, gender: "male"  },
            { nama: "doni", age: 20, gender: "male"  },
            { nama: "udin", age: 20, gender: "male"  },
            { nama: "udin", age: 20, gender: "male"  }
        ]
    })
})


const ContentRoutes = require('./content/index')
Routes.use('/content', ContentRoutes)
module.exports = Routes