import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native'
import Header from './components/Header'
import style from "../../assets/styles/basic"
import { SafeAreaView } from 'react-native-safe-area-context';
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
            <SafeAreaView style={{
                backgroundColor: "white",
                height: height,
            }}>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 15,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        padding: 10,
                        borderRadius: 10,
                        ...style.green_out_line,
                        flex: 0.4
                    }}>
                        <Text style={{ fontSize: 17, ...style.Green_color_h, ...style.Font_family }}>Latest first</Text>
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
                        <Text style={{ fontSize: 17, ...style.Green_color_h, ...style.Font_family }}>Filter</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/TransactionHistoryImages/filter-lines.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    paddingLeft: 15,
                    marginTop: 40
                }}>
                    <Text style={{ ...style.black_color_h, ...style.Font_family_Bold, fontSize: 17 }}>Feb 2024</Text>
                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: width,
                        }}>
                            <Text numberOfLines={1} style={{marginRight: 30,...style.black_color_f,...style.Font_family,fontSize: 15}}>Trip to Kyoto - Single Transfer</Text>
                            <Text numberOfLines={1} style={{marginRight: 30,...style.gray_color_h,...style.Font_family,fontSize: 15}}>-RM 800.00</Text>
                        </View>
                        <Text style={{marginTop: 12,...style.Font_family_Bold,fontSize: 16,...style.gray_color_h}}>5 FEB 2022</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: width,
                            marginTop: 20
                        }}>
                            <Text numberOfLines={1} style={{marginRight: 30,...style.black_color_f,...style.Font_family,fontSize: 15}}>DuitNow Transfer to Account -  Rize</Text>
                            <Text numberOfLines={2} style={{marginRight: 30,...style.gray_color_h,...style.Font_family,fontSize: 15}}>+RM 3,650.00</Text>
                        </View>
                        <Text style={{marginTop: 12,...style.Font_family_Bold,fontSize: 16,...style.gray_color_h}}>3 FEB 2022</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: width,
                            marginTop: 20
                        }}>
                            <Text numberOfLines={1} style={{marginRight: 30,...style.black_color_f,...style.Font_family,fontSize: 15}}>DuitNow Transfer to ID - ADLI AHMAD</Text>
                            <Text numberOfLines={2} style={{marginRight: 30,...style.gray_color_h,...style.Font_family,fontSize: 15}}>-RM 10.80</Text>
                        </View>
                        <Text style={{marginTop: 12,...style.Font_family_Bold,fontSize: 16,...style.gray_color_h}}>3 FEB 2022</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: width,
                            marginTop: 20
                        }}>
                            <Text numberOfLines={1} style={{marginRight: 30,...style.black_color_f,...style.Font_family,fontSize: 15}}>DuitNow Transfer to Account - TENAGA NASIONAL</Text>
                            <Text numberOfLines={2} style={{marginRight: 30,...style.gray_color_h,...style.Font_family,fontSize: 15}}>-RM 35.20</Text>
                        </View>
                        <Text style={{marginTop: 12,...style.Font_family_Bold,fontSize: 16,...style.gray_color_h}}>1 FEB 2022</Text>
                    </TouchableOpacity>

                    <View style={{
                         borderBottomColor: 'black',
                         marginVertical: 10,
                         width: width
                    }} />
                </View>
            </SafeAreaView>
        </>
    )
}
const SavingPot = () => {
    return (
        <>
            <SavingPots />
        </>
    )
}


export default History