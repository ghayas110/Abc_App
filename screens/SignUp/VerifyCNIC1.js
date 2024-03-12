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
import { useNavigation } from '@react-navigation/native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerifyCNIC1 = ({route}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation()
  console.log(route?.params?.photo,'photo')
 const Images=route?.params?.photo
const imag ="sss"

 const imagePath =  `file://${Images?.path}` // Extract the image path from route params

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
  
        <Image
         source={{ uri: imagePath }}
          style={{
            resizeMode: 'cover',
            height: windowHeight * 0.25,
            width: windowWidth * 0.8,
          }}
        />
      </View>
      <View style={{padding: 27}}>
        <Text style={styles.text2}>
          Are all details fully visible, glare-free and readable?
        </Text>
      </View>

      <View style={{marginTop: 27}}>
        <View style={styles.btn1}>
        <OutlineButton text={'Take Again'} onPress={()=> navigation.navigate('FrontCamera')} />
        </View>
        <View style={styles.btn2}>
        <RequestButton text={"Yes Let's continue"} onPress={()=>navigation.navigate('BackCamera')} />
        </View>
      </View>
    </View>
  );
};

export default VerifyCNIC1;

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
