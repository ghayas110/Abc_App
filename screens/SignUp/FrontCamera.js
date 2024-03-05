import React, { useState, useEffect, useRef } from 'react';
import { Camera, useFrameProcessor, useCameraDevices } from 'react-native-vision-camera';
import { View, StyleSheet, Button, Dimensions, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FrontCamera = ({onPress}) => {
  const devices = useCameraDevices('back');
  const device = devices[0];
  const camera = useRef(null);
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    // do something with the frame, e.g. run AI object detection
  }, []);
  const handleTakePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
        enableShutterSound: false,
      });
   console.log(photo)
   if(photo){
    if (typeof onPress === 'function') {
      onPress();
    }
   }
    }
  };
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.getCameraPermissionStatus();
      setCameraPermission(status);
    })();
    const timeoutId = setTimeout(() => {
      handleTakePhoto()
    }, 1500); // 15 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  const requestPermission = async () => {
    const status = await Camera.requestCameraPermission()
    setCameraPermission(status);
  };

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
            frameProcessor={frameProcessor}
          />
          <View style={styles.overlayTop} />
          <View style={styles.overlayBottom} />
          <View style={styles.overlayLeft} />
          <View style={styles.overlayRight} />
          <View style={styles.scanArea} />
          <View >
          <Text style={styles.textStyle}> Scan Emirates ID (FRONT):</Text>
          <Text style={styles.textStyle3}>{'\u2022'}</Text>
          <Text style={styles.textStyle1}>Place inside the frame until all 4 edges are aligned and it will capture automatically.</Text>
          <Text style={styles.textStyle4} >{'\u2022'}</Text>
          <Text style={styles.textStyle2}>Ensure there’s no glare covering important details</Text>
        </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
         
        </View>
      )}
    </View>
  );
};

export default FrontCamera;

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
    height: (windowHeight - 280) / 2,
    width: windowWidth,
    top: 0,
  },
  overlayBottom: {
    ...overlayStyle,
    height: (windowHeight - 115) / 2,
    width: windowWidth,
    bottom: 0,
  },
  overlayLeft: {
    ...overlayStyle,
    width: (windowWidth - 300) / 2,
    height: 197.5,
    top: (windowHeight - 280) / 2,
    left: 0,
  },
  overlayRight: {
    ...overlayStyle,
    width: (windowWidth - 300) / 2,
    height: 197.5,
    top: (windowHeight - 280) / 2,
    right: 0,
  },
  scanArea: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    marginTop: -100,
    marginLeft: -150,
    width: 300,
    height: 200,
    borderColor: 'white',
    borderWidth: 2,
    zIndex: 1,
  },
  textStyle: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    paddingHorizontal:35,
    top: windowHeight / 2 + 90, // Just below the scan area
    // Center text horizontally
  },
  textStyle1: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    padding:25,
    lineHeight:24,
    top: windowHeight / 2 + 110, // Just below the scan area
    alignSelf: 'center', // Center text horizontally
  },
  textStyle3: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    
    left:20,
    
    top: windowHeight / 2 + 138, // Just below the scan area
    alignSelf: 'center', // Center text horizontally
  },
  textStyle4: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    left:20,
    
    top: windowHeight / 2 + 196, // Just below the scan area
    alignSelf: 'center', // Center text horizontally
  },
  textStyle2: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    padding:24.7,
    lineHeight:24,
    top: windowHeight / 2 + 170, // Just below the scan area
    alignSelf: 'center', // Center text horizontally
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});