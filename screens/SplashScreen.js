import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation =useNavigation()

  // const style = {
  //   color: "red",
  //   fontSize: 25
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('SignUp')
  //   }, 1000); // Navigate to Home screen after 10 seconds
  // }, [navigation]);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})