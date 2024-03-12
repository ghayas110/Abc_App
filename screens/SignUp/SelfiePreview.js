import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    KeyboardAvoidingView,
    Image,
  } from 'react-native';
  import React from 'react';
  import style from '../../assets/styles/basic';
  import FormInput from '../../components/FormInput';
  import {RequestButton, OutlineButton} from '../../components/Buttons';
  import ThemeSty from '../../assets/styles/basic';
import Steps from '../../components/steps/Steps';
import { useNavigation } from '@react-navigation/native';
  
  const windowWidth = Dimensions.get('window').width;
  const circleSize = 300;

  const windowHeight = Dimensions.get('window').height;
  const SelfiePreview = ({route}) => {
    const navigation = useNavigation()
    const {width, height} = Dimensions.get('window');
console.log(route.params.photo,'photo')
 const Images=route.params.photo
 const Imag=`file://${route.params.photo}`

 const imagePath =  `file://${Images.path}` // Extract the image path from route params
    return (
      <>
 <Steps
 backtoPage={false}
 totalSteps={"8"}
 activeStep= {"8"}
 leftIcon={require('../../assets/SignUp/docsIcon.png')}
 rightIcon={require('../../assets/SignUp/Profile.png')}
 ProgressBarIcon={require('../../assets/SignUp/steps.png')}
 backIcon={require('../../assets/SignUp/Icons.png')}

/>

      <View style={styles.container}>
      <View style={styles.circularImageContainer}>
        <Image
          source={{ uri: imagePath }}
          style={{
            resizeMode: 'cover',
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize / 2,
          }}
        />
      </View>
  
        <View style={{marginTop: 27}}>
          <View style={styles.btn1}>
            <OutlineButton text={'Take Again'} onPress={()=> navigation.goBack()} />
          </View>
          <View style={styles.btn2}>
            <RequestButton text={"Yes Let's continue"} onPress={()=>navigation.navigate('CheckingThings')} />
          </View>
        </View>
      </View>
      </>
    );
  };
  
  export default SelfiePreview;
  
  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    Progress: {
      padding: 15,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    Image: {
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    circularImageContainer: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      overflow: 'hidden',
      alignItems: 'center',
    },
    headerText: {
      padding: 10,
      marginTop: 15,
    },
    Notify: {
      padding: 20,
      // backgroundColor: "#DCF2FC",
    },
    btn2: {
      alignItems: 'center',
    },
    btn1: {
      alignItems: 'center',
    },
    text2: {
      fontSize: 17,
      color: '#808080',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      color: 'black',
      fontWeight: '600',
    },
    container2: {
      // width: windowWidth * 0.8,
      backgroundColor: 'whitesmoke',
      paddingVertical: 20,
  
      borderRadius: 10,
    },
    cardText: {
      padding: 30,
    },
    cardView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
  });
  