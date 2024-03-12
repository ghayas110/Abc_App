import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';
import { RequestButton } from '../../components/Buttons';
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerifyNICInfo = ({onPress}) => {
  const { width, height } = Dimensions.get('window')
const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={{
      ...style.basic_container,
      height: height,
      position: "relative",
      backgroundColor: "white"
  }}
  >
        
              {/* INPUT BOX ============================= */}
              <View style={{
                  ...style.basic_container,
                  marginTop: 50,
                  paddingLeft: 30,
                  paddingRight: 30
              }}>
          <View>
    
    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>Verify your identity</Text>
    <View style={{display:'flex',justifyContent:'center',height:height*0.7}}>
    <View style={styles.container1}>
<View >
<Text style={styles.numberText}>1</Text>
</View>
<View style={styles.cardView}>
<Image source={require('../../assets/SignUp/nic1.png')}/>
<Text style={styles.text2}>Scan the front and back of your Emirates ID</Text>
</View>
</View>
<View style={styles.container2}>
<View style={{marginTop:20}} >
<Text style={styles.numberText}>2</Text>
</View>
<View style={styles.cardView}>
<Image source={require('../../assets/SignUp/mobilecamera.png')}/>
<Text style={styles.text2}>Take a Selfie</Text>
</View>
</View>
    </View>
    </View>
              </View>
              <RequestButton text={"Confirm"} onPress={()=>navigation.navigate("AllowNIC")}
                  btnStyle={{ position: "absolute", bottom: 50 }}
              />
     
          </KeyboardAvoidingView>
)
}

export default VerifyNICInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        height:windowHeight,
        
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
        color: "#808080",
        fontFamily: "Poppins-Regular",
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