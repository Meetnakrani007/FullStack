const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({ title: "hello" });
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "678f395ce1be2419098398c1",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was intialized");
};
initDB();
