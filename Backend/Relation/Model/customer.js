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
const order = mongoose.model("order",orderSchema);
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

    // cus1.orders.push(order1);
    // cus1.orders.push(order2);
    // cus1.orders.push(order3);

    let result = await customer.find({});
    console.log(result);

}
addCustomer();
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