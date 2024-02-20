import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, View, StyleSheet, Text, ScrollView } from 'react-native';
import Icons from '../../../components/Icons'
import Chart from '../../Chart/Chart'
import Theme from "../../../assets/styles/basic"
import ChartInsight from '../../Chart/ChartInsight'
import MoneyOut from './MoneyOut'

import React from 'react'
import MoneyIn from './MoneyIn';


const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');

const FinancialInsight = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ padding: 5, marginBottom: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 0.5 }}>
                    {/* <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} /> */}
                    <View style={styles.savingCard}>
                        <View style={styles.savingCardheader2}>
                            <View style={styles.savingCardHeadertext}>
                                <Text style={styles.textSaving}>Financial Insights</Text>
                                <Text style={styles.textViewAll}  >More  <Icons.MaterialIcons name="arrow-forward-ios" style={styles.textIcon} /></Text>
                            </View>
                        </View>
                        <View style={styles.Chart}>
                            <View style={styles.savingpotcard}>
                                <Chart />
                            </View>
                            <View style={styles.savingpotcard}>
                                <View style={styles.savingpotcard}>
                                    <ChartInsight />
                                </View>
                            </View>
                        </View>
                        <View style={styles.chartbottom}>
                            <Text style={{ fontSize: 12, ...Theme.Light_gray_color_f, ...Theme.Font_family, fontWeight: '500', }}>Net Cash Flow</Text>
                            <Text style={{ fontSize: 14, ...Theme.chart_green_color, ...Theme.Font_family, fontWeight: '700', }}>+AED 1,5323.00</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: "white",
                    height: height,
                    padding: 10,
                }}>

                    <Tab.Navigator
                        tabBarOptions={{
                            labelStyle: {
                                fontSize: 16,
                                fontWeight: "900",
                                textTransform: "capitalize",
                                fontFamily: "Poppins-Regular",
                                // marginTop: 30
                            },
                            tabStyle: {
                                backgroundColor: "white",
                                elevation: 0
                            },
                            indicatorStyle: {
                                // borderBottomWidth: 50,
                                // borderBottomColor: 'green',
                            },
                        }}>



                        <Tab.Screen name="Money In" component={MoneyIn} />
                        <Tab.Screen name="Money Out" component={MoneyOut} />
                    </Tab.Navigator>
                </View>
            </ScrollView>


        </View>
    )
}

export default FinancialInsight

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    savingCard: {
        // borderRadius: 15,
        // borderWidth: 0.5,
        // padding: 15,
        // backgroundColor: "#FFFFFF",
        ...Theme.ligth_gray_border_Color,
        // shadowColor: '#000000',
        // marginVertical: 5,
        // marginHorizontal: 5,
        // width: 320,
        // elevation: 4
    },
    savingCardAccont: {
        // borderRadius: 20,
        // borderWidth: 0.5,
        // width: 225,
        // padding: 15,
        // backgroundColor: "#FF8C19",
        // ...Theme.ligth_gray_border_Color,
        // shadowColor: '#000000',
        // marginVertical: 5,
        // marginHorizontal: 5,
        // elevation: 4
    },
    savingCardHeadertext: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop:10 ,

    },
    DebitCard: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    savingCardHeadertext2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },
    savingCardheader: {
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 15
    },
    savingCardheader2: {
        // borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 15
    },
    savingCardheaderHome: {
        ...Theme.ligth_gray_border_Color,
        padding: 15
    },
    Chart: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
    },
    textIcon: {
        fontSize: 16,
        // marginLeft:10
    },
    chartbottom: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
})