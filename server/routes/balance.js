const express = require('express');
const router = express.Router();
const Balance = require('../modules/Balance');


//get balance
router.get('/', async(req,res)=>{
    const balance = await Balance.find().sort({_id: -1}).limit(1);

    res.status(200).json(balance);
})

//create balance
router.post('/create', async(req,res)=>{
    //get the data
    const {balance, profit, expense } = req.body;

    const newBalance = new Balance({
        balance,
        profit,
        expense
    })
    
    const savedBalancec = await newBalance.save();

    res.status(200).json({
        data:savedBalancec
    })
})

//update balance
router.put('/update/:id', async(req,res)=>{
     
     //get data coming from the app
     const {profit, expense, balance} = req.body;

     const newBalance = {};
     if(profit) newBalance.profit = profit;
     if(expense) newBalance.expense = expense;
     if(balance) newBalance.balance = balance;
     
    
     //check if the balance exists and update
     const b = await Balance.findByIdAndUpdate(req.params.id, {$set: newBalance}, {new:true});
     
     res.status(200).json(b);

})

module.exports = router;