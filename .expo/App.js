import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Sunny from './assets/sunny.jpg';
import Cold from './assets/cold.jpg'
import Input from '../../myapp/Input';
import { useEffect, useState } from 'react';
import Temperature from '../../myapp/Temperature';
import { convertTemperatureTo,getOpposite,UNITS } from '../utils/convertor';
import Button from '../../myapp/Button';
import { isIceTemperature } from '../utils/convertor';

export default function App() {




    const[value,setValue] = useState(0)
    const[unit,setUnit] = useState("°F")
    const[currentbg,setBg] = useState(Cold)

  useEffect(()=>{
    if(isIceTemperature(value,unit))
    {
      setBg(Cold)
    }
    else{
      setBg(Sunny)
    }
  },[value,unit])


  return (
    <ImageBackground source = {currentbg} style = {s.backImg}>
      <SafeAreaView style = {s.root}>
        <View style = {s.workspace}>
          <Temperature temp={convertTemperatureTo(value,getOpposite(unit))} units={getOpposite(unit)}></Temperature>
          <Input def = {0} changeto={setValue} units={unit}></Input>
          <Button fun={()=>{setUnit(getOpposite(unit))}} unit = {unit}></Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center"
  },
  workspace: {
    height: 450,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  backImg:{
    height: "100%"
  }
  
});
