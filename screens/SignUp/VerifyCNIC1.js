import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import style from '../../assets/styles/basic';
import FormInput from '../../components/FormInput';
import { RequestButton } from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerifyCNIC1 = ({onPress}) => {
  const { width, height } = Dimensions.get('window')


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >

<View style={{
        ...style.basic_container,
        height: height,
        backgroundColor: "white",
    }}>
        <View style={{
            ...style.basic_container,
            height: height*0.85,
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
  <Image source={require('../../assets/SignUp/cnicfront.png')} style={{resizeMode:'contain',height:windowHeight*0.15}}/>
          
    </View>
    <View style={{padding:17}}>
    <Text style={styles.text2}>Are all details fully visible, glare-free and readable?</Text>
    </View>
   


            <RequestButton text={"Take Again"} onPress={onPress}
                btnStyle={{ position: "absolute", bottom:100  }}
            />
            <RequestButton text={"Yes Let's continue"} onPress={onPress}
                btnStyle={{ position: "absolute", bottom: 50 }}
            />
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
        fontFamily: "Poppins-Regular",
        textAlign:'center',
        color:'black',
        fontWeight:"600"
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