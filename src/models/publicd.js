const mongoose = require("mongoose");
const validator = require("validator");

const publicSchema = new mongoose.Schema({
    User_id:{type:Number},
    Country:{type:String},
    State:{type:String},
    District:{type:String},
    Area:{type:String},
    Landmark:{type:String}

}, {collection:"Publicdatabase"})

const publicdetails = new mongoose.model("Publicdatabase" ,publicSchema);
module.exports = publicdetails;