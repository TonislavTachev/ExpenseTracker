import React, {useReducer} from 'react'
import TransactionReducer from './TransactionReducer';
import TransactionContext from './transactionContext';
import {GET_EXPENSE, GET_PROFIT, DELETE_PROFIT, DELETE_EXPENSE} from '../types'
const TransactionState = props => {

    const initialState = {
        expense:null,
        profit:null,
        loading:true,

    }
    
    const [state, dispatch] = useReducer(initialState, TransactionReducer); 

    return (
        <TransactionContext.Provider value={{
           expense: state.expense,
           profit: state.profit,
           loading: state.profit
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionState
