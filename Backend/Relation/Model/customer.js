const mongoose = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("Mongoose is working");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const orderSchema = new Schema([{
    item : String,
    price : Number,
}]);

const customerSchema  = new Schema({
    name: String,
    orders :
    [
        {
            type: Schema.Types.ObjectId,
            ref: "order"
        }
    ],
});

customerSchema.post("findOneAndDelete", async (Customer) =>{
    if(Customer.orders.length)
    {
        let res = await order.deleteMany({ _id: { $in: Customer.orders }  });
        console.log(res);
    }
    
});

const order = mongoose.model("order",orderSchema);
const customer = mongoose.model("customer",customerSchema);



const addCustomer = async()=>
{
    let cus1 = new customer(
        {
            name: "Rajesh",
        }
    );
    let order1 = await order.findOne({item: "chips"});
    let order2 = await order.findOne({item: "chocalate"});
    let order3 = await order.findOne({item: "samosa"});

    cus1.orders.push(order1);
    cus1.orders.push(order2);
    cus1.orders.push(order3);

    let result = await customer.find({});
    console.log(result);
}
// addCustomer();




const addCust = async() =>{

    let newCust = new customer({
        name: "Dhruv Jurel"

    });
    let newOrder = new order({
        item : "fish",
        price : 500,
    });
    newCust.orders.push(newOrder);

    await newCust.save();
    await newOrder.save();
}
// addCust();



const delCust = async() =>{
    let data = await customer.findByIdAndDelete("67822712eb45cd8f53a2537b");
    console.log(data);

}
// delCust();





const delOrder = async() =>{
    let data = await order.findByIdAndDelete("6782244976d333361ce6bcbd");
    console.log(data);
}
// delOrder();













// const addOrder = async()=>{
//     let res = await order.insertMany(
//        [ {item : "chips",price: 20},
//         {item : "chocalate",price: 30},
//         {item : "samosa",price: 25},
//     ]

//     );
//     console.log(res);
// };
// addOrder();