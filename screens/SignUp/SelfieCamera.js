import React, { useState, useEffect, useRef } from 'react';
import { Camera, useFrameProcessor, useCameraDevices } from 'react-native-vision-camera';
import { View, StyleSheet, Button, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelfieCamera = ({ onPress }) => {
  const [cameraPosition, setCameraPosition] = useState('back');
  const [cameraPos, setCameraPos] = useState('portrait');
  const navigation = useNavigation();
  const devices = useCameraDevices();
  const device = devices.find(device => device.position === cameraPosition);
  const camera = useRef(null);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    // do something with the frame, e.g. run AI object detection
  }, []);

  const handleTakePhoto = async () => {
    if (camera.current) {
      setCameraPos('portrait'); // Set camera orientation to portrait when taking photo
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
        enableShutterSound: false,
      
      });
      console.log(photo);
      if (photo) {
        setCameraPosition('back');
        navigation.navigate('SelfiePreview', { photo: photo });
      }
    }
  };

  const [cameraPermission, setCameraPermission] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchCameraPermission = async () => {
        const status = await Camera.getCameraPermissionStatus();
        setCameraPermission(status);
      };
      fetchCameraPermission();

      const timeoutId = setTimeout(() => {
        setCameraPosition('front');
      }, 5); // 15 seconds

      return () => clearTimeout(timeoutId);
    }, [])
  );

  const requestPermission = async () => {
    const status = await Camera.requestCameraPermission();
    setCameraPermission(status);
  };

  const switchCamera = () => {
    setCameraPosition('front');
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
            orientation= {'portrait'}
          />
          <View style={styles.overlay} pointerEvents="none">
            <View style={styles.transparentBackground} />
            <View style={styles.transparentCircle} />
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.textStyle}> Instructions</Text>
            <Text style={styles.textStyleItem}>{'\u2022'} Align your face inside the frame and look straight into the camera.</Text>
            <Text style={styles.textStyleItem}>{'\u2022'} Your face must be evenly stand out from the background</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleTakePhoto} style={styles.circularButton}></TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="Allow camera access" onPress={requestPermission} color="#f194ff" />
        </View>
      )}
    </View>
  );
};

export default SelfieCamera;

const circleSize = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullscreen: {
    width: windowWidth,
    height: windowHeight,
    position: 'relative',
  },
  camera: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
  transparentCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: (windowHeight - circleSize) / 3,
    left: (windowWidth - circleSize) / 2,
  },
  instructionContainer: {
    position: 'absolute',
    bottom: 130,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  textStyleItem: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 150,
    right: 20,
  },
  circularButton: {
    width: circleSize * 0.2,
    height: circleSize * 0.2,
    borderRadius: circleSize / 2,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});