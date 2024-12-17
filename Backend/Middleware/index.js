const express = require("express");
const app =  express();

app.use((req, res , next)=>{
    
    req.time = new Date(Date.now()).toString();

    console.log(req.path , req.method , req.hostname,req.time);
    next();
});
app.get("/",(req,res)=>
{
    res.send("I am root ");
});
app.get("/random",(req,res)=>
{
    res.send("I am random path ");
})
app.listen(8080,()=>{
    console.log("listening on 8080");
})