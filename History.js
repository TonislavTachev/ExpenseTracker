import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

const History = () => {
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
        marginTop:20
    }
})

export default History
