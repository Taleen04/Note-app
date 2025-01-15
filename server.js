var express=require('express');
var cors=require('cors');
var app=express();
app.use(cors());

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Server strted.....");

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}    
);