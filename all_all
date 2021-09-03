var express=require("express");

var ap=express();
var students=[];
ap.use(express.urlencoded({extended:true}));
ap.use(express.json());
ap.set('view engine','pug');
ap.set('views','./views');
ap.get("/",function(req,res){
    
    res.render("stud" ,{
        allstudents:students
    });
    

})
ap.get("/reg",function(req,res){
    res.sendFile(__dirname+ "/reg.html");
    
    

})
ap.post("/reg",function(req,res){
    console.log("Request params data " ,req.body);
    students.push(req.body);

    res.render("stud",{
        allstudents:students
    })
    
    
})
ap.listen(7080,function()
{
    console.log("we are in 7080 host")
})