const express = require('express');
const router = express.Router();
const expenses = require('../modules/Expenses');

router.get('/', (req,res)=>{
    res.json({msg:'hello'});
})

module.exports = router;