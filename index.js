var express=require("express");
const { json } = require("stream/consumers");
var ap=express();
var students=[];
ap.use(express.urlencoded({extended:true}));
ap.use(express.json());

ap.get("/",function(req,res){
    res.sendFile(__dirname+ "register.html");

})
ap.post("/regs",function(req,res){
    console.log("Request params data " ,req.query);
    students.push(req.query);
    res.send(json.stringify(students));

})
.listen(7080,function()
{
    console.log("we are in 7080 host")
})