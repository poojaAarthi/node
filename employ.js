var express=require("express");
var rout=express.Router();
var employee=[];
rout.get("/emplist",function(req,res){
    
    res.render("emplist" ,{
        allstudents:employee
    });
    

})
rout.get("/regemp",function(req,res){
    res.sendFile(__dirname+ "/regemp.html");
    
    

})
rout.post("/regemp",function(req,res){
    console.log("Request params data " ,req.body);
    employee.push(req.body);

    res.send(" employee register sucesfuly")
    
    
})
module.exports=rout;