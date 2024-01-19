import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import BottomTabNavigator from "./TabNavigator";
import Otp from '../screens/Otp';
import SignUp from '../screens/SignUp';
import SplashScreen from '../screens/SplashScreen';
import CustomDrawer from './DrawerNavigation';
import SignOut from '../screens/SignOut';

import ForgotPassScreen from '../screens/ForgotPassScreen';
import NewPassword from '../screens/NewPassword';
import ChangePassword from '../screens/ChangePassword';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoginScreen from '../screens/LoginScreen';
const AuthStack = createStackNavigator();
const MainStackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const Drawer = createDrawerNavigator();

  return (
  
    <NavigationContainer>
    {isLoggedIn ? (
      <Drawer.Navigator  screenOptions={{
        headerShown: false
        }} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="SignOut" >
        {(props) => <SignOut {...props} onLogin={() => setIsLoggedIn(false)}/>}
        </Drawer.Screen>
        <Drawer.Screen name='ChangePassword' component={ChangePassword}/>
        <Drawer.Screen name='EditProfile' component={EditProfileScreen}/>
      </Drawer.Navigator>
    ) : (
      <AuthStack.Navigator screenOptions={{
        headerShown: false
        }}>
        <AuthStack.Screen name="Splash">
        {(props) => <SplashScreen />}
        
        </AuthStack.Screen>

        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="ForgotPassScreen" component={ForgotPassScreen}/>
     
      
        <AuthStack.Screen name="NewPassword" component={NewPassword}/>
   
        
  
      <AuthStack.Screen name="OtpS">
      {(props) => <Otp {...props} onLogin={() => setIsLoggedIn(true)}/>}
      
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp">
      {(props) => <SignUp />}
      
      </AuthStack.Screen>
    </AuthStack.Navigator>
    )}
   
    </NavigationContainer>
 
  );
};
export default MainStackNavigator




