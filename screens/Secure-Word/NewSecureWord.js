import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { RequestButton } from '../../components/Buttons'


const NewSecureWord = () => {
    const navigation = useNavigation()

    const goto = () => {
        ToastAndroid.show(
            'Your secure word has been updated.',
            ToastAndroid.SHORT,
        );
        setTimeout(() => {
            navigation.navigate('Privacy')
        }, 2000);
    }
    

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
                <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 30 }}>Create a new secure word</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        marginTop: 20
                    }}>
                        <TextInput style={{
                            fontSize: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            flex: 1,
                            ...style.Font_family,
                            ...style.black_color_h
                        }}
                            placeholder="Enter secure word"
                        />
                    </View>
                 
                    <View style={{
                        marginTop: 20
                    }}>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight:10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must not be the same as username</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight:10}}  source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must be between 5 - 15 characters</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight:10}}  source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Only letters and numbers allowed</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Save"} onPress={() => goto()} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default NewSecureWord