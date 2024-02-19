import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';
import ActivationSteps from '../../components/steps/ActivationSteps';
import LottieView from 'lottie-react-native';
import ActivationSteps2 from '../../components/steps/ActivationSteps2';


const MainSignUp = () => {
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
                 <LottieView source={require('../../assets/lotiefiles/hand_animation.json')} autoPlay style={{width:"100%",height:200}} />

                    </View>
                    <Text style={{
                        ...style.Green_color_h,
                        marginTop: 20,
                        fontSize: 25,
                        fontFamily: "Poppins-Bold"
                    }}>Great! You’re one step closer. </Text>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 15,
                        padding: 0,
                        fontFamily: "Poppins-Regular",
                        ...style.gray_color_h
                    }}>This won’t take long. Please have your Emirates ID ready</Text>
                    <ActivationSteps2
                    verticalLineImage={require('../../assets/SignUp/line.png')}
                    image_a={require('../../assets/SignUp/paper.png')}
                    text_a={`Sign up & ID ${'\n'} verification`}
                    image_b={require('../../assets/SignUp/user.png')}
                    text_b={`Personal ${'\n'} details`}
                    image_c={require('../../assets/SignUp/setings.png')}
                    text_c={`Create ${'\n'} an accounts`}
                    image_d={require('../../assets/SignUp/wallet.png')}
                    text_d={`Top up ${'\n'} account`}
                />
               
                
                    <RequestButton text={"Sign Up Now"} onPress={() => navigation.navigate('SignUp')}
                        btnStyle={{ position: "absolute", bottom: 50 }}
                    />
                </View>
            </View>
        </>
    )
}

export default MainSignUp
