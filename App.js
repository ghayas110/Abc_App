import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MainStackNavigator from './navigation/MainStackNavigator'
import store from './redux/store'
import { Provider } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const App = () => {
  
  return (
    <Provider store={store}>
      <MainStackNavigator/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})