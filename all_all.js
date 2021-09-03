var express=require("express");

var ap=express();
var students=[];
var employee=[];
var studrout=require("./studentd")
var emprout=require("./employ")
ap.use(express.urlencoded({extended:true}));
ap.use(express.json());
ap.set('view engine','pug');
ap.set('views','./views');

ap.get("/",function(req,res){
    res.sendFile(__dirname+ "/mul_ht.html");
    
    

})
ap.use("/studentd",studrout)
ap.use("/employ",emprout)
ap.listen(7080,function()
{
    console.log("we are in 7080 host")
})