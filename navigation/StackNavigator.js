// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
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


export { MainStackNavigator };