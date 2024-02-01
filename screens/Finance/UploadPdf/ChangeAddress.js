import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView } from 'react-native'
import style from '../../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import ActivationSteps from '../../../components/steps/ActivationSteps';
import { OutlineButton, RequestButton } from '../../../components/Buttons';


const ChangeAddress = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 20,
                paddingTop: 30
            }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{width:50}}>
                            <Image source={require("../../../assets/transferPaymentImages/Back_press_area.png")} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 30 }}>We need some documents from you</Text>
                    <Text style={{ ...style.Font_family, ...style.gray_color_h }}>We require your document as below to proceed with your application</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../../assets/Finance/docs.png")} style={{ height: 100, width: 100, resizeMode: "contain" }} />
                    <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 20, marginTop: 10, textAlign: "center" }}>Latest 2 year EPF full statements</Text>
                    <Text style={{ textAlign: "center", ...style.Font_family, ...style.gray_color_h }}>Showing at least the last 12 months of {'\n'} contribution history</Text>
                </View>
                <View style={{ flex: 1,justifyContent: "flex-end" }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Continue"} onPress={() => { navigation.navigate("UploadPdf") }} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default ChangeAddress