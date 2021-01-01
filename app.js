const express = require('express');
const cors = require('cors')
const app = express()
const PORT = process.env.port ||  8080
require('dotenv').config()

app.use(cors())
app.use(express.json())
 app.use('/',require('./user'))

if(process.env.NODE_ENV=="production"){
    app.use(Express.static('client/build'))
    const path = require('path')
    app.get('*',(req,rse)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})