const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
require('dotenv').config()
const MongoStore = require('connect-mongo')(session)
var passport = require('passport')

const v1ProductRouter = require('./v1/routes/ProductRoutes')
const v1UserRouter = require("./v1/routes/UserRoutes")
const v1CheckoutRouter = require('./v1/routes/RoutesForCheckouts')


const app = express()
app.use(express.json());

const PORT = process.env.PORT || 5000



app.use('/api/v1/products', v1ProductRouter)
app.use('/api/v1/users', v1UserRouter)
app.use('/api/v1/checkouts', v1CheckoutRouter)



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










