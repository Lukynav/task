const express = require('express')
const route = express.Router()
const env = require('../../ENV')

/*  --- routes ---  */
route.get('/',(req, res) => {
    res.sendFile(env.path+'/public/pages/404.html')
})

/*  --- exports --- */
module.exports = route