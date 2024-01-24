import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native'
import Header from './components/Header'
import style from "../../assets/styles/basic"

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
            }}>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 15
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        padding: 10,
                        borderRadius: 10,
                        ...style.green_out_line,
                        flex: 0.3
                    }}>
                        <Text>Latest first</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/TransactionHistoryImages/Swap.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        padding: 10,
                        borderRadius: 10,
                        ...style.green_out_line,
                        flex: 0.3,
                        marginLeft: 20
                    }}>
                        <Text style={{fontSize: 20,...style.Green_color_h,...style.Font_family_Regular}}>Filter</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/TransactionHistoryImages/filter-lines.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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