import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import Modal from 'react-native-modal';


const OneTimePwd = () => {
    const navigation = useNavigation()
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
                        <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 30 }}>Enter your one time password</Text>
                        <Text style={{ ...style.gray_color_h, ...style.Font_family, fontSize: 18, marginTop: 15 }}>We have sent your one time password to ‘+60XXXXX1234’</Text>
                    </View>
                    <View>
                        <OtpInput inputStyle={{ width: "auto" }} />
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 10
                    }}>
                        <Text style={{...style.gray_color_h,...style.Font_family,fontSize: 15}}>Your one time password expires in</Text>
                        <Text style={{...style.orenge_color_h,...style.Font_family,fontSize: 15}}>01:42</Text>
                    </View>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Continue"} onPress={() => navigation.navigate('SuccessPassCode')} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default OneTimePwd