var express=require('express');
var cors=require('cors');
var app=express();
var noteRoute=require('./route/noteRoute')
app.use(cors());


var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Server strted.....");

})

app.use("/api/v1",noteRoute);
app.listen(2000,()=>{
    console.log("Server is running on port 5000");
}    
);