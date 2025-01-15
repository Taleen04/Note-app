var express=require('express');
var route=express.Router();



route.get('/notes',(req,res)=>{
    res.send("get all notes");
});


module.exports = route;