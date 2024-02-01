import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
    const dataOne = [
        {
            id: '1',
            UpArrow: require('../../assets/generalImages/UpArrow.png'),
            Head: "Personal",
            children: {
                label: "Username",
                description: "RazakOsman123",
                image: false,
            },
            children: {
                label: "Nickname (preferred name) ",
                description: "Razak",
                image: require('../../assets/generalImages/move.png'),
            },
            children: {
                label: "Mailing address",
                description: "62, Jalan Camar 5, Residensi 28, 47810, Petaling Jaya, Selangor",
                image: require('../../assets/generalImages/move.png'),
            },
            children: {
                label: "Email address",
                description: "razak@gmail.com",
                image: require('../../assets/generalImages/move.png'),
            },
            children: {
                label: "Mobile number",
                description: "(+60) •• ••• 5953",
                image: require('../../assets/generalImages/move.png'),
            },
            children: {
                label: "Marital status",
                description: "Single",
                image: require('../../assets/generalImages/move.png'),
            }
        },
        {
            id: '2',
            UpArrow: require('../../assets/generalImages/UpArrow.png'),
            Head: "Employment details",
            children: {
                label: "Annual income bracket",
                description: "RM 72,000 to RM 88,000",
                image: require('../../assets/generalImages/move.png'),
            },
        },
    ];

    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <ScrollView>
                    <Header
                        backtoPage={true}
                        title={"Profile"}
                        backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                    />
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cccccc',
                        marginVertical: 10,
                    }} />
                    <SafeAreaView style={{
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 15,
                        paddingTop: 20
                    }}>
                        <View>
                            <View style={{
                                display: "flex",
                            }}>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    borderBottomColor: "#cccccc",
                                    borderBottomWidth: 1,
                                    paddingBottom: 5
                                }}>
                                    <Image source={require("../../assets/generalImages/UpArrow.png")} style={{ marginRight: 20 }} />
                                    <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Personal</Text>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <View>
                                        <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Username</Text>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>RazakOsman123</Text>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                }}>
                                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Nickname (preferred name) </Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>Razak</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("UpdateMallingAddress")}><Image source={require("../../assets/generalImages/Edit.png")} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                }}>
                                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Mailing address</Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>62, Jalan Camar 5, Residensi 28, 47810, Petaling Jaya, Selangor</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("UpdateMallingAddress")}><Image source={require("../../assets/generalImages/Edit.png")} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                }}>
                                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Email address</Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>razak@gmail.com</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("UpdateMallingAddress")}><Image source={require("../../assets/generalImages/Edit.png")} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                }}>
                                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Marital status</Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>Single</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("UpdateMallingAddress")}><Image source={require("../../assets/generalImages/Edit.png")} /></TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                display: "flex",
                                marginTop: 30
                            }}>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    borderBottomColor: "#cccccc",
                                    borderBottomWidth: 1,
                                    paddingBottom: 5
                                }}>
                                    <Image source={require("../../assets/generalImages/UpArrow.png")} style={{ marginRight: 20 }} />
                                    <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Employment details</Text>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                }}>
                                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Annual income bracket</Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>RM 72,000 to RM 88,000</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("UpdateMallingAddress")}><Image source={require("../../assets/generalImages/Edit.png")} /></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView >

        </>
    )
}

export default Profile