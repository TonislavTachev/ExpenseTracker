const mongoose = require('mongoose');
const ProfitSchema = new mongoose.Schema({
    typeOfProfit:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('profit', ProfitSchema);