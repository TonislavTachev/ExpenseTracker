const mongoose = require('mongoose');
const balanceSchema = new mongoose.Schema({
    balance:{
       type:Number,
       required:true
    },
    profit:{
        type:Number,
        required:true
    },
    expense:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('balance', balanceSchema);