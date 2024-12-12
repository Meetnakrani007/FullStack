const mongoose = require('mongoose');

main().then(
    ()=>
    {
        console.log("success");
    }
)
.catch((err)=>{
    console.log(err);
});

async function main ()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number
    }
);
const User = mongoose.model("User",userSchema);

// const user1 =new User({
//     name: "Adam",
//     email : "adam@gmail.com",
//     age: "18",
// });
// const user2 =new User({
//     name: "Eve",
//     email : "eve@gmail.com",
//     age: "18",
// });

//findoneandupdatemany
// User.findOneAndUpdate({name: "Bruce"},{age: 64},{new : true}).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });

//find by id and delete

// User.findByIdAndDelete("6759409d2234bc262931bada",{new: true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//updatemany
// User.updateMany({age: {$gt: 48}},{age: 57}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//find by id 
// User.findById('6759409d2234bc262931bada').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//Find by find function

// User.find({age: {$gt :30}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// user1.save().then((res)=>{
    //     console.log(res);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email:"tony@gmail.com" ,age: 25 },
//     {name: "Peter", email:"peter@gmail.com" ,age: 40 },
//     {name: "Bruce", email:"bruce@gmail.com" ,age: 50 },
// ]).then((res)=>{
//     console.log(res);
// });
