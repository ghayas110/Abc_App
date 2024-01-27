// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import StatementScreen from "../screens/Statement/StatementList";
import Otp from "../screens/SignUp/Otp";
import Terms from "../screens/SignUp/Terms";
import StepsIndicator from "../components/StepsIndicator";
import SignUp from "../screens/SignUp/SignUp";
import MainSignUp from "../screens/SignUp/MainSignUp";
import History from "../screens/transaction-history/History";
import PendingTran from "../screens/transaction-history/PendingTran";
import CardMangementOne from "../screens/card/CardMangementOne";
import ChangePin from "../screens/card/ChangePin";
import SpendLimit from "../screens/card/components/SpendLimit";
import CardPreferences from "../screens/card/CardPreferences";
import SettingServices from "../screens/Transfer-Payment/SettingServices";
import PayTransfer from "../screens/Transfer-Payment/PayTransfer";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="Statements" component={StatementScreen} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="TransactionHistory" component={History} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="PendingTran" component={PendingTran} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name='CardMangementOne' component={CardMangementOne} />
      <Stack.Screen name='ChangePin' component={ChangePin} />
      <Stack.Screen name='SpendLimit' component={SpendLimit} />
      <Stack.Screen name='CardPreferences' component={CardPreferences} />
      <Stack.Screen name='SettingServices' component={SettingServices} />
      <Stack.Screen name='PayTransfer' component={PayTransfer} />
    </Stack.Navigator>
  );
};

const MoreNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      {/* <Stack.Screen name="Home" component={m} screenOptions={{
        headerShown: false
      }} /> */}
    </Stack.Navigator>
  );
};
const SignUpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SignUpMain" component={MainSignUp} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="SignUpScreen" component={SignUp} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="Terms" component={Terms} screenOptions={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SignUpStackNavigator, MoreNavigator };