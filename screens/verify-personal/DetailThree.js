import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';



const DetailThree = () => {
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
                position: "relative",
                backgroundColor: "white"
            }}>
                <View style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}>
                    <Image style={{
                        position: "absolute",
                        left: width * 0.10
                    }}
                        source={require('./images/Icons.png')}
                    />
                    {/* STEPS =========================== */}
                    <View style={{
                        width: width * 0.5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>

                        <Image
                            source={require('./images/Profile.png')}
                        />
                        <View>
                            <Text style={{ ...style.simple_txt, marginBottom: 5 }}>Step 3 of 4</Text>
                            <Image
                                source={require('./images/steps.png')}
                            />
                        </View>
                        <Image
                            source={require('./images/Setting.png')}
                        />
                    </View>
                </View>

                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                    <Text style={{ ...style.gray_color_f, marginTop: 10, fontSize: 19 }}>I plan to use Rize for...</Text>
                    <CheckBoxInput text={"Daily spending"} color={"#00a200"}/>
                    <CheckBoxInput text={"Saving"}  color={"#00a200"}/>
                    <CheckBoxInput text={"Financing"} color={"#00a200"} />
                    <CheckBoxInput text={"Other"} color={"#00a200"} />
                </View>
                <RequestButton text={"Next"} onPress={() => nextPage()}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />
            </View>
        </>
    )
}

export default DetailThree