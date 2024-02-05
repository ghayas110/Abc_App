import { StyleSheet, Text, View, Dimensions, Button, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import Modal from 'react-native-modal';
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardOrder = ({ onLogin }) => {
    
  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [checkeddd, setCheckeddd] = React.useState(false);

  const styless = {
    bottomSheetContainer: {
        backgroundColor: 'white',
        height:"90%",
        paddingTop: 20,
        paddingBottom: 20,
        borderTopLeftRadius: 20, // Adjust the value based on your desired borderRadius
        borderTopRightRadius: 20, // Adjust the value based on your desired borderRadius
    },
};
const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
};
const navigation =useNavigation()
  return (
    <>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:20,  backgroundColor:'white',}}>
    <Image source={require('../../assets/CreateAccoutImages/back.png')} style={{resizeMode: 'contain',borderRadius:30}}/>
    </TouchableOpacity>
    <View style={styles.container}>
    
    
      <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: "60%" }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: '900', color: 'green', marginBottom: 15 }}>Your order summary</Text>
          <View>
            <View style={styles.acordions}>
              <Text style={styles.text2}> Please confirm your mailing address </Text>
            </View>
            <View style={styles.acordion}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 15,color:'black' }}> Shipping to </Text>
              <Text style={styles.text2}>
              Razak Bin Osman
              </Text>
            </View>
          <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 15,color:'black' }}> Selected debit card </Text>

          </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
           <Image source={require('../../assets/SignUp/visa.png')} style={{height:windowHeight*0.3,width:windowWidth*0.9, resizeMode: 'contain',borderRadius:30}}/>
              <View>
           
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
            
              <View>
              <Text style={{fontWeight: 'bold', fontSize: 17,color:'black'}}>
              Residential address              </Text>
              <Text style={styles.text2}>
              62, Jalan Camar 5, Residensi 28, 47810, Sharja UAE            </Text>
              </View>
            </View>
          </View>
         
        </View>
      </View>

      <View>
      <RequestButton text={"Continue"}     onPress={toggleBottomSheet} btnStyle={{width:'auto'}}/>

      
      </View>
  
    </View>
    <View >
    <Modal
        isVisible={isBottomSheetVisible}
        style={{ margin: 0 }}
        onBackdropPress={toggleBottomSheet}
    >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{
                ...styless.bottomSheetContainer,
            }}>
                <View style={{
                    ...style.basic_container,
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={toggleBottomSheet}
                        style={{
                            ...style.bg_light_gray,
                            padding: 15,
                            marginRight: 30,
                            borderRadius: 40,
                        }}>
                        <Image
                            source={require('../../assets/SignUp/cross.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <View style ={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around',height:"60%"}}>
                <Image
                style={styles.mapicon}
                source={require('../../assets/SignUp/ordercard.png')} // replace with your image path
                />
                <View style={{paddingTop:45}}>
                <Text style={{ fontSize: 24, fontWeight: '900', color: 'green',lineHeight:30 }}>You have successfully placed your card order</Text>
                <Text style={styles.text2}>Your card will reach to your doorstep within next 7 working days </Text>
                </View>
                </View>
            
            <View>
            <RequestButton text={"Continue"} onPress={()=>onLogin()} btnStyle={{width:'auto'}}/>

          
            </View>
            </View>
            </View>
        </View>
    </Modal>
</View>
</>
  )
}

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor:'white',
    padding: 30,
    height: windowHeight * 0.9,
    justifyContent: 'space-between'
  },
  acordions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 40,
    borderBottomColor: 'whitesmoke',
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 30,
    color:'grey',
    marginTop:10
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
