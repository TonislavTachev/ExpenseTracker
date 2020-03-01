import React, {useState, useContext, useEffect} from 'react'
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ToastAndroid} from 'react-native';
import TransactionContext from './TransactionContext/transactionContext';
import Progressbar from './Progressbar';
const Transaction = () => { 


    const transactionContext = useContext(TransactionContext);
    const {createExpense, getExpense, calculateBalance,getBalance, balance} = transactionContext;
  
    const [description, setDesc] = useState('');
    const [value, setValue] = useState('');
    const [obj, setObj] = useState({
        description:'',
        value:''
    });

    useEffect(()=>{
         getBalance();
    },[]);


    const onChange = (text) =>{
            setDesc(text);
    }
  
    const onChangeValue = (value) =>{
        setValue(value);
    }

    const Submit = () =>{

        if(value === '' && description === ''){
            ToastAndroid.showWithGravity('Please use the required fields', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if (value === ''){
           ToastAndroid.showWithGravity('Please insert a value', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if(description === ''){
            ToastAndroid.showWithGravity('Please insert a description', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else {
            //handle whether the user entered a profit or an expense
            if(value.slice(0,1) === '+'){
                createExpense(description, value);
                setDesc('');
                setValue('');
                calculateBalance(balance._id);
            } else if(value.slice(0,1) === '-'){
                createExpense(description, value);
                setDesc('');
                setValue('');
                calculateBalance(balance._id);
            }  else {
                ToastAndroid.showWithGravity('Please insert as "-50" or "+50" ', ToastAndroid.LONG, ToastAndroid.BOTTOM);
            }
        }
    }
   if(balance === null){
       return <Progressbar/>
   }
   
    return (
        <View style={myStyle.body}>
             <Text style={{marginBottom:10, fontSize:20}}>Add a new transaction</Text>
               <View
                  style={{
                 borderBottomColor: '#DDDDDD',
                 elevation:1,
                borderBottomWidth: 0.5,
                marginBottom:5}}
                />
             <Text style={{fontWeight:'bold'}}>Description</Text>
             <TextInput style={myStyle.input} onChangeText={onChange} value={description} placeholder="Went grocery shopping..."/>
             <Text style={{marginTop:10, fontWeight:'bold'}}>Amount</Text>
             <View style={myStyle.tip}><Text style={{fontSize:16}}>(negative - expense, positive - income)</Text></View>
             <TextInput style={myStyle.input} placeholder="0" onChangeText={onChangeValue} value={value}/>
             <View style={myStyle.btn}>
               <TouchableOpacity style={myStyle.realBtn} onPress={Submit}>
                  <Text style={{textAlign:'center', color:'#fff'}}>SUBMIT</Text>
               </TouchableOpacity>
             </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
   body:{
       width:'90%',
       marginTop:20,
       padding:5
   },
   input:{
       borderWidth:1,
       borderColor:'#DDDDDD',
       backgroundColor:'white',
       elevation:2,
       marginTop:10,
       padding:5,
       height:50,
       fontSize:17
   },
   tip:{
       borderBottomColor:'#EEEEEE',
       borderTopColor:'#EEEEEE',
       borderRightColor:'#EEEEEE',
       backgroundColor:'#DDDDDD',
       padding:5,
       paddingLeft:10,
       borderWidth:5,
       marginTop:5,
       marginBottom:5,
       borderLeftColor:'#FF9F1C',
   },
   btn:{
       marginTop:10,
       flexDirection:'row',
       justifyContent:'center'
   },
   realBtn:{
      backgroundColor:'#78D5D7',
      width:'100%',
      padding:5,
      height:35
   }
})

export default Transaction
