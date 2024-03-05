import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from './components/Header'
import style from "../../assets/styles/basic"
import SavingAccount from "../transaction-history/SavingsAccount"
import SavingPots from './components/SavingPots';

const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');

const History = () => {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                height: height
            }}>
                <Header
                    backtoPage={true}
                    title={"Transaction History"}
                    backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: {
                            fontSize: 16,
                            fontWeight: "900",
                            textTransform: "capitalize",
                            fontFamily: "Poppins-Regular",
                            marginTop: 20,
                        },
                        tabStyle: {
                            backgroundColor:"green",
                            elevation: 0
                        },
                        tabBarIndicatorStyle: {
                            borderBottomWidth: 2,
                            borderBottomColor: 'green',
                        },
                    }}>
                    <Tab.Screen name="Saving Account" component={SavingAccount}  />
                    <Tab.Screen name="Saving Pot" component={SavingPots} />
                </Tab.Navigator>
            </View>

        </>
    )
}



const styless = StyleSheet.create({
    textOne: {
        ...style.black_color_f,
        ...style.Font_family,
        width: width * 0.5,
        fontSize: 15
    },
    textTwo: {
        ...style.gray_color_h,
        ...style.Font_family,
        textAlign: "right",
        width: width * 0.5,
        marginRight: 30,
        fontSize: 15,
        paddingRight: 30
    },
    bottomDate: {
        ...style.Font_family_Bold,
        ...style.gray_color_h,
        marginTop: 12,
        fontSize: 16,
    }

});


export default History