import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';
import ActivationSteps from '../../components/steps/ActivationSteps';


const VerifyingDetails = () => {
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
                        <Image source={require('./images/person.png')} />
                    </View>
                    <Text style={{
                        ...style.Green_color_h,
                        marginTop: 20,
                        fontSize: 25,
                        fontFamily: "Poppins-Bold"
                    }}>We’re verifying  your {'\n'} details</Text>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 15,
                        padding: 0,
                        fontFamily: "Poppins-Regular",
                        ...style.gray_color_h
                    }}>While that’s happening, let’s create  your  {'\n'} account</Text>
                    <ActivationSteps 
                        verticalLineImage={require('./images/line.png')}
                        image_a={require('./images/checkbox.png')}
                        text_a={`Sign up & ID ${'\n'} verification`}
                        image_b={require('./images/checkbox.png')}
                        text_b={`Personal ${'\n'} details`}
                        image_c={require('./images/setting-blue-color.png')}
                        text_c={`Create ${'\n'} an accounts`}
                        image_d={require('./images/Wallet.png')}
                        text_d={`Top up ${'\n'} account`}
                    />
                    <RequestButton text={"Create my account"} onPress={() => nextPage()}
                        btnStyle={{ position: "absolute", bottom: 50 }}
                    />
                </View>
            </View>
        </>
    )
}

export default VerifyingDetails