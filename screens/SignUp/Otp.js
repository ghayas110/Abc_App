import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert, Dimensions, KeyboardAvoidingView } from 'react-native';
import ButtonInput from '../../components/ButtonInput';
import { useDispatch } from 'react-redux';
import { RequestButton } from '../../components/Buttons';
import { loginSuccess } from '../../redux/reducers/authReducer';
import style from '../../assets/styles/basic';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Otp = ({ onPress,route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const dispatch=useDispatch()
  const { width, height } = Dimensions.get('window');

  const [email, setEmail] = useState(route?.params?.bodys?.email);
  const [user_type, setuser_type] = useState(route?.params?.bodys?.user_type)
  const inputRefs = useRef(Array(4).fill(0).map((_, i) => i));
  console.log(route?.params?.bodys?.user_type,"sss")
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
            keyboardType='numeric'
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
              </View>
              <RequestButton text={"Confirm"} onPress={onPress}
                  btnStyle={{ position: "absolute", bottom: 50 }}
              />
     
          </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    height:windowHeight*0.95,
    
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

export default Otp;


