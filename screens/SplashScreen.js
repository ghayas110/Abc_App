import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {RequestButton,OutlineButton,CancelButton} from '../components/Buttons';
import {SimpleInput,OtpInput, CheckBoxInput,List} from '../components/Inputs';

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
      {/* <RequestButton text={"Press"}/> */}
      <RequestButton text={"Press"}/>
      <OutlineButton text={"outline"}/>
      <CancelButton text={"Cancel"}/>
      <SimpleInput
        inputstyle={{
          fontSize: 20,
          borderBottomWidth: 1, 
          borderBottomColor: '#808080',
        }}
        placeholderTextColor="#808080"
        label={"Enter Your Name"}
        type={"text"}
        placeholder={"Type your full name..."}
      />

      <OtpInput />
      <CheckBoxInput text={"Term & contitions Apply"} color={"red"}/>
      <List label={"Select an option"}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})