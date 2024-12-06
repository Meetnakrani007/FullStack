const express = require("express");
const app = express();
let port =3000;
const path = require("path");

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>
{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>
{
     data = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs" , { data });
});


    app.get("/ig/:username",(req,res)=>
    {
        let { username } = req.params;
        const instaData = require("./data.json");
        const data = instaData[username];
        if(data)
        {
        res.render("insta.ejs",{ data })
        }
        else
        {
            res.render("error.ejs")
        }
        
    });



app.listen(port ,()=>
{
    console.log(`Listining on port ${port}`);
})