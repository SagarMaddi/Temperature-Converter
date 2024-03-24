import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Button({unit,fun}) {
  return (
    <>
    <TouchableOpacity onPress={fun} style={s.button}>
        <Text style = {s.buttonTxt}>Convert to {unit}</Text>
    </TouchableOpacity>
    </>
  )
}

const s = StyleSheet.create({
    button:{
        backgroundColor: "black",
        borderRadius: 30,
        width: 250,
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    buttonTxt:{
        color:"white",
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export default Button