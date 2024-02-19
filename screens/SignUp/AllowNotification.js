import { StyleSheet, Text, View,Dimensions,Button,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import style from '../../assets/styles/basic';
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
import { RequestButton } from '../../components/Buttons';
import LottieView from 'lottie-react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AllowNotification = ({onPress}) => {
    const onDisplayNotification= async()=> {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
      }
      const { width, height } = Dimensions.get('window')

  return (
 
    <>
    <View style={{
        ...style.basic_container,
        height: height,
        backgroundColor: "white",
    }}>
        <View style={{
            ...style.basic_container,
            height: height*0.95,
            paddingRight: 20,
            paddingLeft: 20,
            position: "relative"
        }}>
            <View style={{
                marginTop: 80,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
  <LottieView source={require('../../assets/lotiefiles/receive_push_notifications_animation.json')} autoPlay style={{width:"100%",height:200}} />
           
    </View>
    <View style={{padding:17}}>
    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>Receive push notifications</Text>
    <Text style={styles.text2}>Get instant updates on your spending, rewards, and activity with Digital Bank</Text>
    </View>
   


            <RequestButton text={"Let's Continue"} onPress={onPress}
                btnStyle={{ position: "absolute", bottom: 50 }}
            />
        </View>
    </View>
</>

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