import { StyleSheet, Text, View,Dimensions,Button,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import style from '../../assets/styles/basic';
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
import { RequestButton } from '../../components/Buttons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AllowSelfie = ({onPress}) => {
    const onDisplayNotification= async()=> {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
      }
      const navigation = useNavigation()
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
        
  <LottieView source={require('../../assets/lotiefiles/take_selfie_animation.json')} autoPlay style={{width:"100%",height:200}} />

    </View>
    <View style={{padding:5}}>
    <Text style={{fontSize: 25, fontWeight:'bold',color:'green',marginBottom:15}}>Now, let’s take a selfie</Text>
    <Text style={styles.text2}>Before proceeding, ensure there’s good lighting</Text>
    </View>
   


            <RequestButton text={"Take Sefie"} onPress={()=>navigation.navigate('SelfieCamera')}
                btnStyle={{ position: "absolute", bottom: 50 }}
            />
        </View>
    </View>
</>

)
}

export default AllowSelfie

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
      }
})