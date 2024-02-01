import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


const NumberInput = ({onPress}) => {
  const { width, height } = Dimensions.get('window');
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={{
      ...style.basic_container,
      height: height*0.95,
      position: "relative",
      backgroundColor: "white"
  }}
  >
        
              {/* INPUT BOX ============================= */}
              <View style={{
                  ...style.basic_container,
                  marginTop: 20,
                  paddingLeft: 30,
                  paddingRight: 30
              }}>
          <View>
    
    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold",marginTop:15 }}>What is your mobile number?</Text>
    <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center'}}>
<Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:7,color:'black'}}>+96</Text>
<FormInput
placeholder={'Enter mobile number'}
placeholderColor={'grey'}

keyboardType={'numeric'}
/>
</View>
    </View>
              </View>
              <RequestButton text={"Confirm"} onPress={onPress}
                  btnStyle={{ position: "absolute", bottom: 50 }}
              />
     
          </KeyboardAvoidingView>
)
}

export default NumberInput 
