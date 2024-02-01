import { StyleSheet, Text, View, Dimensions, Button, KeyboardAvoidingView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import FormInput from '../../components/FormInput';
import { Camera } from 'react-native-vision-camera';
import { RequestButton } from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AlloeNIC = ({ onPress }) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  

  useEffect(() => {
    (async () => {
      const status = await Camera.getCameraPermissionStatus();
      setCameraPermission(status);
    })();

  }, []);

  const requestPermission = async () => {
    const status = await Camera.requestCameraPermission()
    setCameraPermission(status);
    onPress()
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}

    >
      {/* <View  style={{
          ...styles.basic_container,

          position: 'relative',
          backgroundColor: 'white',
        }} /> */}

     <View style={{padding:15}}>

      <View>
        <Text style={{ fontSize: 24, fontWeight: '900', color: 'green', marginBottom: 15 }}>Scan your CNIC</Text>
        <View style={styles.acordion}>
          <Text style={styles.text2}>{'\u2022'}</Text>
          <Text style={styles.text2}> Remove the IC cover, if you have one </Text>
        </View>

        <View style={styles.acordion}>
          <Text style={styles.text2}>{'\u2022'}</Text>
          <Text style={styles.text2}> Find a suitable surface (avoid digital screens/bright or dark surfaces) </Text>
        </View>

        <View style={styles.acordion}>
          <Text style={styles.text2}>{'\u2022'}</Text>
          <Text style={styles.text2}> Align your CNIC until all 4 black/white lines appear </Text>
        </View>
      </View>

      <View style={styles.container2}>
        <View >
          <Image source={require('../../assets/SignUp/cnicfront.png')} style={{ resizeMode: 'contain', height: windowHeight * 0.15 }} />
        </View>
        <View style={styles.cardView}>
          <Image source={require('../../assets/SignUp/cnicback.png')} style={{ resizeMode: 'contain', height: windowHeight * 0.15 }} />

        </View>
      </View>
      <View style={{ width: "100%", backgroundColor: '#DCF2FC', padding: 20, marginVertical: 15 }}>
        <Text
          style={{
            fontSize: 14,

            color: "#006400",
            fontFamily: "Poppins-Regular"
          }}
        >Note: Unclear Image prevent account opening.</Text>
      </View>
      <View style={{alignItems:"center" , marginTop:45}}>
        <RequestButton btnStyle={{ paddingBottom: 20 }} text={'Confirm'} onPress={requestPermission} />
      </View>
     </View>


    </KeyboardAvoidingView>
  )
}

export default AlloeNIC

const styles = StyleSheet.create({
  acordion: {
    display: 'flex',
    alignItems: 'center',
    width: windowWidth * 0.9,
    flexDirection: 'row',


  },
  text2: {
    fontSize: 17,
    color: "#808080",
    fontFamily: "Poppins-Regular"
  },
  container: {
    flex: 1,
    padding: 20,
    height: windowHeight * 0.9,

    justifyContent: 'space-between'
  },
  numberText: {
    fontSize: 28, color: "green", fontWeight: "700", lineHeight: 33.6
  },
  container1: {
    display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row'
  },
  container2: {
    display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'column',
    // width: windowWidth * 0.8,
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  cardText: {
    padding: 30
  },
  cardView: {
    display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    padding: 10
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    padding: 3,

    lineHeight: 22,
  },
  text2: {
    fontSize: 14,

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