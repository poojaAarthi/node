var express=require("express");
var ap=express();
var students=[];
ap.use(express.urlencoded({extended:true}));
ap.use(express.json());

ap.get("/",function(req,res){
    res.sendFile(__dirname+ "register.html");

})
ap.post("/regs",function(req,res){
    console.log("Request params data " ,req.body);
    students.push(req.body);
    res.send(json.stringify(students));

})
.listen(7080,function()
{
    console.log("we are in 7080 host")
})

C:\soft3\expres\index_copy.js