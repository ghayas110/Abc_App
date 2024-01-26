import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Otp from './Otp';
import NewPassword from '../NewPassword';
import Terms from './Terms';
import * as Progress from 'react-native-progress';
import Icons from '../../components/Icons';
import EligibleScreen from './EligibleScreen';
import { ScrollView } from 'react-native-gesture-handler';
import NameScreen from './NameScreen';
import NumberInput from './NumberInput';
import AllowNotification from './AllowNotification';
import VerifyNICInfo from './VerifyNICInfo';
import AllowNIC from './AlllowNIC';
import FrontCamera from './FrontCamera';
import VerifyCNIC1 from './VerifyCNIC1';
import BackCamera from './BackCamera';
import VerifyCNIC2 from './VerifyCNIC2';
import AllowSelfie from './AllowSelfie';
import SelfieCamera from './SelfieCamera';
import CheckingThings from './CheckingThings';
import { useNavigation } from '@react-navigation/native';
import Steps from '../../components/steps/Steps';
const labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,

  labelColor: '#999999',
  labelSize: 13,

}


const SignUp = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [otp, setOtp] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigation = useNavigation()
  const isDecimal = (number) => Number.isFinite(number) && number % 1 !== 0;
  const renderStep = () => {
    switch (currentPosition) {
      case 0:
        return (
          <Terms onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
        // Render step 1

        break;
      case 1:
        return (
          <EligibleScreen onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
        break;
      // Render step 2
      case 2:
        return (
          <NameScreen onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
      case 3:
        return (
          <NumberInput onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
      case 4:
        return (
          <Otp onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
      case 5:
        return (
          <AllowNotification onPress={() => setCurrentPosition(currentPosition + 0.5)} />
        )
      case 5.5:
        return (
          <VerifyNICInfo onPress={() => setCurrentPosition(currentPosition + 0.5)} />
        )
      case 6:
        return (
          //  <AllowNIC onPress={()=>setCurrentPosition(currentPosition+0.2)}/>
          // 0.2
          <AllowNIC onPress={() => setCurrentPosition(currentPosition + 1.4)} />

        )
      case 6.2:
        return (
          <FrontCamera onPress={() => setCurrentPosition(currentPosition + 0.2)} />
        )
      case 6.4:
        return (
          <VerifyCNIC1 onPress={() => setCurrentPosition(Number((currentPosition + 0.2).toFixed(1)))} />
        )
      case 6.6:
        return (
          <BackCamera onPress={() => setCurrentPosition(currentPosition + 0.2)} />
        )
      case 6.8:
        return (
          <VerifyCNIC2 onPress={() => setCurrentPosition(Number((currentPosition + 0.2).toFixed(1)))} />
        )

      case 7:
        return (
          <AllowSelfie onPress={() => setCurrentPosition(Number((currentPosition + 0.2).toFixed(1)))} />
        )
      case 7.2:
        return (
          <SelfieCamera onPress={() => setCurrentPosition(Number((currentPosition + 0.2).toFixed(1)))} />
        )
      case 7.4:
        return (
          <CheckingThings onPress={() => navigation.navigate('DetailOne')} />
        )
      default:
        return null;
    }
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      {/*
    {!isDecimal(currentPosition) ?
  
   <View style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',paddingTop:10}}>
    <View style={{display:'flex',alignItems:'center',justifyContent:'flex-end',height:30}}>
    
   <Image source={require('../../assets/SignUp/docsIcon.png')}/>
    </View>
   

   <View style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
   
    <Text>
    {currentPosition+1} of 8
    </Text>

    <Progress.Bar progress={parseFloat(`0.${currentPosition+1}`)} width={100} />
    </View>

  <View style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
  <Icons.AntDesign name="user" size={20} />
  </View>
    </View>
 
    :null}
     */}
      {!isDecimal(currentPosition) ?
        <Steps
          backtoPage={false}
          totalSteps={"8"}
          activeStep={`${currentPosition + 1}`}
          leftIcon={require('../../assets/SignUp/docsIcon.png')}
          rightIcon={require('../../assets/SignUp/Profile.png')}
          ProgressBarIcon={require('../../assets/SignUp/steps.png')}
        />
        : null}
      {renderStep()}


    </ScrollView>
  )
}

export default SignUp;
