import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import BottomTabNavigator from "./TabNavigator";
import Otp from '../screens/SignUp/Otp';
import SignUp from '../screens/SignUp/SignUp';
import SplashScreen from '../screens/SplashScreen';
import CustomDrawer from './DrawerNavigation';
import SignOut from '../screens/SignOut';

import ForgotPassScreen from '../screens/ForgotPassScreen';
import NewPassword from '../screens/NewPassword';
import ChangePassword from '../screens/ChangePassword';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import { SignUpStackNavigator } from './StackNavigator';
import DetailOne from '../screens/verify-personal/DetailOne';
import DetailTwo from '../screens/verify-personal/DetailTwo';
import DetailThree from '../screens/verify-personal/DetailThree';
import ReviewDetails from '../screens/verify-personal/ReviewDetails';
import VerifyingDetails from '../screens/verify-personal/VerifyingDetails';
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
            {(props) => <Otp {...props} onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>
          <AuthStack.Screen name="SignUp" component={SignUpStackNavigator} />
          <AuthStack.Screen name="DetailOne" component={DetailOne} />
          <AuthStack.Screen name="DetailTwo" component={DetailTwo} />
          <AuthStack.Screen name="DetailThree" component={DetailThree} />
          <AuthStack.Screen name="ReviewDetails" component={ReviewDetails} />
          <AuthStack.Screen name="VerifyingDetails" component={VerifyingDetails} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default MainStackNavigator




