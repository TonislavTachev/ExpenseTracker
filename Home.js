import React, {useEffect} from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { BackHandler } from 'react-native';
import History from './History'
import Transaction from './Transaction';
const Home = ({navigation}) => {

   useEffect(()=>{
       BackHandler.addEventListener('hardwareBackPress', function() {return true}) 
   },[])


    return (
        <ScrollView>
        <View style={myStyle.body}>
            <View style={myStyle.balance}>
              <Text style={{fontSize:22}}>
               Your balance
              </Text>
              <Text style={{fontSize:30, marginTop:3}}>
              420$
              </Text>
            </View>

            <View style={myStyle.dash}>
               <View  style={myStyle.line2}>
                 <Text style={{fontSize:22}}>PROFIT</Text>
                  <Text style={{fontSize:20, marginTop:5, color:"#2EC4B6"}}>450.00</Text>
               </View>
               <View style={myStyle.line}>
               <Text style={{fontSize:22}}>EXPENSE</Text>
               <Text style={{fontSize:20, marginTop:5,color:"#E71D36"}}>30.00</Text>
              </View>
            </View>
            {/* History component */}
            <History/>
            {/* Input component */}
            <Transaction/>
        </View>
        </ScrollView>
    )
}

const myStyle = StyleSheet.create({
    body:{
        backgroundColor:'#EEEEEE',
        flex:1,
        alignItems:'center'
    },
    dash:{
        marginLeft:5,
        marginRight:5,
        padding:20,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#F7F9F9',
        width:'90%',
        elevation:10,
        marginTop:20,
    },
    line:{
     borderLeftWidth: 1,
     borderLeftColor: '#BED8D4',
     paddingLeft:30,
    },
    line2:{
        paddingRight:30
    },
    balance:{
        width:'90%',
        marginTop:10
    }
})

export default Home
