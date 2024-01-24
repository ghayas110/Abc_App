import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerifyCNIC1 = ({onPress}) => {
 
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
    <View style={styles.container}>


<View style={styles.container2}>
<View >
<Image source={require('../../assets/SignUp/cnicfront.png')} style={{resizeMode:'contain',height:windowHeight*0.15}}/>
</View>

</View>

<Text style={styles.text2}>Are all details fully visible, glare-free and readable?</Text>

<View>
<Button
title="Take Again"
color="green"
onPress={onPress}
/>

<View style={{paddingVertical:20}}>
<Button
title="Continue"
color="green"
onPress={onPress}
/>
</View>
</View>
</View>

</KeyboardAvoidingView>
)
}

export default VerifyCNIC1

const styles = StyleSheet.create({
    acordion: {
        display: 'flex',
        alignItems: 'center',
        width:windowWidth*0.9,
        flexDirection: 'row',
 
    
      },
    container: {
        flex: 1,
        padding:20,
        paddingTop:60,
        height:windowHeight*0.9,
        
       justifyContent:'space-around'
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
        flexDirection:'column',
        width:windowWidth*0.8,
        backgroundColor:'whitesmoke',
        padding:20
          },
      cardText:{
        padding:30
      },
      cardView:{
        display:'flex',
        alignItems:'center',justifyContent:'center',
        padding:10
      },
      text2:{
        fontSize: 17,        
        color: "#808080",
        fontFamily: "Poppins-Regular"
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