import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';


const VerifyingDetails = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('ReviewDetails')
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
                        fontWeight: "600",
                    }}>We’re verifying  your details</Text>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 18,
                        padding: 0
                    }}>While that’s happening, let’s create {'\n'} your account</Text>

                    <View style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        marginTop: 30
                    }}>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Image source={require('./images/checkbox.png')} />
                            <Image style={{position:"relative",top: -15,left: 45}} source={require('./images/line.png')} />
                            <Text style={{fontWeight: "600",textAlign: "center"}}>Sign up & ID {'\n'} verification</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Image source={require('./images/checkbox.png')} />
                            <Image style={{position:"relative",top: -15,left: 45}} source={require('./images/line.png')} />
                            <Text style={{fontWeight: "600",textAlign: "center"}}>Personal {'\n'} details</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Image source={require('./images/setting-blue-color.png')} />
                            <Image style={{position:"relative",top: -15,left: 45}} source={require('./images/line.png')} />
                            <Text style={{fontWeight: "600",textAlign: "center"}}>Create {'\n'} an accounts</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent:"center"
                        }}>
                            <Image source={require('./images/Wallet.png')} />
                            <Text style={{fontWeight: "600",textAlign: "center"}}>Top up {'\n'} account</Text>
                        </View>
                    </View>
                    <RequestButton text={"Create my account"} onPress={() => nextPage()}
                        btnStyle={{ position: "absolute", bottom: 50 }}
                    />
                </View>
            </View>
        </>
    )
}

export default VerifyingDetails