import {ADD_EXPENSE,GET_PROFIT, GET_EXPENSE, DELETE_PROFIT, DELETE_EXPENSE, CALCULATE_BALANCE, GET_LATEST_BALANCE, UPDATE_BALANCE} from '../types'

export default (state,action) =>{
  
     switch (action.type) {
         case ADD_EXPENSE:
             return {
                 ...state,
                 expense:[...state.expense, action.payload],
             }
             break;

         case GET_EXPENSE:
         return {
             ...state,
             expense:action.payload,
             loading:false
         }
         case GET_LATEST_BALANCE:
         return {
             ...state,
             balance:action.payload,
             balanceLoading:false
         }
         case UPDATE_BALANCE:
         return {
             ...state,
             balance:action.payload,
             balanceLoading:false
         }
         case DELETE_EXPENSE:
         return {
             ...state,
             expense: state.expense.filter(item => item._id !== action.payload),
             loading:false
         }
         default:
             break;
     }
}