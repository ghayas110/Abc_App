import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation =useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DetailOne')
    }, 1000); // Navigate to Home screen after 10 seconds
  }, [navigation]);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})