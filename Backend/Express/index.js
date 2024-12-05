const express = require("express");
const app = express();

let port = 3000;

app.listen(port , ()=>
{console.log(`app is liseting on port ${port}`);
});
app.get("/",(req , res)=>
{
    res.send("This is the root path");
});
app.get("/:username/:id",(req,res)=>{
   let {username,id}= req.params;
   let htmlStr =`<h1>Welcome to the <u>@${username}</u> and your page id is <u>${id}</u></h1>`
   res.send(htmlStr);
});

 
//query string
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q)
    {
        res.send(`<h1>You Nothing search</h1>`);
    }
    res.send(`<h1>Your query result is :${q}</h1>`);
    
});