const { faker } = require('@faker-js/faker');

const mysql = require ('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root' ,
database: 'delta_app',
password: 'Dikime@123'
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data=[];

let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
  

for(let i=0;i<100;i++)
{
    data.push(getRandomUser());
}
try
{
    connection.query(q,[data],(err,res)=>
{
    if(err) throw err
    console.log(res);
});
}
catch(err)
{
    console.log(err);
}
connection.end();
