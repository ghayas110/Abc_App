import React, { useState, useEffect, useRef } from 'react';
import { Camera, useCameraDevices, useCodeScanner } from 'react-native-vision-camera';
import { View, StyleSheet, Button, Dimensions, Text } from 'react-native';
import ButtonInput from '../../components/ButtonInput';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanQR = ({onPress,onCodeScanned}) => {
  const navigation = useNavigation()
  const devices = useCameraDevices('back');
  const device = devices[0];
  const camera = useRef(null);


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
  };
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes} codes!`)
      navigation.navigate('SendAmount')
    }
  })
  return (
    <View style={styles.container}>
      {cameraPermission === 'granted' && device ? (
        <View style={styles.fullscreen}>
          <Camera
          ref={camera}
            style={styles.camera}
            device={device}
            photo={true}
            isActive={true}
            
            codeScanner={codeScanner} 

          />
          <View style={styles.overlayTop} />
          <View style={styles.overlayBottom} />
          <View style={styles.overlayLeft} />
          <View style={styles.overlayRight} />
          <View style={styles.scanArea} />
          <View >
          
        </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title="Allow camera access"
            onPress={requestPermission}
            color="#f194ff"
          />
        </View>
      )}
    </View>
  );
};

export default ScanQR;

const overlayStyle = {
  position: 'absolute',
  backgroundColor: 'grey',
  opacity: 0.7,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fullscreen: {
      width: windowWidth,
      height: windowHeight,
    },
    camera: {
      flex: 1,
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,
    },
    overlayTop: {
      ...overlayStyle,
      height: (windowHeight - 440) / 2,
      width: windowWidth,
      top: 0,
    },
    overlayBottom: {
      ...overlayStyle,
      height: (windowHeight - 160) / 2,
      width: windowWidth,
      bottom: 0,
    },
    overlayLeft: {
      ...overlayStyle,
      width: (windowWidth - 310) / 2,
      height: windowHeight - (windowHeight - 160) / 2,
      top: 0,
      left: 0,
    },
    overlayRight: {
      ...overlayStyle,
      width: (windowWidth - 270) / 2,
      height: windowHeight - (windowHeight - 160) / 2,
      top: 0,
      right: 0,
    },
    scanArea: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: -160,
      marginTop: -220,
      width: 300,
      height: 300,
      borderColor: 'white',
      borderWidth: 2,
      zIndex: 1,
    },
    textStyle: {
      position: 'absolute',
      color: 'white',
      fontSize: 20,
      paddingHorizontal: 35,
      top: windowHeight / 2 + 90, // Just below the scan area
    },
    textStyle1: {
      position: 'absolute',
      color: 'white',
      fontSize: 14,
      padding: 25,
      lineHeight: 24,
      top: windowHeight / 2 + 110, // Just below the scan area
      alignSelf: 'center', // Center text horizontally
    },
    textStyle3: {
      position: 'absolute',
      color: 'white',
      fontSize: 14,
      left: 20,
      top: windowHeight / 2 + 138, // Just below the scan area
      alignSelf: 'center', // Center text horizontally
    },
    textStyle4: {
      position: 'absolute',
      color: 'white',
      fontSize: 14,
      left: 20,
      top: windowHeight / 2 + 196, // Just below the scan area
      alignSelf: 'center', // Center text horizontally
    },
    textStyle2: {
      position: 'absolute',
      color: 'white',
      fontSize: 14,
      padding: 24.7,
      lineHeight: 24,
      top: windowHeight / 2 + 170, // Just below the scan area
      alignSelf: 'center', // Center text horizontally
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  