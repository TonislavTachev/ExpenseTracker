const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    typeOfExpense:{
       type:String,
       required:true
    },
    value:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('expenses', expenseSchema);