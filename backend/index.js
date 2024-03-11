const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')
const cors = require('cors')


dotenv.config()

const v1ProductRouter = require('./v1/routes/ProductRoutes')
const v1UserRouter = require("./v1/routes/UserRoutes")
const v1CheckoutRouter = require('./v1/routes/RoutesForCheckouts')


const app = express()
app.use(express.json());
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Session expires in 24 hours
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
    },
  }));

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










