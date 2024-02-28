import React,{useState} from "react";
import { StyleSheet, Text, View, FlatList, } from 'react-native'
import Theme from '../assets/styles/basic'
import Icons from "../components/Icons";
import { useNavigation } from '@react-navigation/native'
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
import InsertAmount from "../screens/Transfer-Payment/InsertAmount";
import Review from "../screens/Transfer-Payment/Review";
import DigitalSecure from "../screens/Transfer-Payment/DigitalSecure";
import DuetitNowOnWay from "../screens/Transfer-Payment/DuetitNowOnWay";
import DuetNowSent from "../screens/Transfer-Payment/DuetNowSent";
import SendAmount from "../screens/QRPayments/InsertAmount";
import Recipt from "../screens/Transfer-Payment/Recipt";
import SavingPots from "../screens/SavingsPot/SavingPots";
import PickCategoryCard from "../screens/SavingsPot/PickCategoryCard";
import CreateSavingPots from "../screens/SavingsPot/CreateSavingPots";
import Contribution from "../screens/SavingsPot/Contribution";
import ReviewDetails from "../screens/SavingsPot/ReviewDetails";
import SuccessfullyCreated from "../screens/SavingsPot/SuccessfullyCreated";
import AddFundsHome from "../screens/SavingsPot/AddFundsHome";
import AddFunds from "../screens/SavingsPot/AddFunds";
import AddFundReviewDetails from "../screens/SavingsPot/AddFundReviewDetails";
import FundSuccessFullyCreated from "../screens/SavingsPot/FundSuccessFullyCreated";
import WithdrawFund from "../screens/SavingsPot/WithdrawFund";
import WithdrawFundReview from '../screens/SavingsPot/WithdrawFundReview'
import WithdrawSuccessfully from "../screens/SavingsPot/WithdrawSuccessfully"

