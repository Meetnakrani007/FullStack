const express = require("express");
app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main().then((res)=>
{
    console.log("success");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended :true}));


//Index route
app.get("/chats",async (req,res)=>{

    let chats = await Chat.find();
    res.render("home.ejs",{ chats });
});

//New route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//post route for new.ejs
app.post("/chats",(req,res)=>{
  let {from,msg,to} =req.body;
  let newChat = new Chat(
    {
        from : from,
        msg: msg,
        to: to,
        created_at: new Date(),
    }
  );

  newChat.save().then((res)=>{
    console.log(res);
  }).catch((err)=>
{
    console.log(err);
});

res.redirect("/chats");
});

let port = 8080 ;
app.listen(port,()=>
{
    console.log(`listning on port ${port}`);
})