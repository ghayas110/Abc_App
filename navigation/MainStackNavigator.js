import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Otp from '../screens/SignUp/Otp';
import SignUp from '../screens/SignUp/SignUp';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import NewPassword from '../screens/NewPassword';
import LoginScreen from '../screens/LoginScreen';
import DetailOne from '../screens/verify-personal/DetailOne';
import DetailTwo from '../screens/verify-personal/DetailTwo';
import DetailThree from '../screens/verify-personal/DetailThree';
import ReviewDetails from '../screens/verify-personal/ReviewDetails';
import VerifyingDetails from '../screens/verify-personal/VerifyingDetails';
import LandingPage from '../screens/LandingScreen/LandingPage';
import LandingPage2 from '../screens/LandingScreen/LandingPage2';
import CreateUserName from '../screens/CreateAccount/CreateUserName';
import CreateSecureWord from '../screens/CreateAccount/CreateSecureWord'
import CreatePassword from '../screens/CreateAccount/CreatePassword';
import BioActivation from '../screens/CreateAccount/BioActivation';
import HowSearch from '../screens/CreateAccount/HowSearch';
import PersonalDetails from '../screens/CreateAccount/PersonalDetails';
import Successfully from '../screens/CreateAccount/Successfully';
import TopUp from '../screens/TopUp/TopUp';
import TopUpFaq from '../screens/TopUp/TopUpFaq';
import MainSignUp from '../screens/SignUp/MainSignUp';
import MailingAddress from '../screens/TopUp/MailingAddress';
import CardOrder from '../screens/TopUp/CardOrder';
import StartLogin from '../screens/RegisterNewDevice/StartLogin';
import StartLoginStep2 from '../screens/RegisterNewDevice/StartLoginStep2';
import StartLoginStep3 from '../screens/RegisterNewDevice/StartLoginStep3';
import StartLoginStep4 from '../screens/RegisterNewDevice/StartLoginStep4';
import StartLoginStep5 from '../screens/RegisterNewDevice/StartLoginStep5';
import StartLoginStep6 from '../screens/RegisterNewDevice/StartLoginStep6';
import UpdateTermAndCondition from '../screens/RegisterNewDevice/UpdateTermAndCondition';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountNavigator, FinanceNavigator, MainNavigator, MoreNavigator, TransferNavigator } from './StackNavigator';
import { Image } from 'react-native';

// import SavingPots from '../screens/SavingsPot/SavingPots';
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  return (
    <NavigationContainer>
      {isLoggedIn ? (
  <Tab.Navigator
  tabBarOptions={{
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
  }}
  screenOptions={{
    headerShown: false,
    showIcon: true
  }}>

 
  <Tab.Screen name="Home" options={{
    tabBarIcon: ({ color, size,focused }) => (
      <Image source={!focused ? require('../assets/tabicons/Home.png') : require('../assets/tabicons/HomeOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
      
      ),
    }}>
 {() => (
              <MainNavigator onLogin={() => setIsLoggedIn(false)} />
            )}
    </Tab.Screen>

  <Tab.Screen name="Account" component={AccountNavigator} options={{
    tabBarIcon: ({ color, size,focused }) => (
      <Image source={!focused ? require('../assets/tabicons/account.png') : require('../assets/tabicons/WalletOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
      
      ),
    }}/>

  <Tab.Screen  name="Transfer" component={TransferNavigator} options={{
    tabBarIcon: ({ color, size,focused }) => (
      <Image source={!focused ? require('../assets/tabicons/transfer.png') : require('../assets/tabicons/TransferOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
      
      ),
    }}/>
  <Tab.Screen name="Finance" component={FinanceNavigator} options={{
      tabBarIcon: ({ color, size,focused }) => (
        <Image source={!focused ? require('../assets/tabicons/finance.png') : require('../assets/tabicons/FinanceOutlined.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
        
        ),
      }}/>
    <Tab.Screen   name="More" component={MoreNavigator} options={{
      tabBarIcon: ({ color, size,focused }) => (
        <Image source={!focused ? require('../assets/tabicons/More.png') : require('../assets/tabicons/MoreOutline.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
        
        ),
      }}/>

</Tab.Navigator>
      
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
          <AuthStack.Screen name="Landing" component={LandingPage} />
          <AuthStack.Screen name="Landing2" component={LandingPage2} />
          <AuthStack.Screen name="CreateUserName" component={CreateUserName} />
          <AuthStack.Screen name="CreateSecureWord" component={CreateSecureWord} />
          <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
          <AuthStack.Screen name="BioActivation" component={BioActivation} />
          <AuthStack.Screen name="HowSearch" component={HowSearch} />
          <AuthStack.Screen name="PersonalDetails" component={PersonalDetails} />
          <AuthStack.Screen name="Successfully" component={Successfully} />
          <AuthStack.Screen name="StartLogin" component={StartLogin} />
          <AuthStack.Screen name="StartLoginStep2" component={StartLoginStep2} />
          <AuthStack.Screen name="StartLoginStep3" component={StartLoginStep3} />
          <AuthStack.Screen name="StartLoginStep4" component={StartLoginStep4} />
          <AuthStack.Screen name="StartLoginStep5" component={StartLoginStep5} />
          <AuthStack.Screen name="StartLoginStep6" component={StartLoginStep6} />
          <AuthStack.Screen name="TopUp" component={TopUp} />
          <AuthStack.Screen name="TopUpFaq" component={TopUpFaq} />
            <AuthStack.Screen name="Mailing" component={MailingAddress} />


          <AuthStack.Screen name="UpdateTermAndCondition">
            {(props) => <UpdateTermAndCondition {...props} onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>


          <AuthStack.Screen name="OtpS">
            {(props) => <Otp {...props} onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>
          <AuthStack.Screen name="SignUpMain" component={MainSignUp} screenOptions={{
            headerShown: false
          }} />

          <AuthStack.Screen name="CardOrder">
            {(props) => <CardOrder {...props} onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>
          <AuthStack.Screen name="SignUp" component={SignUp} />
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




