import {ADD_EXPENSE,GET_PROFIT, GET_EXPENSE, DELETE_PROFIT, DELETE_EXPENSE} from '../types'


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
         break;
         default:
             break;
     }
}