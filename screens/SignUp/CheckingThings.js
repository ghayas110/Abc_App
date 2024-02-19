import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';
import ActivationSteps from '../../components/steps/ActivationSteps';
import ActivationSteps2 from '../../components/steps/ActivationSteps2';


const CheckingThings = ({onPress}) => {
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
                        <Image 
   source={require('../../assets/SignUp/clock1.png')} // replace with your image path
 />
                    </View>
                    <Text style={{
                        ...style.Green_color_h,
                        marginTop: 20,
                        fontSize: 28,
                        fontFamily: "Poppins-Bold"
                    }}>We're checking on a {'\n'}few things </Text>
                    <ActivationSteps2
                    verticalLineImage={require('../../assets/SignUp/line.png')}
                    image_a={require('../../assets/SignUp/Tick1.png')}
                    text_a={`Sign up & ID ${'\n'} verification`}
                    image_b={require('../../assets/SignUp/personal1.png')}
                    text_b={`Personal ${'\n'} details`}
                    image_c={require('../../assets/SignUp/setings.png')}
                    text_c={`Create ${'\n'} an accounts`}
                    image_d={require('../../assets/SignUp/wallet.png')}
                    text_d={`Top up ${'\n'} account`}
                    
                />
               
                
                    <RequestButton text={"Let's Continue"} onPress={onPress}
                        btnStyle={{ position: "absolute", bottom: 50 }}
                    />
                </View>
            </View>
        </>
    )
}

export default CheckingThings
