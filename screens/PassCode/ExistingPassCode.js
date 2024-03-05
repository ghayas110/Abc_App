import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import Modal from 'react-native-modal';


const ExistingPassCode = () => {
    const navigation = useNavigation()
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    const passCodeBox = () => {
        navigation.navigate('NewPassCode')
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
                        <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 25 }}>Please input your existing app passcode</Text>
                        <Text style={{ ...style.gray_color_h, ...style.Font_family, fontSize: 18, marginTop: 15 }}>Enter the existing 6 digit passcode for your account</Text>
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
                            placeholder="Enter app passcode"
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={{
                            position: "absolute",
                            right: 0
                        }}>
                            <Image style={{ height: 30, width: 30 }} source={isPasswordVisible ? require('../../assets/cardImages/eyeShow.png') : require('../../assets/cardImages/eyehide.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity>
                            <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 18 }}>Forgot app passcode?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <View style={{...style.bg_light_green_color,padding: 20,marginBottom: 15}}>
                        <Text style={{
                            ...style.Font_family,
                            color: "#07714b",
                            fontSize: 17
                        }}>App passcode refers to a 6-digit passcode that you have set for the Rize app.</Text>
                    </View>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Continue"} onPress={() => passCodeBox()} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default ExistingPassCode