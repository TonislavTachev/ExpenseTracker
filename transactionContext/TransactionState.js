import React, {useReducer} from 'react'
import TransactionReducer from './TransactionReducer';
import TransactionContext from './transactionContext';
import axios from 'axios';
import {ADD_EXPENSE, GET_EXPENSE, GET_PROFIT, DELETE_PROFIT, DELETE_EXPENSE, CALCULATE_BALANCE, GET_LATEST_BALANCE} from '../types'
const TransactionState = props => {

    const initialState = {
        expense:[],
        balance:null,
        loading:true,
    }
    
    const [state, dispatch] = useReducer(TransactionReducer,initialState); 

    const createExpense  = async(desc, value) =>{
        

       const obj = {
           description:desc,
           value:value,
       }

       const config = {
           'Content-Type': 'application/json'
       }

       try{
           const data = await axios.post('http://192.168.0.14:5000/calc/expenses/add',obj, config);
          dispatch({type:ADD_EXPENSE, payload:data.data.data});
       } catch(error){
           console.log(error);
       }
    }

    const getExpense = async() =>{
        try {
            const res = await axios.get('http://192.168.0.14:5000/calc/expenses');
            dispatch({type:GET_EXPENSE, payload:res.data.data});
        } catch (error) {
            
        }
    }

    const calculateBalance = async(id) =>{
        console.log(id);
        try {
            const res = await axios.get('http://192.168.0.14:5000/calc/expenses');
            var expense = 0;
            let profit = 0;
            res.data.data.map(el =>{
                if(el.value.slice(0,1) === '-'){
                    let exp = parseInt(el.value.replace('-',''));
                    expense += exp;
                } else if(el.value.slice(0,1) === '+'){
                    let prof = parseInt(el.value.replace('+',''));
                    profit += prof
                }
            })
            const balanceObj = {
                    profit:profit,
                    expense:expense,
                    balance: profit-expense
            }
            
            createBalance(balanceObj);
        } catch (error) {
            
        }
    }

    const getBalance = async() =>{
        try{
           const res = await axios.get('http://192.168.0.14:5000/calc/balance');
           console.log(res.data.data[0]);
            dispatch({type:GET_LATEST_BALANCE, payload:res.data.data[0]});
        } catch(error){

        }
    }

    const createBalance = async(obj) =>{

        try {
           const config = {
             "Content-Type" : "application/json"
         }

         const res =  await axios.post('http://192.168.0.14:5000/calc/balance/create', obj, config);   
        } catch (error) {
            
        }
    }

    return (
        <TransactionContext.Provider value={{
           expense: state.expense,
           loading: state.loading,
           balance: state.balance,
           createExpense,
           getExpense,
           calculateBalance,
           getBalance
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionState
