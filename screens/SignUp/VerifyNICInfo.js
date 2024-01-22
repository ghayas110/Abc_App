import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerifyNICInfo = ({onPress}) => {
 
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
    <View style={styles.container}>
    <View>
    <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>Verify your identity</Text>

    </View>
<View style={styles.container1}>
<View >
<Text style={styles.numberText}>1</Text>
</View>
<View style={styles.cardView}>
<Image source={require('../../assets/SignUp/nic1.png')}/>
<Text style={styles.text2}>Scan the front and back of your NIC</Text>
</View>
</View>
<View style={styles.container2}>
<View >
<Text style={styles.numberText}>2</Text>
</View>
<View style={styles.cardView}>
<Image source={require('../../assets/SignUp/mobilecamera.png')}/>
<Text style={styles.text2}>Take a Selfie</Text>
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

export default VerifyNICInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        height:windowHeight*0.9,
        
       justifyContent:'space-between'
      },
      numberText:{
        fontSize:28,color:"green",fontWeight:"700",lineHeight:33.6
      },
      container1: {
    display:'flex',
    alignItems:'center',justifyContent:'space-between',
    flexDirection:'row'
      },
      container2: {
        display:'flex',
        alignItems:'center',justifyContent:'space-between',
        flexDirection:'row',
        width:windowWidth*0.6
          },
      cardText:{
        padding:30
      },
      cardView:{
        display:'flex',
        alignItems:'center',justifyContent:'center'
      },
      text2:{
        fontSize: 16,
        fontWeight:"500",
        padding:15,
        textAlign:'center',
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