import Transfer from "../screens/Transfer-Payment/Transfer";
import CardMangementOne from "../screens/card/CardMangementOne";
import ChangePin from "../screens/card/ChangePin";
import SpendLimit from "../screens/card/components/SpendLimit";
import CardPreferences from "../screens/card/CardPreferences";
import SettingServices from "../screens/Transfer-Payment/SettingServices";
import PayTransfer from "../screens/Transfer-Payment/PayTransfer";
import ManageDuitNowQR from "../screens/Settings/ManageDuitNowQR";
import ImportantDocs from "../screens/Settings/ImportantDocs";
import Privacy from "../screens/Settings/Privacy";
import Profile from "../screens/Settings/Profile";
import UpdateMallingAddress from "../screens/Settings/UpdateMallingAddress";
import FAQs from "../screens/Settings/FAQs";
import Accounts from "../screens/AccountCenter/Accounts";
import AccountDeposit from "../screens/AccountCenter/AccountDeposit";
import Finance from "../screens/Finance/Finance";
import ApplyFinance from "../screens/Finance/ApplyFinance";
import ApplyPF from "../screens/Finance/ApplyPF";
import ApplyFinanceScd from "../screens/Finance/UploadPdf/ApplyFinanceScd";
import DocsInfo from "../screens/Finance/UploadPdf/DocsInfo";
import UploadPdf from "../screens/Finance/UploadPdf/UploadPdf";
import UploadInstructions from "../screens/Finance/UploadPdf/UploadInstructions";
import UploadPdfInfo from "../screens/Finance/UploadPdf/UploadPdfInfo";
import Reviewing from "../screens/Finance/UploadPdf/Reviewing";
import Approved from "../screens/Finance/UploadPdf/Approved";
import UploadDoc from "../screens/Finance/UploadDoc";
import Checknote from "../screens/Finance/Checknote";
import DesireDuration from "../screens/Finance/DesireDuration";
import BeforeWeBegin from "../screens/Finance/BeforeWeBegin";
import EditNikeName from "../screens/Settings/EditNikeName";
import EditEmail from "../screens/Settings/EditEmail";
import EditMaritalStatus from "../screens/Settings/EditMaritalStatus";
import EmpDetails from "../screens/Settings/EmpDetails";
import ComingSoon from "../screens/Coming-Soon/ComingSoon";
import CardManage from "../screens/card/CardManage";
import Reject from "../screens/Transfer-Payment/Reject";
import TransferTo from "../screens/Transfer-Payment/TransferTo";
import Insights from "../screens/Insights/Insights";
import Modal from 'react-native-modal';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainNavigator = ({onLogin}) => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Home" screenOptions={{ headerShown: false }}  >
      {() => <HomeScreen onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Statements" component={StatementScreen} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="TransactionHistory" component={History} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="PendingTran" component={PendingTran} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="AllowQR" component={AllowQR} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="SetupQR" component={SetUpQR} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="AllowBiometric" component={AllowBiometric} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="OtpQR" component={OtpQR} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="QRAccountSuccess" component={QRAccountSuccess} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="QRScan" component={QRScan} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="InsertAmount" component={InsertAmount} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Review" component={Review} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="DigitalSecure" component={DigitalSecure} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="DuetitNowOnWay" component={DuetitNowOnWay} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="DuetNowSent" component={DuetNowSent} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Recipt" component={Recipt} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="SendAmount" component={SendAmount} screenOptions={{ headerShown: false }} />
      <Stack.Screen name='SpendLimit' component={SpendLimit} />
      <Stack.Screen name='CardPreferences' component={CardPreferences} />
      <Stack.Screen name='SettingServices' component={SettingServices} />
      <Stack.Screen name='ManageDuitNowQR' component={ManageDuitNowQR} />
      <Stack.Screen name="SavingPots" component={SavingPots} />
      <Stack.Screen name="PickCategoryCard" component={PickCategoryCard} />
      <Stack.Screen name="CreateSavingPots" component={CreateSavingPots} />
      <Stack.Screen name="Contribution" component={Contribution} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      <Stack.Screen name="SuccessfullyCreated" component={SuccessfullyCreated} />
      <Stack.Screen name="AddFundsHome" component={AddFundsHome} />
      <Stack.Screen name="AddFunds" component={AddFunds} />
      <Stack.Screen name="AddFundReviewDetails" component={AddFundReviewDetails} />
      <Stack.Screen name="FundSuccessFullyCreated" component={FundSuccessFullyCreated} />
      <Stack.Screen name="WithdrawFund" component={WithdrawFund} />
      <Stack.Screen name="WithdrawFundReview" component={WithdrawFundReview} />
      <Stack.Screen name="WithdrawSuccessfully" component={WithdrawSuccessfully} />
      <Stack.Screen name='CardMangements' component={CardManage} />
      <Stack.Screen name='TransferTo' component={TransferTo} />
      <Stack.Screen name='Insights' component={Insights} />

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
      <Stack.Screen name="Settings" component={SettingServices} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='UpdateMallingAddress' component={UpdateMallingAddress} />
      <Stack.Screen name='EditNikeName' component={EditNikeName} />
      <Stack.Screen name='EditEmail' component={EditEmail} />
      <Stack.Screen name='EditMaritalStatus' component={EditMaritalStatus} />
      <Stack.Screen name='EmpDetails' component={EmpDetails} />
      <Stack.Screen name='Privacy' component={Privacy} />
      <Stack.Screen name='FAQs' component={FAQs} />
      <Stack.Screen name='ImportantDocs' component={ImportantDocs} />
      <Stack.Screen name='PayTransfer' component={PayTransfer} />
      <Stack.Screen name='CardMangement' component={CardMangementOne} />
      <Stack.Screen name='ChangePin' component={ChangePin} />
      <Stack.Screen name='ComingSoon' component={ComingSoon} />
    </Stack.Navigator>
  );
};



const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Accounts" component={Accounts} screenOptions={{
        headerShown: false
      }} />

      <Stack.Screen name="AccountDeposit" component={AccountDeposit} screenOptions={{
        headerShown: false
      }} />

    </Stack.Navigator>
  );
};

const FinanceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Finance" component={Finance} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="Checknote" component={Checknote} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="DesireDuration" component={DesireDuration} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="BeforeWeBegin" component={BeforeWeBegin} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="ApplyFinance" component={ApplyFinance} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="ApplyPF" component={ApplyPF} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name='ApplyFinanceScd' component={ApplyFinanceScd} />
      <Stack.Screen name='DocsInfo' component={DocsInfo} />
      <Stack.Screen name='UploadPdf' component={UploadPdf} />
      <Stack.Screen name='UploadInstructions' component={UploadInstructions} />
      <Stack.Screen name='UploadPdfInfo' component={UploadPdfInfo} />
      <Stack.Screen name='Reviewing' component={Reviewing} />
      <Stack.Screen name='Approved' component={Approved} />
      <Stack.Screen name='UploadDocs' component={UploadDoc} />
    </Stack.Navigator>
  );
};


