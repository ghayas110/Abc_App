
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const ButtonInput = ({onPress}) => {
  return (
    <View>

    <TouchableOpacity onPress={onPress}>

    <Text>ButtonInput</Text>
    </TouchableOpacity>
    </View>
  )
}

export default ButtonInput

const styles = StyleSheet.create({})