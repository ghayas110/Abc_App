import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { MainStackNavigator } from "./StackNavigator";


import AccountScreen from "../screens/AccountScreen";
import TransferScreen from "../screens/Transfer-Payment/Transfer";

import MoreScreen from "../screens/MoreScreen";
import styles from "../assets/styles/basic";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {


  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
      screenOptions={{
        headerShown: false,
        showIcon: true
      }}>

     
      <Tab.Screen name="Home" component={MainStackNavigator} options={{
        tabBarIcon: ({ color, size,focused }) => (
          <Image source={!focused ? require('../assets/tabicons/Home.png') : require('../assets/tabicons/HomeOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
   
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({ color, size,focused }) => (
          <Image source={!focused ? require('../assets/tabicons/account.png') : require('../assets/tabicons/WalletOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
  
      <Tab.Screen  name="Transfer" component={TransferScreen} options={{
        tabBarIcon: ({ color, size,focused }) => (
          <Image source={!focused ? require('../assets/tabicons/transfer.png') : require('../assets/tabicons/TransferOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
        <Tab.Screen  name="Finance" component={TransferScreen} options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Image source={!focused ? require('../assets/tabicons/finance.png') : require('../assets/tabicons/FinanceOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
            
            ),
          }}/>
        <Tab.Screen   name="More" component={MoreScreen} options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Image source={!focused ? require('../assets/tabicons/More.png') : require('../assets/tabicons/MoreOutline.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
            
            ),
          }}/>
   
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;