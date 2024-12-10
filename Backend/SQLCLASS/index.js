const { faker } = require('@faker-js/faker');

const methodOverride = require("method-override");
const path = require("path");


const mysql = require ('mysql2');

const express = require("express");
const app = express();


app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); 
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended :true}));

const connection = mysql.createConnection({
host: 'localhost',
user: 'root' ,
database: 'delta_app',
password: 'Dikime@123'
});


app.listen("8080",(req,res)=>
{
    console.log("listning port on 8080");
});

//HOME ROUTE
app.get("/",(req,res)=>
{
let q="SELECT count(*) FROM user";
try
{
    connection.query(q,(err,result)=>
{
    let count = result[0]["count(*)"];
    if(err) throw err
    res.render("home.ejs",{ count });
    

});
}
catch(err)
{
    console.log(err);
    res.send("some error in data base");
}
});


//SHOW ROUTE
app.get("/user",(req,res)=>
{
let q=`SELECT * FROM user`;
try
{
    connection.query(q,(err,users)=>
{
    if(err) throw err
    res.render("show.ejs",{ users });
});
}
catch(err)
{
    console.log(err);
    res.send("some error in data base");
}
});

//EDIT ROUTE 
app.get("/user/:id/edit",(req,res)=>
{
let { id } = req.params;
let q=`SELECT * FROM user WHERE id = '${id}'`;
try
{
    connection.query(q,(err,result)=>
{
    if(err) throw err
   
    let user = result[0];
    res.render("edit.ejs",{ user });
    
});
}
catch(err)
{
    console.log(err);
    res.send("some error in data base");
}
});



let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

//PATCH ROUTE 

app.patch("/user/:id",(req,res)=>
{
    let { id } = req.params;
    let{password : formPass , username : updateUser} = req.body;
    let q =`SELECT * FROM user WHERE id = '${id}'`;
    try
{
    connection.query(q,(err,result)=>
{
    if(err) throw err
    let user = result[0];
   
    if(formPass != user.password)
    {
        res.send("Password is wrong");
    }
    else
    {
        let q2 =`UPDATE user SET username = '${updateUser}' WHERE id = '${id}'`; 
        connection.query(q2,(err,result)=>
    {
        if(err) throw err
        res.redirect("/user");
    });
    }
});
}catch(err)
{
    console.log(err);
    res.send("some error in data base");
}
});

//DELETE ROUTE 
app.get("/user/:id/delete",(req,res)=>
{
    let { id } = req.params;
    let q=`SELECT * FROM user WHERE id = '${id}'`;
try
{
    connection.query(q,(err,result)=>
{
    if(err) throw err
   
    let user = result[0];
    res.render("delete.ejs",{ user });
    
});
}
catch(err)
{
    console.log(err);
    res.send("some error in data base");
}  
});




app.delete("/user/:id",(req,res)=>
{
    let { id } = req.params;
    let{password : formPass} = req.body;
    let q =`SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q,(err,result)=>{
        if(err) throw err
        try
        {
            let user = result[0];
            if(formPass != user.password)
            {
                res.send("Your Password is Wrong");        
            }
            else
            {
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2,(err,result)=>{
                    
                    if(err) throw err
                    res.redirect("/user");
                
                });
                
            }
        }
        catch(err){
            console.log(err);
            res.send("some error in data base");
        }
    

    });
    
       
});
//ADD ROUTE
app.get("/user/add",(req,res)=>
{
    res.render("add.ejs");
});
app.post("/user/add",(req,res)=>
{
    let {id: formId , username: formUser , email: formEmail , password: formPass } = req.body;
    let q = "INSERT INTO user (id ,username ,email ,password) VALUES (? , ? , ? , ?)";
    let arr =[formId,formUser,formEmail,formPass];
    connection.query(q,arr,(err,result)=>
    {
      res.redirect("/user");
    });
});