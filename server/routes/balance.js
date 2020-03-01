const express = require('express');
const router = express.Router();
const Balance = require('../modules/Balance');


//get data
router.get('/', async(req,res)=>{
    const balance = await Balance.find().sort({_id: -1}).limit(1);

    res.status(200).json({
        data:balance
    })
})


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

module.exports = router;