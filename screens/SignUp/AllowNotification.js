import { StyleSheet, Text, View,Dimensions,Button,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'

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
    <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>Receive push notifications</Text>
    <Text style={styles.text2}>Get instant updates on your spending, rewards, and activity with Rize</Text>
    </View>
    </View>

<View>
<Button
title="Continue"
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