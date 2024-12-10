const mongoose = require("mongoose");

const Schema = mongoose.Schema;
 const chat=new Schema({
    msg:string,
    
})

module.exports = mongoose.model("chat", Chat);
