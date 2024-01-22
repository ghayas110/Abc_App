import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const NameScreen = ({onPress}) => {
 
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
    <View style={styles.container}>
    <View>
    <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>What is your mobile number?</Text>
    <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center'}}>
<Text>+96</Text>
<FormInput
placeholder={'Enter Phone No'}
placeholderColor={'grey'}

keyboardType={'numeric'}
/>
</View>
    </View>

<View>
<Button
title="Continue"
color="green"
onPress={onPress}
/>
</View>
</View>
</KeyboardAvoidingView>
)
}

export default NameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        height:windowHeight*0.9,
        
       justifyContent:'space-between'
      },
      text2:{
        fontSize: 16,
        fontWeight:"500",
        
        lineHeight:20,
      },
      bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
})