import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Header from '../Transfer-Payment/components/Header';


const ManageDuitNowQR = () => {
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitchOne = () => setIsEnabledOne(previousState => !previousState)
  const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white"
      }}>
        <Header
          backtoPage={true}
          title={"Manage Universal QR"}
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
                  <Switch style={{ paddingRight: 0 }} trackColor={{ false: '#FAF9F6', true: '#00a200' }} thumbColor={isEnabledOne ? '#00a200' : '#FAF9F6'} onValueChange={toggleSwitchOne} value={isEnabledOne} />
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
                  <Switch style={{ paddingRight: 0 }} trackColor={{ false: '#FAF9F6', true: '#00a200' }} thumbColor={isEnabledTwo ? '#00a200' : '#FAF9F6'} onValueChange={toggleSwitchTwo} value={isEnabledTwo} />
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ManageDuitNowQR