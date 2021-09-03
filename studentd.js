var express=require("express");
var rout=express.Router();
var students=[];
rout.get("/stulist",function(req,res){
    
    res.render("stulist" ,{
        allstudents:students
    });
    

})
rout.get("/regstud",function(req,res){
    res.sendFile(__dirname+ "/regstud.html");
    
    

})
rout.post("/regstud",function(req,res){
    console.log("Request params data " ,req.body);
    students.push(req.body);

    res.send("register sucesfuly")
    
    
})
module.exports=rout;