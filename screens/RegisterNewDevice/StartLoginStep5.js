import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert, Dimensions, KeyboardAvoidingView } from 'react-native';
import ButtonInput from '../../components/ButtonInput';
import { useDispatch } from 'react-redux';
import { RequestButton } from '../../components/Buttons';
// import ThemeSty from '../../assets/styles/basic';
import { loginSuccess } from '../../redux/reducers/authReducer';
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../components/Icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StartLoginStep5 = ({ onPress, route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const dispatch = useDispatch()
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation()


  const inputRefs = useRef(Array(4).fill(0).map((_, i) => i));

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

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

    if (index > 0) {
      const prevIndex = index - 1;
      inputRefs.current[prevIndex].focus();
    }

    newOtp[index] = '';

    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    if (otp.join('') !== '') {
      navigation.navigate('StartLoginStep6');
      console.log(otp);
    } else {
      Alert.alert('An error occurred while processing your request.');
    }
  };
 
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        ...style.basic_container,
        height: height * 0.95,
        position: "relative",
        backgroundColor: "white",
        flex:1,
      }}
    >
<View style={styles.Progress}>
          <View style={styles.BackArrow}>
            <Icons.MaterialIcons
              name="arrow-back-ios-new"
              style={styles.BackArrowIcon}
              onPress={() =>{navigation.goBack()}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Image source={Logo} style={styles.Image} /> */}
          </View>
          <View></View>
        </View>
      {/* INPUT BOX ============================= */}
      <View style={{
        ...style.basic_container,
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30
      }}>
        <View>
          <Text
            style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold", textTransform: 'none', marginTop: 15 }}
          >Enter your One-Time Password (OTP)</Text>
          <Text style={styles.text3}>We have sent your one time password to ‘+96XXXXX1234’</Text>

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
      
      <RequestButton text={"Next"} onPress={handleSubmit}
        buttonsty={otp.join('') === '' ? { ...style.bg_gray_color } : { ...style.bg_green_color }}
        btnStyle={{ position: "absolute", bottom: 40 }}
      />

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: windowHeight * 0.95,

    justifyContent: 'space-between'
  },
  text2: {
    fontSize: 17,
    color: "#808080",
    fontFamily: "Poppins-Regular"
  },
  text3: {
    fontSize: 15,
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
    alignItems: 'center',
    justifyContent: "center",
    display: 'flex',
    width: '100%'
  },
  input: {
    height: 40,
    width: 40,
    borderBottomWidth: 1, // This adds a bottom border
    borderBottomColor: 'grey', // This sets the bottom border color to black
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
  Progress: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin:25,
   
  },
  BackArrowIcon: {
    color: '#00A200',
    fontSize: 16,
   
  },
});


export default StartLoginStep5;





