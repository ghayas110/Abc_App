import { StyleSheet, Text, View, Dimensions, Button, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import FormInput from '../../components/FormInput';
import notifee from '@notifee/react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import Modal from 'react-native-modal';
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const EligibleScreen = ({ onPress }) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [checkeddd, setCheckeddd] = React.useState(false);
  const styless = {
    bottomSheetContainer: {
        backgroundColor: 'white',
        height:"50%",
      
        paddingBottom: 20,
        borderTopLeftRadius: 20, // Adjust the value based on your desired borderRadius
        borderTopRightRadius: 20, // Adjust the value based on your desired borderRadius
    },
};
const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
const navigation =useNavigation()
const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
};
  return (
    <>
    <View style={styles.container}>
    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: "60%" }}>
    <View>
    <Text style={{ fontSize: 24, fontWeight: '900', color: 'green', marginBottom: 15 }}>Confirm your mailing address</Text>
    <View>
    <View style={styles.acordion}>
              <Text style={styles.text2}> Please confirm your mailing address </Text>
              </View>
            <View style={styles.acordion}>
              <Text style={{ fontWeight: 'bold', fontSize: 17, paddingTop: 15 }}> Shipping to </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
              <RadioButton
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
              <Text style={styles.text2}>
                I’m a Dubai citizen with a CNIC, living in Dubai
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioButton
            status={checkedd ? 'checked' : 'unchecked'}
            onPress={() => setCheckedd(!checkedd)}
            />
            <Text style={styles.text2}>
            I‘m NOT a US person
            </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
            <RadioButton
            status={checkeddd ? 'checked' : 'unchecked'}
            onPress={() => setCheckeddd(!checkeddd)}
            />
            <Text style={styles.text2}>
            I don't pay income tax in any other country besides Dubai
            </Text>
            </View>
            </View>
            <View style={{ width: "100%", backgroundColor: '#DCF2FC', padding: 20 }}>
            <Text>Note: You are a US person if you are either a US citizen, a US resident or a Green Card holder.</Text>
            </View>
            </View>
            </View>
            
            <View>
            <View >
            <Button
            title="No I am not Eligible"
            color="green"
            onPress={toggleBottomSheet}
            />
            </View>
            <View style={{marginTop:15}}>
            <Button
            
            title="Yes I am Eligible"
            color="green"
            onPress={onPress}
            />
            </View>
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
                        <View style={styles.containers}>
                        <View style ={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around',height:"60%"}}>
                      
                        <View style={{padding:5}}>
                        <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>Sorry! You don't meet our eligibility criteria</Text>
                        <Text style={styles.text2}>When our platform opens up to a wider group of customers, how should we contact you? </Text>
                        </View>
                        </View>
                    
                    <View>
                    <Button
                    title="i'll exit now"
                    color="green"
                    onPress={()=>navigation.navigate('Landing')}
                    />
                    </View>
                    </View>
                    </View>
                </View>
            </Modal>
        </View>
            </>
  )
}

export default EligibleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 30,
    height: windowHeight * 0.9,
    justifyContent: 'space-between'
  },
  containers: {
    flex: 1,
    paddingTop: 20,
    padding: 30,
    height: windowHeight * 0.9,
    justifyContent: 'space-between'
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
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
