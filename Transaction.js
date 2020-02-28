import React from 'react'
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
const Transaction = () => {
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
             <TextInput style={myStyle.input} placeholder="Went grocery shopping..."/>
             <Text style={{marginTop:10, fontWeight:'bold'}}>Amount</Text>
             <View style={myStyle.tip}><Text style={{fontSize:16}}>(negative - expense, positive - income)</Text></View>
             <TextInput style={myStyle.input} placeholder="0"/>
             <View style={myStyle.btn}>
               <TouchableOpacity style={myStyle.realBtn}>
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
       padding:5
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
      padding:5
   }
})

export default Transaction
