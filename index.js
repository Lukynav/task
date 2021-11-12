/*  --- GLOBAL ---   */
const express = require('express')
const app = express()

/*  --- SETTINGS ---    */
const port = process.env.port || 3000

/**/
console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public'))

/*  --- ROUTES --- */
app.use('/user',require('./src/routes/user'))

/*catch 404*/
app.use('*',require('./src/routes/error'))

/*  --- SERVER ---  */
app.listen(port, ()=>{
    console.log('server listening on port:',port)
})