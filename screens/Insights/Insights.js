import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Theme from '../../assets/styles/basic'
import FinancialInsight from './components/FinancialInsight';
import Swiper from 'react-native-swiper';


const Tab = createMaterialTopTabNavigator();
const { width ,height } = Dimensions.get('window');



const Insights = ({ route }) => {
    // const { data, data2, data3 } = route.params;

        return (
            <>
                <View style={{
                    backgroundColor: "white",
                    height: height,
                    padding: 10,
                }}>
                    <Header
                        backtoPage={true}
                        title="Financial Insights"
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

                        {/* {data && <Tab.Screen name="New Recipient" component={NewRecipient} />}
                        {data2 && <Tab.Screen name="New Recipient" component={MobileNumber} />}
                        {data3 && <Tab.Screen name="New Recipient" component={CnicNumber} />} */}

                        <Tab.Screen name="Jan'24" component={FinancialInsight} />
                        <Tab.Screen name="Feb'24" component={FinancialInsight} />
                        <Tab.Screen name="March'24" component={FinancialInsight} />
                    </Tab.Navigator>
                </View>

            </>
        )
    }



    const styles = StyleSheet.create({
        textOne: {
            ...Theme.black_color_f,
            ...Theme.Font_family,
            width: width * 0.5,
            fontSize: 15
        },
        textTwo: {
            ...Theme.gray_color_h,
            ...Theme.Font_family,
            textAlign: "right",
            width: width * 0.5,
            marginRight: 30,
            fontSize: 15,
            paddingRight: 30
        },
        bottomDate: {
            ...Theme.Font_family_Bold,
            ...Theme.gray_color_h,
            marginTop: 12,
            fontSize: 16,
        }

    });




export default Insights