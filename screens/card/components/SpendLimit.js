import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import { SimpleInput } from '../../../components/Inputs'
import { RequestButton } from '../../../components/Buttons'


const SpendLimit = () => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack("Home");
    };
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <Header
                    backtoPage={true}
                    title={"Card Limits"}
                    backIcon={require('../../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    marginVertical: 10,
                }} />
                <ScrollView>
                    <SafeAreaView style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 15,
                        paddingTop: 30,
                        flex: 1
                    }}>
                        <View>
                            <View>
                                <Text style={{
                                    ...style.Font_family,
                                    ...style.gray_color_h,
                                    fontSize: 18
                                }}>Daily transfer limit</Text>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    position: "relative",
                                }}>
                                    <Text style={{
                                        ...style.Font_family_Bold,
                                        ...style.black_color_h,
                                        fontSize: 18
                                    }}>AED</Text>
                                    <SimpleInput
                                        viewStyle={{
                                            width: "auto",
                                            flex: 1,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            marginTop: 0,
                                        }}
                                        inputstyle={{
                                            fontSize: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#cccccc',
                                            padding: 0,
                                            paddingLeft: 10,
                                            color: "black"
                                        }}
                                        placeholderTextColor="#cccccc"
                                        label={""}
                                        type={"text"}
                                        placeholder={""}
                                    />
                                    <Image style={{ position: "absolute", right: 0, bottom: 8 }} source={require("../../../assets/cardImages/pencil.png")} />
                                </View>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={{
                                    ...style.Font_family,
                                    ...style.gray_color_h,
                                    fontSize: 18
                                }}>Daily ATM withdrawal limit</Text>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    position: "relative",
                                }}>
                                    <Text style={{
                                        ...style.Font_family_Bold,
                                        ...style.black_color_h,
                                        fontSize: 18
                                    }}>AED</Text>
                                    <SimpleInput
                                        viewStyle={{
                                            width: "auto",
                                            flex: 1,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            marginTop: 0,
                                        }}
                                        inputstyle={{
                                            fontSize: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#cccccc',
                                            padding: 0,
                                            paddingLeft: 10,
                                            color: "black"
                                        }}
                                        placeholderTextColor="#cccccc"
                                        label={""}
                                        type={"text"}
                                        placeholder={""}
                                    />
                                    <Image style={{ position: "absolute", right: 0, bottom: 8 }} source={require("../../../assets/cardImages/pencil.png")} />
                                </View>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={{
                                    ...style.Font_family,
                                    ...style.gray_color_h,
                                    fontSize: 18
                                }}>Daily purchase limit</Text>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    position: "relative",
                                }}>
                                    <Text style={{
                                        ...style.Font_family_Bold,
                                        ...style.black_color_h,
                                        fontSize: 18
                                    }}>AED</Text>
                                    <SimpleInput
                                        viewStyle={{
                                            width: "auto",
                                            flex: 1,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            marginTop: 0,
                                        }}
                                        inputstyle={{
                                            fontSize: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#cccccc',
                                            padding: 0,
                                            paddingLeft: 10,
                                            color: "black"
                                        }}
                                        placeholderTextColor="#cccccc"
                                        label={""}
                                        type={"text"}
                                        placeholder={""}
                                    />
                                    <Image style={{ position: "absolute", right: 0, bottom: 8 }} source={require("../../../assets/cardImages/pencil.png")} />
                                </View>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text style={{
                                    ...style.Font_family,
                                    ...style.gray_color_h,
                                    fontSize: 18
                                }}>Daily PayWave limit</Text>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    position: "relative",
                                }}>
                                    <Text style={{
                                        ...style.Font_family_Bold,
                                        ...style.black_color_h,
                                        fontSize: 18
                                    }}>AED</Text>
                                    <SimpleInput
                                        viewStyle={{
                                            width: "auto",
                                            flex: 1,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            marginTop: 0,
                                        }}
                                        inputstyle={{
                                            fontSize: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#cccccc',
                                            padding: 0,
                                            paddingLeft: 10,
                                            color: "black"
                                        }}
                                        placeholderTextColor="#cccccc"
                                        label={""}
                                        type={"text"}
                                        placeholder={""}
                                    />
                                    <Image style={{ position: "absolute", right: 0, bottom: 8 }} source={require("../../../assets/cardImages/pencil.png")} />
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom:10
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Confirm"} onPress={() => goBack()} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default SpendLimit