import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import style from "../../assets/styles/basic"
import Header from './components/Header'
import cardImage from '../../assets/cardImages/RyseCard.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Manage from './components/Manage'
import Preference from './components/Preference'



const Tab = createMaterialTopTabNavigator();
const CardManage = () => {
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
      }}>
        <Header
          backtoPage={true}
          title={"Card Management"}
          backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
        />
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          marginVertical: 10,
        }} />
        <TouchableOpacity>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Image source={cardImage} style={{ width: 300, height: 300, resizeMode: "contain", }} />
          </View>
        </TouchableOpacity>

        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: "900",
              textTransform: "capitalize",
              fontFamily: "Poppins-Regular",
              marginTop: 30,
            },
            tabStyle: {
              elevation: 0
            },
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderBottomColor: 'green',
            },
          }}>
          <Tab.Screen name="Manage" component={Manage} />
          <Tab.Screen name="Preference" component={Preference} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  )
}

export default CardManage