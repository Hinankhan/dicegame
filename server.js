const express = require('express')
const path = require('path')

const app = express()
let port = process.env.PORT
if (port == null || port == ""){
    port(3000)
}
app.use('/static', express.static('public'))
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.listen(port)