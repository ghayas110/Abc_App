import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { RequestButton } from '../../components/Buttons'

const SuccessPassCode = () => {
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
                <View style={{flex:1}}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop:50
                    }}>
                        <Image source={require("../../assets/CreateAccoutImages/SuccessFully.png")} />
                    </View>
                    <View style={{
                        marginTop: 10,
                    }}>
                        <Text style={{...style.Font_family_Bold,...style.Green_color_h,fontSize:30}}>Your app passcode is set!</Text>
                        <Text style={{...style.Font_family,...style.gray_color_h,fontSize:18}}>You can manage your app passcode in Settings</Text>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Back to Home"} onPress={() => navigation.navigate('Home')} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default SuccessPassCode