import { StyleSheet, Text, View,Image } from 'react-native'
import QR from '../../assets/HomeScreenImages/UniversalQR.png'
import React from 'react'

const RecieveQR = () => {
  return (
    <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%' , backgroundColor:"#FFFFFF"}}>
      <Image source={QR}/>
    </View>
  )
}

export default RecieveQR

const styles = StyleSheet.create({})