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
    username : String,
    email : String,
});
const postSchema = new Schema({
    content: String,
    likes: Number,
    user:
    {
        type: Schema.Types.ObjectId,
        ref : "User",
    }
});
const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addUser = async()=>{
//     let user1 = await User.findOne({username: "Meet"});
//     let post2 = new Post({
//         content:" Ba bye :)",
//         likes: 666,
        
//     });
//     post2.user = user1;
    
//     await user1.save();
//     await post2.save();
// }
// addUser();
