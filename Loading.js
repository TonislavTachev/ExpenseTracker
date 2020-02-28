import React,{useEffect} from 'react'
import Progressbar from './Progressbar'
import {View, Text, StyleSheet, Image} from 'react-native';
import { BackHandler } from 'react-native';

const Loading = ({navigation}) => {

   useEffect(() => {
      setTimeout(() => {
            navigation.navigate('Home');
      }, 2000);
      
   }, [])

    return (
        <View style={myStyle.body}>
             <View>
             <Text style={myStyle.text}>Expense.io</Text>
             <Image style={myStyle.img} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/expense-1491849-1263308.png'}}/>
             </View>
             <View style={myStyle.progress}>
             <Progressbar/>
             </View>
        </View>
    )
}

export default Loading

const myStyle= StyleSheet.create({
   body:{
       backgroundColor:"#78D5D7",
       flex:1,
       alignItems:'center'
   },
   text:{
       textAlign:'center',
       fontSize:30,
       color:'black',
       marginTop:50
   },
   progress:{
       marginTop:350
   },
   img:{
       height:120,
       width:120,
       marginLeft:12,
       marginTop:10
   }
})