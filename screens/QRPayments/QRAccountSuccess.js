import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { OutlineButton, RequestButton } from '../../components/Buttons';


const QRAccountSuccess = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('CreateUserName')
    }

    return (
        <>
            <View style={{
                ...style.basic_container,
                height: height,
                backgroundColor: "white",
            }}>
                <View style={{
                    ...style.basic_container,
                    height: height,
                    paddingRight: 20,
                    paddingLeft: 20,
                    position: "relative"
                }}>
                    <View style={{
                        marginTop: 80,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <Image source={require('../../assets/QRPayment/success.png')} />
                    </View>
                    <Text style={{
                        ...style.Green_color_h,
                        marginTop: 20,
                        fontSize: 25,
                        fontFamily: "Poppins-Bold"
                    }}>Universal QR set up is successful</Text>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 15,
                        padding: 0,
                        fontFamily: "Poppins-Regular",
                       color:'black',
                       fontWeight:'700'
                    }}>Reference ID</Text>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 15,
                        padding: 0,
                        fontFamily: "Poppins-Regular",
                        ...style.gray_color_h
                    }}>12132242535</Text>
                    </View>
                
                    <RequestButton text={"Make QR Payments"} onPress={() => navigation.navigate('QRScan')}
                        btnStyle={{ position: "absolute", bottom: 50 }}
                    />
                </View>
            </View>
        </>
    )
}

export default QRAccountSuccess