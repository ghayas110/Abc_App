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
    <Stack.Navigator screenOptions={{ headerShown: false}}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="Statements" component={StatementScreen} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="TransactionHistory" component={History} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="PendingTran" component={PendingTran} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="AllowQR" component={AllowQR} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="SetupQR" component={SetUpQR} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="AllowBiometric" component={AllowBiometric} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="OtpQR" component={OtpQR} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="QRAccountSuccess" component={QRAccountSuccess} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="QRScan" component={QRScan} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="InsertAmount" component={InsertAmount} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="Review" component={Review} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="DigitalSecure" component={DigitalSecure} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="DuetitNowOnWay" component={DuetitNowOnWay} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="DuetNowSent" component={DuetNowSent} screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="Recipt" component={Recipt} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="SendAmount" component={SendAmount} screenOptions={{ headerShown: false}} />
      <Stack.Screen name='CardMangementOne' component={CardMangementOne} />
      <Stack.Screen name='ChangePin' component={ChangePin} />
      <Stack.Screen name='SpendLimit' component={SpendLimit} />
      <Stack.Screen name='CardPreferences' component={CardPreferences} />
      <Stack.Screen name='SettingServices' component={SettingServices} />
      <Stack.Screen name='PayTransfer' component={PayTransfer} />
      <Stack.Screen name='ManageDuitNowQR' component={ManageDuitNowQR} />
      <Stack.Screen name='ImportantDocs' component={ImportantDocs} />
      <Stack.Screen name='Privacy' component={Privacy} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='UpdateMallingAddress' component={UpdateMallingAddress} />
      <Stack.Screen name='FAQs' component={FAQs} />
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
      <Stack.Screen name="FinanceScreen" component={Finance} screenOptions={{
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
    </Stack.Navigator>
  );
};



const TransferNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name="Transfer" component={Transfer} screenOptions={{
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

export { MainStackNavigator, SignUpStackNavigator, MoreNavigator, TransferNavigator, AccountNavigator , FinanceNavigator };
