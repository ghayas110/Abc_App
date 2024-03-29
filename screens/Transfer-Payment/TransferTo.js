import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from './components/Header'
import style from "../../assets/styles/basic"
import Favourite from './components/Favourite';
import NewRecipient from './components/NewRecipient';

const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');
const TransferTo = () => {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                height: height,
                padding: 10,
            }}>
                <Header
                    backtoPage={true}
                    title="Transfer To"
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
                    <Tab.Screen name="New Recipient" component={NewRecipient} />
                    <Tab.Screen name="Favourite" component={Favourite} />
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


export default TransferTo