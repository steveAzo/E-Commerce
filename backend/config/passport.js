const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const passwordUtils = require('../lib/passportUtils')

const { validPassword } = passwordUtils

passport.use(
    new LocalStrategy (function(name, password, cb){
        User.findOne({ name: name })
        .then((user) => {
            if(!user) {
                return cb(null, false)
            }

            var isValid = validPassword(password, user.hash, user.salt)
            if(isValid) {
                return cb(null, user)
            } else{
                return cb(null, false)
            }
        })
        .catch((err) => {
            cb(err)
        })
    })
)

passport.serializeUser(function (id, cb) {
    cb(null, user.id)
})

passport.deserializeUser(function (id, cb) {
    User.findById (id, function (err, user) {
        if(err) {
            return cb(err)
        }
        cb(null, user)
    })
})