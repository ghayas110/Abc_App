import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, Text, View } from 'react-native'
import Header from './components/Header'

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
                    tabBarOptions={{
                        labelStyle: {
                            fontSize: 16,
                            fontWeight: "900",
                            textTransform: "capitalize",
                            fontFamily: "Poppins-Regular",
                            marginTop: 30
                        },
                        tabStyle: {
                            backgroundColor: "white",
                            elevation: 0
                        },
                        indicatorStyle: {
                            borderBottomWidth: 50,
                            borderBottomColor: 'green', 
                          },
                    }}>
                    <Tab.Screen name="Saving Account" component={SavingAccount} />
                    <Tab.Screen name="Saving Pot" component={SavingPot} />
                </Tab.Navigator>
            </View>

        </>
    )
}

const SavingAccount = () => {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                height: height
            }}><Text>One</Text></View>
        </>
    )
}
const SavingPot = () => {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                height: height
            }}><Text>One</Text></View>
        </>
    )
}


export default History