const TransferPop = ({ isBottomSheetVisible, toggleBottomSheet }) => {
 
  const navigation = useNavigation()
  
  const ForWordnavigation = () => {
      navigation.navigate('TransferTO', { data: isAccount })
  }
  const MobileNumber = () => {
      navigation.navigate('TransferTO', { data2: isMobile })
  }
  const CnicNumber = () => {
      navigation.navigate('TransferTO', { data3: isMobile })
  }
   
  const Flatlist = [
    {
        name: 'Bank Account', Icon: <Icons.MaterialCommunityIcons name="bank-outline" style={styles.icon} onPress={ForWordnavigation} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={ForWordnavigation} />
    },
    { name: 'Mobile Number', Icon: <Icons.AntDesign name="contacts" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" onPress={MobileNumber} style={styles.icon2}  /> },
    {
        name: 'Emrates ID', Icon: <Icons.MaterialCommunityIcons name="card-bulleted-outline" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={CnicNumber} /> },
    // { name: 'MyPolis/MyTentera', Icon: <Icons.MaterialIcons name="local-police" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2}  onPress={gotoComingSoon}/> },
    // { name: 'Business Registration Number', Icon: <Icons.MaterialIcons name="business-center" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={gotoComingSoon} /> },
    // { name: 'Passport Number', Icon: <Icons.MaterialCommunityIcons name="passport" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={gotoComingSoon} /> },
    // Add more items as needed
  ];
  
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
        <View style={styles.flatlistrow}>
            <View style={{flexDirection:'row' , alignItems:"center"}}>
                <Text>{item.Icon}</Text>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={{  width:20, height:20 , borderRadius:50 , justifyContent:"center" , alignItems:"center"}}>{item.Icon2}</Text>
        </View>
    </View>
  );
    return(
      <Modal
      isVisible={isBottomSheetVisible}
      style={{ margin: 0 }}
      onBackdropPress={toggleBottomSheet}
  >
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
              <View>
                  <Text style={{ fontSize: 24, fontWeight: '700', ...Theme.Green_color_h, ...Theme.Font_family }} >Select your transfer type to</Text>
              </View>
              <FlatList
                  data={Flatlist}
                  renderItem={renderItem}
                  keyExtractor={item => item.name} // Change item.id to item.name
                  />
  
  
  
          </View>
      </View>
  </Modal>
    )
  }
const TransferNavigator = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(true);
  const toggleBottomSheet = () => {
    setBottomSheetVisible(false);
};


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
     <Stack.Screen name="Transfer"  screenOptions={{
        headerShown: false
      }}>
          <TransferPop isVisible={isBottomSheetVisible} toggleBottomSheet={toggleBottomSheet} />
      </Stack.Screen>
      <Stack.Screen name="TransferTO" component={TransferTO} screenOptions={{
        headerShown: false
      }} />a
      <Stack.Screen name="RecipientBank" component={RecipientBank} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="AccountType" component={AccountType} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="Reject" component={Reject} screenOptions={{
        headerShown: false
      }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} screenOptions={{
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

const styles = StyleSheet.create({
  tableContainer: {

      padding: 10,
      margin: 0,
      // marginRight: -45
  },
  tableRow: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 0,
      borderBottomWidth: 0.5,
      ...Theme.ligth_gray_border_Color,
      padding: 5,
  },
  headerCell: {
      flex: 1,
      fontWeight: '700',
      fontSize: 16,
      ...Theme.Font_family,
      ...Theme.black_color_h


  },
  cell: {
      flex: 0.2,
      fontWeight: "700",
      ...Theme.Font_family,
      ...Theme.green_color_f
  },
  cell2: {
      flex: 1.5,
      fontWeight: "500",
      ...Theme.Font_family,
      fontSize: 16,
      ...Theme.black_color_h,
  },
  Datetb: {
      flex: 1,
      fontWeight: "500",
      ...Theme.Font_family,
      fontSize: 12,
      ...Theme.Light_gray_color_f
  },
  filterbtn: {
      paddingLeft: 7,
      marginTop: 10
  },
  textcheck: {
      textAlign: "center"
  },
  IConfor: {
      ...Theme.Green_color_h,
      fontSize: 24,
      fontWeight: '700'

  },
  inmages: {
      resizeMode: 'contain',
      width:11,
      height:11,
      
  },
  flatlistrow: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      ...Theme.ligth_gray_border_Color,
      padding:10
  },
  icon: {
      fontSize: 24,
      ...Theme.Green_color_f   
  },
  icon2:{
      fontSize: 16,
      ...Theme.Green_color_f  
  },
  name:{
      fontSize: 16,
      marginLeft:10,
      ...Theme.black_color_f,
      ...Theme.Font_family,
      
  }


});
export { MainNavigator, SignUpStackNavigator, MoreNavigator, TransferNavigator, AccountNavigator, FinanceNavigator };
