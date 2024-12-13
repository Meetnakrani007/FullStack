const express = require("express");
app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


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
app.use(methodOverride("_method"));

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

//Edit Route
app.get("/chats/:id/edit",async (req,res)=>{

  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{ chat });
});



//Update Route
app.put("/chats/:id",async (req,res)=>{
let {id} = req.params;
let {msg: newMsg } = req.body;
let updatedChat = await Chat.findByIdAndUpdate(id,
  {
  
    msg: newMsg
  },
  {
    runValidtors: true , new: true
  },

);
console.log(updatedChat);
res.redirect("/chats"); 
});

//delete
app.delete("/chats/:id",async (req,res)=>{
  let {id} = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats"); 
  });

let port = 8080 ;
app.listen(port,()=>
{
    console.log(`listning on port ${port}`);
});