import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function Input({def,changeto,units}) {
  return (
    <View style = {s.root}>
        <TextInput onChangeText={text=>changeto(text)} defaultValue={def} maxLength={5} style = {s.input} placeholder='Type Your Temperature here:'w></TextInput>
        <Text style = {s.unit}>{units}</Text>
    </View>
  )
}
const s = StyleSheet.create({
    input:{
        height:50,
        backgroundColor: "white",
        borderRadius:15,
        paddingLeft:15,
        margin: 25
    },
    root:{
        alignSelf: "stretch",
        justifyContent: "center"
    },
    unit:{
        position: "absolute",
        alignSelf:"flex-end",
        paddingRight: 40,
        paddingBottom: 6,
        fontSize: 30
    }
})

export default Input