import { StyleSheet, Text, View, Dimensions, Button, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MailingAddress = ({ onPress }) => {
    const navigation =useNavigation()
  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [checkeddd, setCheckeddd] = React.useState(false);

  return (
    <View style={styles.container}>
    
      <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: "60%" }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: '900', color: 'green', marginBottom: 15,color:'black' }}>Confirm your mailing address</Text>
          <View>
            <View style={styles.acordion}>
              <Text style={styles.text2}> Please confirm your mailing address </Text>
            </View>
            <View style={styles.acordion}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 15,color:'black' }}> Shipping to </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          
            </View>
            <View style={{ display: 'flex', flexDirection: 'row',flexWrap:'wrap',padding:10 }}>
              <RadioButton
              color={"green"}
                status={checkedd ? 'checked' : 'unchecked'}
                onPress={() => setCheckedd(!checkedd)}
              />
              <View>
              <Text style={{fontWeight: 'bold', fontSize: 17,color:'black'}}>
              Residential address
              </Text>
              <Text style={styles.text2}>
              3/22 Jalan Cecawi, Petaling 
              </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
              <RadioButton
              color={"green"}
                status={checkeddd ? 'checked' : 'unchecked'}
                onPress={() => setCheckeddd(!checkeddd)}
              />
              <View>
              <Text style={{fontWeight: 'bold', fontSize: 17,color:'black'}}>
              Mailing address              </Text>
              <Text style={styles.text2}>
              62, Jalan Camar 5, Residensi 28, 47810, Petaling Jaya, Selangor              </Text>
              </View>
            </View>
          </View>
         
        </View>
      </View>

      <View>
     

      <RequestButton text={"Continue"}  onPress={()=>navigation.navigate('CardOrder')} btnStyle={{width:'auto'}}/>
       

        {/* <Button
          title="Continue"
          color="green"
          onPress={()=>navigation.navigate('CardOrder')}
        /> */}
      </View>
    </View>
  )
}

export default MailingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 30,
    height: windowHeight * 0.9,
    justifyContent: 'space-between'
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color:'black',
    
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
