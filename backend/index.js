const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const v1ProductRouter = require('./v1/routes/ProductRoutes')
const v1UserRouter = require("./v1/routes/UserRoutes")
const v1CheckoutRouter = require('./v1/routes/RoutesForCheckouts')


const app = express()
app.use(express.json());


app.use('/api/v1/products', v1ProductRouter)
app.use('/api/v1/users', v1UserRouter)
app.use('/api/v1/checkouts', v1CheckoutRouter)
const PORT = process.env.PORT || 5000



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to the mongodb database")
        app.listen(PORT, () =>{
            console.log(`app is listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error)
        process.exit(1)
    })




