const express=require('express');
const mongoose= require('mongoose');
var cors=require('cors');
var app = express();
var userRoute= require("./routes/user");
var todoRoute= require("./routes/todo")
var PORT=3334;

mongoose.connect("mongodb://127.0.0.1:27017/NodeTask", ()=>{
    console.log("connected to mongo");
});
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/todos", todoRoute);

app.use("*",(req,res)=>{
    res.status(404).end("path not found Enter Valid url ya Akhoya !")
})

app.use((err,req,res,next)=>{
   res.status(500).json({message:err.message})
})

app.listen(PORT, function(){
    console.log(`server listening on port ${PORT}`);
});