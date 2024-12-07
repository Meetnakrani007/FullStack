const express =require("express");
const app = express();
let port =8080;
app.listen(port,()=>
{
    console.log(`Listaning on port : ${port} `)
});
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.get("/ragister",(req,res)=>
{
let { user , password } = req.query;
 res.send(`standard Get response , Welcome ${user}`);
});


app.post("/ragister",(req,res)=>
{
    let {user , password} = req.body;
    
 res.send(`standard Post response , Welcome ${user}`);
 
});