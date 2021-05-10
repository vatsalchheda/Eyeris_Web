const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    status:{
        type:String,
        enum:["initiated","placed"],
        default:"initiated",
        required:true,
    },
    modified:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Order',OrderSchema)