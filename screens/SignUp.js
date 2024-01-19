import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Otp from './Otp';
import NewPassword from './NewPassword';
import Terms from './Terms';

const labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,

    labelColor: '#999999',
    labelSize: 13,
 
  }
  

const SignUp = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [otp, setOtp] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const renderStep = () => {
    switch (currentPosition) {
      case 0:
        return(
            <Otp onPress={()=>setCurrentPosition(currentPosition+1)}/>
        )
        // Render step 1
      
        break;
      case 1:
       return(
        <Terms/>
       )
        // Render step 2
    
      default:
        return null;
    }
  }

  return (
    <View>
    <Text>
    {currentPosition+1}
    </Text>
      {renderStep()}
    </View>
  )
}

export default SignUp;
