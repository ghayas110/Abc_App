import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StepsIndicator = () => {
    const renderStep = () => {
        switch (currentPosition) {
          case 0:
            return(
                <Otp/>
            )
            // Render step 1
          
            break;
          case 1:
            <NewPassword/>
            // Render step 2
        
          default:
            return null;
        }
      }
  return (
    <View>
    <Text>
    {currentPosition+1}
    {renderStep()}
    </Text>
    </View>
  )
}

export default StepsIndicator

const styles = StyleSheet.create({})