const express = require("express");
const app = express();
let port = 8080;


const path = require("path");

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended :true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

let posts = [
    {
        id: uuidv4(),
        username : "Meet",
        content : "I am the junior Devloper",
    },
    {
        id: uuidv4(),
        username : "Kunj",
        content : "He Knows DBMS",
    },
    {
        id: uuidv4(),
        username : "Dhruv",
        content : "He is in it feild",
    },

];
app.listen(port , ()=>
{
    console.log(`port listening on : ${port}`);
});

app.get("/posts",(req,res)=>{

    res.render("index.ejs",{ posts });

});

app.get("/posts/new",(req,res)=>
{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>
{
    let{username , content } = req.body;
    let id = uuidv4();
    posts.push({id , username , content});
    res.redirect("/posts");

});
app.get("/posts/:id",(req,res)=>
{
        let { id } = req.params;
        let post = posts.find((p) => id === p.id );
        res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>
{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content=newContent;
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>
{
        let { id } = req.params;
        let post = posts.find((p) => id === p.id );
       res.render("edit.ejs",{post});
});