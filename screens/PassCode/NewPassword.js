import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import Modal from 'react-native-modal';


const NewPassword = () => {
    const navigation = useNavigation()
    const [password, setPassword] = useState('');
    const [confirmPwd,setConfirmPwd] = useState('')

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = (which) => {
        if(which == "password"){
            setIsPasswordVisible((prev) => !prev);
        }else{ setIsConfirmPasswordVisible((prev) => !prev); }
    };

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
                        <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 30 }}>Set a new password</Text>
                        <Text style={{ ...style.gray_color_h, ...style.Font_family, fontSize: 18, marginTop: 15 }}>Please ensure your new password matches the criteria listed below</Text>
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
                            placeholder="Enter new password"
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={() => togglePasswordVisibility("password")} style={{
                            position: "absolute",
                            right: 0
                        }}>
                            <Image style={{ height: 30, width: 30 }} source={isPasswordVisible ? require('../../assets/cardImages/eyeShow.png') : require('../../assets/cardImages/eyehide.png')} />
                        </TouchableOpacity>
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
                            placeholder="Confirm new password"
                            secureTextEntry={!isConfirmPasswordVisible}
                            value={confirmPwd}
                            onChangeText={(text) => setConfirmPwd(text)}
                        />
                        <TouchableOpacity onPress={() => togglePasswordVisibility("confirm")} style={{
                            position: "absolute",
                            right: 0
                        }}>
                            <Image style={{ height: 30, width: 30 }} source={isConfirmPasswordVisible ? require('../../assets/cardImages/eyeShow.png') : require('../../assets/cardImages/eyehide.png')} />
                        </TouchableOpacity>
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
                            <Image style={{marginRight: 10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must not be the same as username or secure word</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight: 10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must be between 8 and 20 characters</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight: 10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must contain a lowercase letter</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight: 10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must contain an uppercase letter</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "row"
                        }}>
                            <Image style={{marginRight: 10}} source={require("../../assets/cardImages/rightTick.png")} />
                            <Text style={{
                                ...style.Font_family,
                                ...style.gray_color_h,
                                fontSize: 15,
                                lineHeight: 28,
                            }}>Must contain a number</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Save"} onPress={() => navigation.navigate('Home')} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default NewPassword