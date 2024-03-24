import React from 'react'
import { StyleSheet, Text } from 'react-native'

function Temperature({temp,units}) {
  return (
    <Text style = {s.tempText}>{temp}{units}</Text>
  )
}

const s = StyleSheet.create({
    tempText:{
        fontSize: 70,
        color: "white"
    }
})

export default Temperature