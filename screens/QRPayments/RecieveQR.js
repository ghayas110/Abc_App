import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const RecieveQR = () => {
  return (
    <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
 <Image source={require('../../assets/QRPayment/Recieve.png')}/>
    </View>
  )
}

export default RecieveQR

const styles = StyleSheet.create({})