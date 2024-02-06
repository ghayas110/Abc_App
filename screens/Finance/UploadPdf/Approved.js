import React from 'react'
import { Image, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet, View, Switch, ScrollView, Button } from 'react-native'
import style from '../../../assets/styles/basic';
import { RequestButton } from '../../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Approved = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 0,
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: 50,
                }}>
                <LottieView source={require('../../../assets/lotiefiles/application_approved_animation.json')} autoPlay style={{width:"100%",height:200}} />
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 20 }}>Congratulations! Your application has been approved</Text>
                </View>
                <View>
                    <View style={{
                        backgroundColor: "#f9f9f9",
                        padding: 20,
                        borderRadius: 20,
                        borderColor: "#cccccc",
                        borderWidth: 1
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{...style.Font_family_Bold,...style.black_color_h}}>Amount</Text>
                            <Text style={{...style.Font_family,...style.gray_color_h}}>RM 50,000.00</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{...style.Font_family_Bold,...style.black_color_h}}>Duration</Text>
                            <Text style={{...style.Font_family,...style.gray_color_h}}>36 months (3 years)</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{...style.Font_family_Bold,...style.black_color_h}}>Flat rate</Text>
                            <Text style={{...style.Font_family,...style.gray_color_h}}>5.7% p.a.</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{...style.Font_family_Bold,...style.black_color_h}}>EPR</Text>
                            <Text style={{...style.Font_family,...style.gray_color_h}}>10.58% p.a.</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{...style.Font_family_Bold,...style.black_color_h}}>Monthly instalment</Text>
                            <Text style={{...style.Font_family,...style.gray_color_h}}>RM 1,627.00</Text>
                        </View>
                    </View>
                    <View style={{
                        ...style.bg_light_green_color,
                        padding: 20,
                        marginTop: 20
                    }}>
                        <Text style={{
                            ...style.Font_family,
                            color: "#006400",
                            fontSize: 15
                        }}>We are still working on some final checks. We will get back to you as soon as possible.</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Continue"} onPress={() => {navigation.navigate('Finance') }}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Approved