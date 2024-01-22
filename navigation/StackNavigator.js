// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Otp from "../screens/SignUp/Otp";
import Terms from "../screens/SignUp/Terms";
import StepsIndicator from "../components/StepsIndicator";
import SignUp from "../screens/SignUp/SignUp";
import MainSignUp from "../screens/SignUp/MainSignUp";
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
    }}>
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{
        headerShown: false
      }} />
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

export { MainStackNavigator, SignUpStackNavigator };