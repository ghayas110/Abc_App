import React, { useState } from 'react'
import { Dimensions, Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';
import { CheckBoxInput } from '../../components/Inputs';

const { width, height } = Dimensions.get('window');
const SavingsAccount = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isShow, setShow] = useState(false)
    const navigation = useNavigation()
    const onPress = async () => {
        navigation.navigate('PendingTran')
    }
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    const nextPage = () => {
        setShow(true)
        setBottomSheetVisible(false)
    }
    const clearAll = () => {
        setShow(false)
    }
    const styles = {
        bottomSheetContainer: {
            backgroundColor: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
    };
    return (
        <>
            <SafeAreaView style={{
                backgroundColor: "white",
                height: height
            }}>

                <ScrollView style={{ marginBottom: 200 }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: 15,
                    }}>
                        <TouchableOpacity onPress={toggleBottomSheet}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                padding: 10,
                                borderRadius: 10,
                                ...style.green_out_line,
                                flex: 0.4
                            }}
                        >
                            <Text style={{ fontSize: 17, ...style.Green_color_h, ...style.Font_family }}>Latest first</Text>
                            <Image source={require('../../assets/TransactionHistoryImages/Swap.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            padding: 10,
                            borderRadius: 10,
                            ...style.green_out_line,
                            flex: 0.3,
                            marginLeft: 20
                        }} onPress={toggleBottomSheet}>
                            <Text style={{ fontSize: 17, ...style.Green_color_h, ...style.Font_family }}>Filter</Text>
                            <Image source={require('../../assets/TransactionHistoryImages/filter-lines.png')} />
                        </TouchableOpacity>
                    </View>
                    {isShow ?
                        <View style={{
                            padding: 15
                        }}>
                            <TouchableOpacity onPress={clearAll}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    borderRadius: 10,
                                    width: width * 0.3,
                                }}>
                                <Text style={{ fontSize: 17, ...style.Green_color_h, ...style.Font_family_Bold }}>Clear all</Text>
                                <Image source={require('../../assets/TransactionHistoryImages/cross-green.png')} />
                            </TouchableOpacity>
                        </View> : null}

                    <TouchableOpacity onPress={() => onPress()}>
                        <View style={{
                            padding: 15,
                            margin: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            ...style.bg_light_green_color,
                        }}>
                            <Text style={{
                                ...style.Font_family,
                                ...style.Green_color_h,
                                fontSize: 15,
                                width: 200,
                            }}>You have 3 pending transactions</Text>
                            <TouchableOpacity>
                                <Image source={require('../../assets/TransactionHistoryImages/right.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        paddingLeft: 15,
                        marginTop: 0
                    }}>
                        <Text style={{ ...style.black_color_h, ...style.Font_family_Bold, fontSize: 17 }}>Feb 2024</Text>

                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Fund-Transfer to Account -  SSSCO</Text>
                                <Text style={{ ...styless.textTwo }}>-AED 800.00</Text>
                            </View>
                            <Text style={styless.bottomDate}>5 FEB 2022</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Fund-Transfer to Account -  SSSCO</Text>
                                <Text style={{ ...styless.textTwo, ...style.Green_color_h }}>+AED 3,650.00</Text>
                            </View>
                            <Text style={styless.bottomDate}>3 FEB 2022</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Fund-Transfer to ID - Adil AHMAD</Text>
                                <Text style={{ ...styless.textTwo, ...style.red_color_h }}>-AED 10.80</Text>
                            </View>
                            <Text style={styless.bottomDate}>3 FEB 2022</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Fund-Transfer to Account - Emirates</Text>
                                <Text style={{ ...styless.textTwo, ...style.red_color_h }}>-AED 35.20</Text>
                            </View>
                            <Text style={styless.bottomDate}>1 FEB 2022</Text>
                        </TouchableOpacity>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginVertical: 10,
                            marginRight: 15
                        }} />

                        <Text style={{ ...style.black_color_h, ...style.Font_family_Bold, fontSize: 17 }}>Jan 2022</Text>
                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Profit Earned</Text>
                                <Text style={{ ...styless.textTwo, ...style.Green_color_h }}>+AED 10.51</Text>
                            </View>
                            <Text style={styless.bottomDate}>31 JAN 2022</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                width: width,
                            }}>
                                <Text style={styless.textOne}>Universal QR - BRYAN LIM</Text>
                                <Text style={{ ...styless.textTwo, ...style.red_color_h }}>+AED 10.51</Text>
                            </View>
                            <Text style={styless.bottomDate}>27 JAN 2022</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{
                            ...styles.bottomSheetContainer,
                        }}>
                            <View style={{
                                ...style.basic_container,
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={toggleBottomSheet}
                                    style={{
                                        ...style.bg_light_gray,
                                        padding: 15,
                                        marginRight: 30,
                                        borderRadius: 40,
                                    }}>
                                    <Image
                                        source={require('../../assets/TransactionHistoryImages/cross.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{
                                    ...style.black_color_h,
                                    paddingLeft: 10,
                                    fontSize: 25,
                                    fontWeight: "600",
                                    fontFamily: "Poppins-Bold"
                                }}>Filter by</Text>



                                <View style={{
                                    padding: 15
                                }}>
                                    <Text style={{
                                        ...style.black_color_h,
                                        paddingLeft: 10,
                                        fontSize: 18,
                                        fontWeight: "600",
                                        fontFamily: "Poppins-Bold"
                                    }}>Period</Text>
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"All transactions"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Last 1 month"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Last 3 months"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Custom date range"} color={"#00a200"} />
                                    <View style={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'grey',
                                        marginVertical: 10,
                                    }} />
                                    <Text style={{
                                        ...style.black_color_h,
                                        paddingLeft: 10,
                                        fontSize: 18,
                                        fontWeight: "600",
                                        fontFamily: "Poppins-Bold"
                                    }}>Transaction type</Text>
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"All transactions"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Money out"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Money in"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Savings pot tranfers"} color={"#00a200"} />
                                    <View style={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'grey',
                                        marginVertical: 10,
                                    }} />
                                    <Text style={{
                                        ...style.black_color_h,
                                        paddingLeft: 10,
                                        fontSize: 18,
                                        fontWeight: "600",
                                        fontFamily: "Poppins-Bold"
                                    }}>Transaction mode</Text>
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Card"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Transfer and pay"} color={"#00a200"} />
                                    <CheckBoxInput textStyle={{ ...style.black_color_h, fontSize: 17, marginLeft: 10 }} text={"Profit"} color={"#00a200"} />
                                </View>
                                <Text style={{
                                    textAlign: "center",
                                    marginTop: 20,
                                    fontSize: 20,
                                    ...style.Green_color_h,
                                    ...style.Font_family_Bold
                                }}>Restore to default</Text>
                                <RequestButton text={"Apply"} onPress={() => nextPage()}
                                    btnStyle={{ marginTop: 20 }}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
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
export default SavingsAccount