const mongoose = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("Mongoose is working");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
    
    username: String,
    addresses :[
        {
            _id : false,
            location : String,
            city: String
        },
    ],
});
const User = mongoose.model("User",userSchema)
const addUser = async()=>
{
    let user1 = new User({
        
        username: "Meet",
        addresses:[
            {
                location: "805 White palace",
                city:"Surat"
            }
        ],
    });
    user1.addresses.push({
        location: "405 Shree Deep",
        city : "Anand"
    });
   let result =  await user1.save();
   console.log(result);
}
addUser();