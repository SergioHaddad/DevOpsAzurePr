const express = require('express')
const app = express()

app.get('/', function(Req,res){
    res.send("This is my First Azure DevOps Projec")
})

app.listen(3000,() =>{
    console.log("Sucess! your localHost Port is: ",3000)
})