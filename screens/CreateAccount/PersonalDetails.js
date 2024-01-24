import { StyleSheet, Text, View, Image, Switch , ScrollView } from 'react-native'
import React, { useState, useEffect  } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput, CheckBoxInput, List } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/Illustration.png'
import ThemeSty from '../../assets/styles/basic'
import { RequestButton, OutlineButton } from '../../components/Buttons'

const PersonalDetails = () => {
  const [progress, setProgress] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  const navigation = useNavigation()

  const ForWordnavigation = () => {
    navigation.navigate('Successfully')
  }
  const handleBackNavigation = () => {
    navigation.navigate('CreateSecureWord');
  };


  return (
    <View style={styles.container}>
      <View style={styles.Progress}>
        <View style={styles.BackArrow}>
          <Icons.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} onPress={handleBackNavigation} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.AntDesign name='setting' style={{ fontSize: 24, marginRight: 5, color: "#0038A4" }} />
          <View>
            <Text>step 6 to 6 </Text>
            <ProgressBar progress={progress} width={80} />
          </View>
          <Icons.Entypo name='wallet' style={{ fontSize: 24, marginLeft: 5, }} />
        </View>
        <View></View>
      </View>
      <View>
        <Text style={{...ThemeSty.Green_color_f, fontSize: 28, fontWeight: "700", ...ThemeSty.Font_family, marginTop:30 }}>Where do we send you nice things?</Text>
      </View>
      <View style={{flexDirection:"row" , alignItems:"center",padding:5}}>
        <CheckBoxInput style={{ ...ThemeSty.gray_color_f }} />
        <Text style={{ ...ThemeSty.gray_color_f, fontSize: 16, ...ThemeSty.Font_family, marginLeft:7, fontWeight: '500',
         }}>Same as registered address</Text>
      </View>
        
        <View>
        <Text style={{ ...ThemeSty.black_color_f,paddingVertical:10, marginLeft: 5, fontSize:16 , fontWeight: '700',...ThemeSty.Font_family}}>Mailing address</Text>
        </View>
      
      <ScrollView>
        <View style={{borderBottomWidth:1, ...ThemeSty.ligth_gray_border_Color}}>
          <SimpleInput label={'Address'} placeholder={'Enter Address'} inputstyle={{color:"black" ,...ThemeSty.Font_family , fontWeight: '500' , fontSize:16,}} />
        </View>
        <View style={{ borderBottomWidth: 1, ...ThemeSty.ligth_gray_border_Color }}>
          <SimpleInput label={'Address (Line Two)'} placeholder={'Enter Address'} inputstyle={{ color:"black", ...ThemeSty.Font_family, fontWeight: '500', fontSize: 16, }} />
        </View>
        <View style={{ borderBottomWidth: 1, ...ThemeSty.ligth_gray_border_Color }}>
          <SimpleInput label={'Postal Code'} placeholder={'Enter Your Postal Code'} inputstyle={{ color:"black", ...ThemeSty.Font_family, fontWeight: '500', fontSize: 16, }} />
        </View>
        <View style={{ borderBottomWidth: 1, ...ThemeSty.ligth_gray_border_Color }}>
          <SimpleInput label={'City'} placeholder={'Enter Your City'} inputstyle={{ color:"black", ...ThemeSty.Font_family, fontWeight: '500', fontSize: 16,}} />
        </View>
        <View style={{ borderBottomWidth: 1, ...ThemeSty.ligth_gray_border_Color }}>
          <SimpleInput label={'State'} placeholder={'Enter your State '} inputstyle={{ color:"black", ...ThemeSty.Font_family, fontWeight: '500', fontSize: 16, }} />
        </View>
      </ScrollView>

      
      <View >
        <View style={styles.btn2}>
          <RequestButton text={'Confirm'} onPress={ForWordnavigation} />
        </View>
      </View>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-evenly"
  },
  Progress: {
    justifyContent: 'center',
    flexDirection: "row",
    alignItems:"center"
  },

  headerText: {
    padding: 10,
  },
  Notify: {
    padding: 20,
    backgroundColor: "#DCF2FC",
  },
  btn2: {
    alignItems: "center"
  },
  btn1: {
    alignItems: "center"
  },
  BackArrow: {
    // width: "100%",
    // padding: 10,
  },
  BackArrowIcon: {
    color: "#00A200",
    fontSize: 16,
    position: 'relative',
    right: 80,
  },

})