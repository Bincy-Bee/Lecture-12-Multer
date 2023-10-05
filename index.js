const express = require("express");
const app = express();
const multer = require("multer");

const imgUpload = multer({
    dest:"images"
}).single("img")

app.post("/mult", imgUpload, (req,res)=>{
    res.send("Img Uploaded")
})
app.get("/mult",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.listen(8090,()=>{
    console.log("Server is listening On Port : http://localhost:8090")
})