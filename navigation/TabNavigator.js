import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { MainStackNavigator } from "./StackNavigator";


import AccountScreen from "../screens/AccountScreen";
import TransferScreen from "../screens/Transfer-Payment/Transfer";

import MoreScreen from "../screens/MoreScreen";
import styles from "../assets/styles/basic";
import { Image } from "react-native";
import AccountImage from "../assets/svg/account.svg"
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
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/CreateAccoutImages/home.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
   
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/CreateAccoutImages/account.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
  
      <Tab.Screen  name="Transfer" component={TransferScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/CreateAccoutImages/transfer.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
          ),
        }}/>
        <Tab.Screen   name="More" component={MoreScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/CreateAccoutImages/more.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
            
            ),
          }}/>
   
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;