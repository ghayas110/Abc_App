import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image,ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Steps from '../../components/steps/Steps';

import EligibleScreen from '../SignUp/EligibleScreen';
import PersonalDetails from './PersonalDetails';
import WorkDetails from './WorkDetails';
const labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,

  labelColor: '#999999',
  labelSize: 13,

}


const ApplyPF = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [otp, setOtp] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigation = useNavigation()
  const isDecimal = (number) => Number.isFinite(number) && number % 1 !== 0;
  const renderStep = () => {
    switch (currentPosition) {
      case 0:
        return (
          <PersonalDetails onPress={() => setCurrentPosition(currentPosition + 0.2)} />
        )
        // Render step 1

        break;
        case 0.2:
            return (
              <WorkDetails onPress={() => setCurrentPosition(currentPosition + 1)} />
            )
            // Render step 1
    
            break;
      case 1:
        return (
          <EligibleScreen onPress={() => setCurrentPosition(currentPosition + 1)} />
        )
      
    
    
      default:
        return null;
    }
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

    
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

export default ApplyPF;
