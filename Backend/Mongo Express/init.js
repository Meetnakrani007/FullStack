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
let allChats =[
    {
        from : "Ram",
        to: "Lakshman",
        msg: "Where is the lanka",
        created_at: Date(),
    },
    {
        from : "Rahul",
        to: "Ronit",
        msg: "How are You?",
        created_at: Date(),
    },
    {
        from : "Cesar",
        to: "Ganesh",
        msg: "Thank you for comming!",
        created_at: Date(),
    },
    {
        from : "Vayu",
        to: "Cheeku",
        msg: "You are the Best Racer",
        created_at: Date(),
    },
    
];

Chat.insertMany(allChats).then((res)=>{
    console.log(res);
})
