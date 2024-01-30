import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import Modal from 'react-native-modal';


const ChangePin = () => {
  const navigation = useNavigation()
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const goBack = () => {
    ToastAndroid.show(
      'Your Pin has been changed',
      ToastAndroid.SHORT,
    );
    setTimeout(() => {
      navigation.goBack("Home");
    }, 2000);
  };
  // navigation.goBack("HomeScreen");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const passCodeBox = () => { setBottomSheetVisible(!isBottomSheetVisible); }
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const styles = {
    bottomSheetContainer: {
      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 20,
      borderTopLeftRadius: 20, // Adjust the value based on your desired borderRadius
      borderTopRightRadius: 20, // Adjust the value based on your desired borderRadius
    },
  };
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 30
      }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 25 }}>Create your card PIN</Text>
          <Text style={{ ...style.gray_color_h, ...style.Font_family, fontSize: 20, marginTop: 15 }}>Create a 6-digit PIN for your card</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          marginTop: 30
        }}>
          <TextInput style={{
            fontSize: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#808080',
            flex: 1,
            ...style.Font_family,
            ...style.black_color_h
          }}
            placeholder="Create your card PIN"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={{
            position: "absolute",
            right: 0
          }}>
            <Image
              style={{
                height: 30,
                width: 30
              }}
              source={isPasswordVisible ? require('../../assets/cardImages/eyeShow.png') : require('../../assets/cardImages/eyehide.png')} />
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row"
          }}>
            <Image source={require("../../assets/cardImages/rightTick.png")} />
            <Text style={{
              ...style.Font_family,
              ...style.gray_color_h,
              fontSize: 15,
              lineHeight: 28,
            }}>Card PIN cannot contain consecutive digits (i.e. 222222, 333333)</Text>
          </View>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row"
          }}>
            <Image source={require("../../assets/cardImages/rightTick.png")} />
            <Text style={{
              ...style.Font_family,
              ...style.gray_color_h,
              fontSize: 15,
              lineHeight: 28,
            }}>Card PIN must not be sequential numbers (i.e. 123456, 456789)</Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          justifyContent: "flex-end"
        }}>
          <RequestButton btnStyle={{
            width: "auto"
          }} text={"Continue"} onPress={() => passCodeBox()} />
        </View>
        <ScrollView>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Modal
              isVisible={isBottomSheetVisible}
              style={{ margin: 0 }}
              onBackdropPress={toggleBottomSheet}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{
                  ...styles.bottomSheetContainer,
                }}>
                  <View style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                    <TouchableOpacity onPress={toggleBottomSheet}
                      style={{
                        ...style.bg_light_gray,
                        padding: 15,
                        marginRight: 30,
                        borderRadius: 40,
                      }}>
                      <Image
                        source={require('../verify-personal/images/cross.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{
                      ...style.Green_color_h,
                      fontSize: 30,
                      paddingLeft: 20,
                      fontWeight: "600",
                      fontFamily: "Poppins-Bold"
                    }}>Please input your app {'\n'} passcode</Text>
                    <Text style={{ ...style.Font_family, ...style.gray_color_h, paddingLeft: 20, fontSize: 18 }}>Your app passcode is required in order to proceed</Text>
                    <View style={{
                      display: "flex",
                      justifyContent: "center",
                      marginVertical: 30,
                      alignItems: "center"
                    }}>
                      <OtpInput />
                      <Image style={{ marginTop: 40 }} source={require("../../assets/cardImages/passCodeHand.png")} />
                    </View>
                    <View style={{ padding: 25 }}>
                      <Text style={{
                        ...style.Font_family_Bold,
                        ...style.bg_light_green_color,
                        padding: 20,
                        lineHeight: 20,
                        color: "#006400"
                      }}>App passcode refers to a 6-digit passcode that you have set for the bank@ssssco.com app.</Text>
                    </View>
                    <Text style={{
                      ...style.Font_family_Bold,
                      ...style.Green_color_h,
                      fontSize: 20,
                      textAlign: "center",
                      marginBottom: 20
                    }}>Forgot app passcode</Text>
                    <RequestButton text={"Save"}
                      onPress={() => goBack()}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  )
}

export default ChangePin