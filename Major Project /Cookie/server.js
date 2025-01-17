const express = require("express");
const app = express();
const path = require("path");
const cookieParser  = require("cookie-parser");
const session = require("express-session");

app.use(session({secret : "mysupersecretstring", resave: false , saveUninitialized : true}));

app.get("/reqcount",(req,res)=>{
    if(req.session.count)
    {
        req.session.count++;
    }else{
        req.session.count = 1;
    }
   
    res.send(`Req count is ${req.session.count}`);
});





// app.get("/getcookies",(req,res)=>{
// res.cookie("name","Meet");
// res.cookie("age","19");
// res.send("sent you some cookie");
// });

// app.get("/getsignedcookies",(req,res)=>{
//     res.cookie("name","Meet",{signed:true});
//     res.send("success");
//     });

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });


// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi i am root");
// });
app.listen(3000,()=>{

    console.log("app listning on 3000 ");
});
