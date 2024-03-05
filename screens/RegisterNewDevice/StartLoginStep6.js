import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from '../../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {OtpInput, SimpleInput} from '../../components/Inputs';
import {RequestButton, OutlineButton} from '../../components/Buttons';
import CongratesImage from '../../assets/StartLoginImages/CongratsImage.png';
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic';
import ProgressBar from 'react-native-progress/Bar';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
const StartLoginStep6 = ({disabled}) => {
  const [progress, setProgress] = useState(0);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);


  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const toggleBottomSheet2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
  };

  const navigation = useNavigation();

  const ForWordnavigation = () => {
    navigation.navigate('UpdateTermAndCondition');
  };
  
  return (
    <>
      <View style={styles.container}>
        <View></View>
        <LottieView
          source={require('../../assets/lotiefiles/success.json')}
          autoPlay
          style={{width: '80%', height: 300}}
        />
        <View style={{padding: 5}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '700',
              ...ThemeSty.Green_color_f,
              ...ThemeSty.Font_family,
              lineHeight: 33.6,
              height:windowHeight*0.22,
              width:windowWidth*0.8            }}>
            Congratulations! Your Digital Bank account is now registered on this device
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 0.5,
          justifyContent: 'flex-end',
          padding: 16,
          backgroundColor: '#FFFFFF',
        }}>
        <RequestButton text="Go to Home" onPress={ForWordnavigation} />
      </View>
    </>
  );
};

export default StartLoginStep6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'Space-evently',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Progress: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },

  Image: {
    width: 180,
    height: 50,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: '#00A200',
    marginTop: 10,
  },

  CheckIcon: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },

  BackArrowIcon: {
    color: '#00A200',
    fontSize: 16,
    position: 'relative',
    right: 50,
  },
  ForgotPassword: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
