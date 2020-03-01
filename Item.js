import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Item = props => {
    const {item} = props;

    return (
        <TouchableOpacity style={[item.value.slice(0,1) === '-' ? myStyles.expense : myStyles.profit]}>
            <Text style={myStyles.text}>{item.typeOfExpense}</Text>
            <Text style={myStyles.text}>{item.value} $</Text>
        </TouchableOpacity>
    )
}


const myStyles = StyleSheet.create({
    expense:{
        width:'100%',
        borderWidth:5,
        marginBottom:10,
        borderBottomColor:'#FFF',
        borderTopColor:'#FFF',
        borderRightColor:'#F71735',
        borderLeftColor:'#FFF',
        backgroundColor:'#FFF',
        elevation:3,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    profit:{
        width:'100%',
        borderWidth:5,
        marginBottom:10,
        borderBottomColor:'#FFF',
        borderTopColor:'#FFF',
        borderRightColor:'#20BF55',
        borderLeftColor:'#FFF',
        backgroundColor:'#FFF',
        elevation:3,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:18
    }
})
export default Item
