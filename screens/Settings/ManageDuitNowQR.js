import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Header from '../Transfer-Payment/components/Header';

const ManageDuitNowQR = () => {
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)
  const toggleSwitchOne = () => {
    setIsEnabledOne(previousState => !previousState)
  }
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const toggleBottomSheet2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
  };
  const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white"
      }}>
        <Header
          backtoPage={true}
          title={"Manage DuitNow QR"}
          backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
        />
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          marginVertical: 10,
        }} />
        <ScrollView>
          <SafeAreaView style={{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 30,
            paddingBottom: 20
          }}>
            <View>
              <TouchableOpacity>
                <View style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Biometric for QR payments</Text>
                  <Switch style={{ paddingRight: 0 }} trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledOne ? '#00a200' : '#cccccc'} onValueChange={toggleSwitchOne} value={isEnabledOne} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }}>
                <View style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Activate QR payment</Text>
                  <Switch style={{ paddingRight: 0 }} trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledOne ? '#00a200' : '#cccccc'} onValueChange={toggleSwitchOne} value={isEnabledOne} />
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <Modal
            isVisible={isBottomSheetVisible}
            style={{ margin: 0 }}
            onBackdropPress={toggleBottomSheet}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View>
                  <Text style={{ fontSize: 28, fontWeight: '700', ...style.Green_color_f, ...style.Font_family }} >How can we help?</Text>
                </View>
                <View style={{ padding: 15 }}>
                  <Text style={{ ...style.gray_color_f, ...style.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
                    Alternatively you may email us at:
                    bank@ssssco.com
                    We’ll get this sorted!</Text>
                </View>
                <View style={{ padding: 20, ...style.bg_light_green_color }}>
                  <Text style={{ ...style.Green_color_f, fontSize: 14, ...style.Font_family, fontWeight: '500', }}>Customer Support: +6016 299 5333 (fraud support line 24/7) or email to us at:  bank@ssssco.com</Text>
                </View>
                <View style={{ padding: 10, alignItems: "center" }}>
                  <OutlineButton text='Report Fraud' onPress={toggleBottomSheet2} />
                </View>
                <View style={{ alignItems: "center" }}>
                  <RequestButton text='Give us call' onPress={toggleBottomSheet2} />
                </View>

              </View>
            </View>
          </Modal>
          <Modal
            isVisible={isBottomSheetVisible2}
            style={{ margin: 0 }}
            onBackdropPress={toggleBottomSheet2}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ backgroundColor: 'transparent', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View style={{ padding: 10, alignItems: "center" }}>
                  <OutlineButton text='call +165464661' onPress={toggleBottomSheet2} />
                </View>
                <View style={{ alignItems: "center" }}>
                  <RequestButton text='Cancel' onPress={toggleBottomSheet2} />
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ManageDuitNowQR