const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
          
})

const Studentregister = new mongoose.model("Studentregister",StudentSchema);
module.exports = Studentregister; 