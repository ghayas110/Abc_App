import { StyleSheet, Text, View,Dimensions,Button,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import style from '../../assets/styles/basic';
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AllowNotification = ({onPress}) => {
    const onDisplayNotification= async()=> {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
      }
  return (
 
    <View style={styles.container}>
    <View style ={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around',height:"60%"}}>
    <Image
    style={styles.mapicon}
    source={require('../../assets/SignUp/notification.png')} // replace with your image path
    />
    <View style={{padding:17}}>
    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>Receive push notifications</Text>
    <Text style={styles.text2}>Get instant updates on your spending, rewards, and activity with SSSCO</Text>
    </View>
    </View>

<View>
<Button
title="Let's Continue"
color="green"
onPress={() => {
  onDisplayNotification();
  if (typeof onPress === 'function') {
    onPress();
  }
}}
/>
</View>
</View>

)
}

export default AllowNotification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:80,
        padding:30,
        height:windowHeight*0.95,
        
       justifyContent:'space-between'
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