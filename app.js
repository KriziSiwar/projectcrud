const http=require('http')
const express = require('express')
const usersRouter = require('./routes/users')
const mongo = require('mongoose')
const path = require("path")
const db=require('./config/db.json')
const {addchat}=require("./controller/userController")
mongo.connect(db.url ).then(console.log("database connected")).catch((err)=>{
    console.log(err);}
    );

const app= express()
 
app.use(express.json())
app.set("views",path.join(__dirname, "views"))
app.set("view engine","twig")
app.use("/users",usersRouter)


const server =http.createServer(app,console.log('server run'))
const io =require("socket.io")(server)
io.on("connection",(socket)=>{
    console.log("user connected")

    socket.emit("msg", "user connected")


    socket.on("msgname",(data)=>{
        addchat(data)
        io.emit("msgname",data)
    })

    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data)
    })




    socket.on("disconnect",()=>{
        console.log("user connected")})
        io.emit("msg", "user diconnected")



})
server.listen(3000)