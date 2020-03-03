import React, {useContext, useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native';
import TransactionContext from './TransactionContext/transactionContext';
import Progressbar from './Progressbar';
import Item from './Item';
;
const History = props => {
    const transactionContext = useContext(TransactionContext);
    const {expense,loading,getExpense, deletedLoading} = transactionContext
    const {navigation} = props;

    useEffect(()=>{
        getExpense();
    },[])

   if(loading === true || expense.length === 0){

       return <View style={myStyle.margin}>
       <Text style={{marginTop:5, marginBottom:5}}>No transactions currently..</Text>
       <Progressbar/>
       </View>
   }

    console.log(expense);
    return (
        <View style={myStyle.history}>
               <Text style={{marginBottom:10, fontSize:20}}>History</Text>
               <View
                  style={{
                 borderBottomColor: '#DDDDDD',
                 elevation:1,
                borderBottomWidth: 0.5,
                marginBottom:11
                     }}
                />
                {expense.map(el => <Item key={el._id} item={el} navigation={navigation}/>)}
        </View>
    )
}

const myStyle = StyleSheet.create({
     history:{
        width:'90%',
        marginTop:20,
        padding:5
    },
    margin:{
        marginTop:20
    }
})

export default History
