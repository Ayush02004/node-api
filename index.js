const express = require("express");
const bodyParser = require("body-parser");
const Student = require('./students');
require("./db");

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Hello world");
})

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.post("/save/data", async (req, res)=>{
    try{
        let stu = new Student();
        let {marks, name, age, subject} = req.body;
        stu.name = name;
        stu.marks = marks
        stu.subject = subject;
        stu.age = age;
        stu = await stu.save();
        res.status(200).send({data: stu, msg: "Data saved"});
    } catch(err){
        console.log(err);
        res.status(500).send({data:err});
    }
})


app.listen(6000, ()=>{
    console.log("Server is running on port 6000");
})