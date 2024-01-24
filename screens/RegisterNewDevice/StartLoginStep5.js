import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert, Dimensions, KeyboardAvoidingView } from 'react-native';
import ButtonInput from '../../components/ButtonInput';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/reducers/authReducer';
import { useNavigation } from '@react-navigation/native'
import style from '../../assets/styles/basic';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StartLoginStep5 = ({ onPress,route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const dispatch=useDispatch()
const navigation =useNavigation()
  const [email, setEmail] = useState(route?.params?.bodys?.email);
  const [user_type, setuser_type] = useState(route?.params?.bodys?.user_type)
  const inputRefs = useRef(Array(4).fill(0).map((_, i) => i));
  console.log(route?.params?.bodys?.user_type,"sss")
  
  const ForWordnavigation = () => {
    navigation.navigate('StartLoginStep6');
};

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input if a digit is entered
    if (value !== '') {
      const nextIndex = index + 1;
      if (nextIndex < 4) {
        inputRefs.current[nextIndex].focus();
      }
    }

    setOtp(newOtp);
  };

  const handleBackspace = (index) => {
    const newOtp = [...otp];

    // Move to the previous input on backspace
    if (index > 0) {
      const prevIndex = index - 1;
      inputRefs.current[prevIndex].focus();
    }

    newOtp[index] = '';

    setOtp(newOtp);
  };

  const handleSubmit = async({route}) => {

    const enteredOtp = otp.join('');
    console.log('Entered OTP:',parseInt(enteredOtp) );
   
    try {
      if (otp) {

    
      } else {
      Alert.alert('An error occurred while processing your request.')
      }

    }catch (error) {
        console.log('An error occurred while processing your request.');
      }

   
  };

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={styles.container}
  >
    <View style={styles.container}>
    <View>
    <Text 
    style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}
    >Enter your One-Time Password (OTP)</Text>
    <Text style={styles.text2}>We have sent your one time password to ‘+96XXXXX1234’</Text>

      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.input}
            maxLength={1}
            value={digit}
            placeholderTextColor='white'
            onChangeText={(value) => handleInputChange(index, value)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
          />
        ))}
      </View>
      </View>
      <View>
      <Button
title="Continue"
color="green"
style={{borderRadius:50,borderWidth:1}}
onPress={()=>ForWordnavigation()}
/>
</View>
      
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    height:windowHeight*0.9,
    
   justifyContent:'space-between'
  },
  text2:{
    fontSize: 17,        
    color: "#808080",
    fontFamily: "Poppins-Regular"
  },
  title: {
    fontSize: 24,
    color: 'orange',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    
    marginVertical: 60,
    alignItems:'center',
    justifyContent:"center",
    display:'flex',
    width:'100%'
  },
  input: {
    height: 40,
    width: 40,
    borderBottomWidth: 1, // This adds a bottom border
    borderBottomColor: 'green', // This sets the bottom border color to black
    margin: 5,
    textAlign: 'center',
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default StartLoginStep5;


