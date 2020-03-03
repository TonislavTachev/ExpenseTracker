const express = require('express');
const router = express.Router();
const expenses = require('../modules/Expenses');

//get expenses
router.get('/', async(req,res)=>{
    const arrayOfExpenses = await expenses.find({});
    
    res.status(200).json({
        data:arrayOfExpenses
    })
})

//create Expense
router.post('/add', async(req,res)=>{

//get data from app
const {description, value} = req.body

//search and see if there is a previous record
const newExpense = new expenses({
    typeOfExpense:description,
    value:value
})

const expense = await newExpense.save();
//send back the object
res.status(200).json({
    data:expense
})

})

//delete expense
router.delete('/delete/:id', async(req,res)=>{
    await expenses.findByIdAndDelete(req.params.id);
    res.status(200);
})

module.exports = router;