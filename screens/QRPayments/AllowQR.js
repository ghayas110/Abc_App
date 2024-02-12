import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import style from '../../assets/styles/basic';
import {useNavigation} from '@react-navigation/native';
import {OutlineButton, RequestButton} from '../../components/Buttons';
import ActivationSteps from '../../components/steps/ActivationSteps';
import LottieView from 'lottie-react-native';

const AllowQR = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const nextPage = async () => {
    navigation.navigate('CreateUserName');
  };

  return (
    <>
      <View
        style={{
          //   ...style.basic_container,
          flex: 1,
          backgroundColor: 'white',
          padding: 16,
        }}>
        <View
          style={
            {
                flex: 1,
              // ...style.basic_container,
              // height: height,
              // paddingRight: 20,
              // paddingLeft: 20,
              // position: 'relative',
            }
          }>
          <View
            style={{
              //   marginTop: 80,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <LottieView
              source={require('../../assets/lotiefiles/activate_qr_payment_animation.json')}
              autoPlay
              style={{width: '100%', height: 200}}
            />
          </View>
          <Text
            style={{
              ...style.Green_color_h,
              //   marginTop: 20,
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
            }}>
            Let’s set up your DuitNow QR pay!
          </Text>
        </View>
     
     <View style={{ alignItems:"center", justifyContent:"flex-end"}}>
        <View>
          <OutlineButton
            text={'Maybe Later'}
            onPress={() => navigation.goBack()}
            btnStyle={{}}
          />
        </View>
        <View>
          <RequestButton
            text={'Set up Now'}
            onPress={() => navigation.navigate('SetupQR')}
            btnStyle={{}}
          />
        </View>
      </View>
     </View>
    </>
  );
};

export default AllowQR;
