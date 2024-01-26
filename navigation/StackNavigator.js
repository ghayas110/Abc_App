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
import TransferTO from "../screens/Transfer-Payment/TransferTo";
import RecipientBank from "../screens/Transfer-Payment/RecipientBank";
import AccountType from "../screens/Transfer-Payment/AccountType";
import PendingTran from "../screens/transaction-history/PendingTran";
import AllowQR from "../screens/QRPayments/AllowQR";
import SetUpQR from "../screens/QRPayments/SetUpQR";
import AllowBiometric from "../screens/QRPayments/AllowBiometric";
import OtpQR from "../screens/QRPayments/OtpQR";
import QRAccountSuccess from "../screens/QRPayments/QRAccountSuccess";
import QRScan from "../screens/QRPayments/QRScan";
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
      <Stack.Screen name="TransferTO" component={TransferTO} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="RecipientBank" component={RecipientBank} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="AccountType" component={AccountType} screenOptions={{
        headerShown: false
      }} />
     
      <Stack.Screen name="PendingTran" component={PendingTran} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="AllowQR" component={AllowQR} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="SetupQR" component={SetUpQR} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="AllowBiometric" component={AllowBiometric} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="OtpQR" component={OtpQR} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="QRAccountSuccess" component={QRAccountSuccess} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="QRScan" component={QRScan} screenOptions={{
        headerShown: false
      }} />
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