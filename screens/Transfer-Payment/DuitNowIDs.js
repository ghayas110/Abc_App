import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';

const DuitNowIDs = () => {
    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 30
            }}>
                <View>
                    <TouchableOpacity onPress={() =>  navigation.goBack()}>
                        <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        ...style.Font_family_Bold,
                        ...style.Green_color_h,
                        fontSize: 30
                    }}>Select your DuitNow ID</Text>
                    <Text style={{
                        ...style.Font_family,
                        ...style.gray_color_h,
                        fontSize: 18
                    }}>Link your DuitNow ID with Bank account</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderColor: "#808080",
                        borderRadius: 8,
                        padding: 20,
                        marginTop: 15
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                ...style.Font_family_Bold,
                                ...style.black_color_h,
                                fontSize: 18
                            }}>MyKad</Text>

                            <View style={{
                                backgroundColor: "#12b76a",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: 15,
                                paddingRight: 15,
                                padding: 5,
                                borderRadius: 5
                            }}>
                                <Text style={{
                                    color: "white",
                                    marginRight: 10,
                                    fontSize: 20
                                }}>Active</Text>
                                <Image source={require("../../assets/transferPaymentImages/tick.png")} />
                            </View>
                        </View>
                        <Text style={{
                            ...style.gray_color_h,
                            ...style.Font_family
                        }}>••••••••6755</Text>
                        <Text style={{
                            ...style.gray_color_h,
                            ...style.Font_family,
                            fontSize: 18
                        }}>Linked to Maybank</Text>
                        <View style={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                ...style.Font_family_Bold,
                                ...style.Green_color_h,
                                fontSize: 15,
                                marginRight: 8
                            }}>Switch account</Text>
                            <Image source={require("../../assets/transferPaymentImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderColor: "#808080",
                        borderRadius: 8,
                        padding: 20,
                        marginTop: 15
                    }} onPress={() => {navigation.navigate('CheckDuitNow')}}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                ...style.Font_family_Bold,
                                ...style.black_color_h,
                                fontSize: 18
                            }}>Mobile Number</Text>

                            <Text style={{
                                ...style.Font_family_Bold,
                                ...style.Green_color_h,
                                borderColor: "#12b76a",
                                borderWidth: 2,
                                fontSize: 18,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 8,
                                borderRadius: 7
                            }}>Available</Text>
                        </View>
                        <Text style={{
                            ...style.gray_color_h,
                            ...style.Font_family
                        }}>••••••••7145</Text>
                        <Text style={{
                            ...style.gray_color_h,
                            ...style.Font_family,
                            fontSize: 18
                        }}>Not linked to any account</Text>
                        <View style={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                ...style.Font_family_Bold,
                                ...style.Green_color_h,
                                fontSize: 15,
                                marginRight: 8
                            }}>Link to Bank</Text>
                            <Image source={require("../../assets/transferPaymentImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default DuitNowIDs