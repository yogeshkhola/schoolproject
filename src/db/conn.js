const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/school_data",()=>{
    console.log("connection sucessfull");
}).catch((error)=>{
console.log("connection unsucessful")
});