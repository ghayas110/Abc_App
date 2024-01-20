import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import BottomTabNavigator from "./TabNavigator";
import Otp from '../screens/Otp';
import SignUp from '../screens/SignUp';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import CustomDrawer from './DrawerNavigation';
import SignOut from '../screens/SignOut';

import ForgotPassScreen from '../screens/ForgotPassScreen';
import NewPassword from '../screens/NewPassword';
import ChangePassword from '../screens/ChangePassword';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import { SignUpStackNavigator } from './StackNavigator';
<<<<<<< HEAD
import LandingPage from '../screens/LandingScreen/LandingPage';
import LandingPage2 from '../screens/LandingScreen/LandingPage2';
=======
import DetailOne from '../screens/verify-personal/DetailOne';
>>>>>>> 8e15f57ae2e57e2b8126d24986bf36b16ba61476
const AuthStack = createStackNavigator();
const MainStackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const Drawer = createDrawerNavigator();

  return (    
    <NavigationContainer>
      {isLoggedIn ? (

        <Drawer.Navigator screenOptions={{ headerShown: false }} 
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home" component={BottomTabNavigator} />
          <Drawer.Screen name="SignOut" >
            {(props) => <SignOut {...props} onLogin={() => setIsLoggedIn(false)} />}
          </Drawer.Screen>
          <Drawer.Screen name='ChangePassword' component={ChangePassword} />
          <Drawer.Screen name='EditProfile' component={EditProfileScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{
          headerShown: false
        }}>
          <AuthStack.Screen name="Splash">
            {(props) => <SplashScreen />}
          </AuthStack.Screen>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
          <AuthStack.Screen name="NewPassword" component={NewPassword} />
          <AuthStack.Screen name="OtpS">
              <AuthStack.Screen name="Landing" component={LandingPage} />
              <AuthStack.Screen name="Landing2" component={LandingPage2} />
            {(props) => <Otp {...props} onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>
          <AuthStack.Screen name="SignUp" component={SignUpStackNavigator} />
          <AuthStack.Screen name="DetailOne" component={DetailOne} />

        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default MainStackNavigator




