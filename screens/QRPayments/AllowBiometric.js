import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { OutlineButton, RequestButton } from '../../components/Buttons';
import ActivationSteps from '../../components/steps/ActivationSteps';


const AllowBiometric = () => {
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
                        <Image source={require('../../assets/QRPayment/Bio.png')} />
                    </View>
                    <Text style={{
                        ...style.Green_color_h,
                        marginTop: 20,
                        fontSize: 25,
                        fontFamily: "Poppins-Bold"
                    }}>Let’s set up your Fund-Transfer Biometric pay!</Text>
          
                </View>
                <OutlineButton text={"Maybe Later"} onPress={() => navigation.goBack()}
                btnStyle={{ position: "absolute", bottom: 110 }}
            />
                <RequestButton text={"Activate"} onPress={() => navigation.navigate('OtpQR')}
                    btnStyle={{ position: "absolute", bottom: 60 }}
                />
            </View>
             
        </>
    )
}

export default AllowBiometric