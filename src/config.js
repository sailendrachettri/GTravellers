const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/GT");

connect.then(()=>{
    console.log("Database connected successfully!");
}).catch(()=>{
    console.log("Database CANNOT be connected!");
})

// create schema
const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true
    },
    message : {
        type : String
    }
});

const collection = new mongoose.model("users", UserSchema);
module.exports = collection;