const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const connect = mongoose.connect("mongodb://localhost:27017/GT");
// const connect = mongoose.connect("mongodb+srv://sailendra9083:2uwq2irQvi3sPu5l@cluster0.qw6sgcw.mongodb.net/GTravellers");

dotenv.config();

const connect = mongoose.connect(process.env.MONGODB_URL)


connect.then(()=>{
    console.log("Database connected successfully!");
}).catch(()=>{
    console.log("Database CANNOT be connected!");
})

// create schema
const UserSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String
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