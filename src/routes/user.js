const express = require('express')
const route = express.Router()
const env = require('../../ENV')

/*  --- routes ---  */
route.get('/login',(req, res) => {
    res.sendFile(env.path+'/public/pages/login.html')
})
route.get('/new',(req, res) => {
    res.sendFile(env.path+'/public/pages/newUser.html')
})

/*  --- exports --- */
module.exports = route