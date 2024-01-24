import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import SplashLogos from '../../assets/SplashImages/GroupSplash.png'
import SplashLogos2 from '../../assets/SplashImages/GroupSplash2_.png'

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [isSplashScreen, setSplashScreen] = useState(false)
  const navigation = useNavigation()
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setTimeout(() =>{
      setSplashScreen(true);
      setTimeout(() => {
        navigation.navigate('Landing')
      }, 1000)
    }, 5000)

    
    
  }, []);


  return (
    <>
      {
        isSplashScreen ?
          <View style={styles.Container}>
            <Animated.View style={{ ...styles.Logos, opacity: fadeAnim }}>
              <Image source={SplashLogos} style={styles.image1} />
              <Text style={{fontSize:16, color:"white" , fontFamily:"Poppins"}}>Powered By SSSSCO</Text>
            </Animated.View>
          </View>
          : <View style={styles.Container}>
            <Animated.View style={{ ...styles.Logos, opacity: fadeAnim }}>
              <Image source={SplashLogos} style={styles.image1} />
            </Animated.View>
          </View>
      }
    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FF8C19",
    justifyContent: "center",
    alignItems: "center"
  },
  Logos: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    flexDirection:"column",
  },
  image1: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
})