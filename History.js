import React, {useContext, useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native';
import TransactionContext from './TransactionContext/transactionContext';
import Progressbar from './Progressbar';
import Item from './Item';
;
const History = () => {
    const transactionContext = useContext(TransactionContext);
    const {expense,loading,getExpense} = transactionContext

    useEffect(()=>{
        getExpense();
        console.log(expense);
    },[])

   if(loading === true){

       return <View style={myStyle.margin}><Progressbar/></View>
   }

    return (
        <View style={myStyle.history}>
               <Text style={{marginBottom:10, fontSize:20}}>History</Text>
               <View
                  style={{
                 borderBottomColor: '#DDDDDD',
                 elevation:1,
                borderBottomWidth: 0.5,
                     }}
                />
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
