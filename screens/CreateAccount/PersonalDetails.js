import { StyleSheet, Text, View, Image, Switch , ScrollView } from 'react-native'
import React, { useState, useEffect  } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput, CheckBoxInput, List } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/Illustration.png'
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

  return (
    <View style={styles.container}>
      <View style={styles.Progress}>
        <View></View>
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
        <Text style={{ color: "#00A200", fontSize: 28, fontWeight: "700", fontFamily: "Poppins" }}>Where do we send you nice things?</Text>
      </View>
      <View style={{flexDirection:"row" , alignItems:"center"}}>
        <CheckBoxInput style={{ color: "#00A200" }} />
        <Text style={{ color: "#333333", fontSize: 16, fontFamily: "Poppins", marginLeft:7, fontWeight: '500',
         }}>Same as registered address</Text>
      </View>
        
        <View>
        <Text style={{ color:"#333333", marginLeft: 5, fontSize:16 , fontWeight: '700',fontFamily:"Poppins"}}>Mailing address</Text>
        </View>
      
      <ScrollView>
        <View style={{borderBottomWidth:1, borderBlockColor:"#CCCCCC"}}>
          <SimpleInput label={'Address'} placeholder={'Enter Address'} inputstyle={{color:"#CCCCCC" , fontWeight: '500' , fontSize:16,fontFamily:"Poppins"}} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBlockColor: "#CCCCCC" }}>
          <SimpleInput label={'Address (Line Two)'} placeholder={'Enter Address'} inputstyle={{ color: "#CCCCCC", fontWeight: '500', fontSize: 16, fontFamily: "Poppins" }} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBlockColor: "#CCCCCC" }}>
          <SimpleInput label={'Postal Code'} placeholder={'Enter Your Postal Code'} inputstyle={{ color: "#CCCCCC", fontWeight: '500', fontSize: 16, fontFamily: "Poppins" }} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBlockColor: "#CCCCCC" }}>
          <SimpleInput label={'City'} placeholder={'Enter Your City'} inputstyle={{ color: "#CCCCCC", fontWeight: '500', fontSize: 16, fontFamily: "Poppins" }} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBlockColor: "#CCCCCC" }}>
          <SimpleInput label={'State'} placeholder={'Enter your State '} inputstyle={{ color: "#CCCCCC", fontWeight: '500', fontSize: 16, fontFamily: "Poppins" }} />
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
  }

})