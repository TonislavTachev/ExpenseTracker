import React, {useReducer} from 'react'
import TransactionReducer from './TransactionReducer';
import TransactionContext from './transactionContext';
import axios from 'axios';
import {ADD_EXPENSE, GET_EXPENSE, GET_PROFIT, DELETE_PROFIT, DELETE_EXPENSE} from '../types'
const TransactionState = props => {

    const initialState = {
        expense:[],
        profit:[],
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
            const res = axios.get('http://192.168.0.14:5000/calc/expenses');
            dispatch({type:GET_EXPENSE, payload:res.data.data});
        } catch (error) {
            
        }
    }

    return (
        <TransactionContext.Provider value={{
           expense: state.expense,
           profit: state.profit,
           loading: state.loading,
           createExpense,
           getExpense
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionState
