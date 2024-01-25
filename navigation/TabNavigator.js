import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { MainStackNavigator } from "./StackNavigator";


import AccountScreen from "../screens/AccountScreen";
import TransferScreen from "../screens/Transfer-Payment/Transfer";

import MoreScreen from "../screens/MoreScreen";
import styles from "../assets/styles/basic";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {


  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      screenOptions={{
        headerShown: false,
        showIcon: true
      }}>

      <Tab.Screen name="Home" component={MainStackNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          // <SvgXml xml={PendingIcons} color={color} />
          <Icon name="home" color={color} size={size} />),
      }} />

      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({ color, size }) => (

          <Icon name="wallet" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Transfer" component={TransferScreen} options={{
        tabBarIcon: ({ color, size }) => (

          <Icon name="play" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="More" component={MoreScreen} options={{
        tabBarIcon: ({ color, size }) => (

          <Icon name="people-outline" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;