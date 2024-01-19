import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Otp = ({onPress}) => {
  const navigation = useNavigation()
  return (
    <View>
    <TouchableOpacity onPress={onPress}>
    <Text>Otp</Text>
    </TouchableOpacity>
    
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({})