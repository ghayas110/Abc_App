import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { RequestButton } from '../../components/Buttons'
import { RadioButton } from 'react-native-paper';

const LoginPreference = () => {
    const navigation = useNavigation()
    const [checked, setChecked] = React.useState('Password');

    if (checked == "Password") {
        ToastAndroid.show(
            'Your log in authentication preference has been updated.',
            ToastAndroid.SHORT,
        );
    } else if(checked == "Biometric"){
        ToastAndroid.show(
            'Your log in authentication preference has been updated.',
            ToastAndroid.SHORT,
        );
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
                        <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 28 }}>Log in authentication preference</Text>
                        <Text style={{ ...style.Font_family, ...style.gray_color_h, marginTop: 15 }}>If you wish to use Biometrics, i.e. Fingerprint ID or Face ID, please ensure it is enabled on your device via Settings</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Password"
                                status={checked === 'Password' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Password')}
                                color={"#00a200"}
                                uncheckedColor={"#00a200"}
                            />
                            <Text style={{ ...style.Font_family, ...style.black_color_h, fontSize: 18 }}>Password</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Biometric"
                                status={checked === 'Biometric' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Biometric')}
                                color={"#00a200"}
                                uncheckedColor={"#00a200"}
                            />
                            <Text style={{ ...style.Font_family, ...style.black_color_h, fontSize: 18 }}>Biometric</Text>
                        </View>

                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Save"} onPress={() => {console.log("first")}}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default LoginPreference