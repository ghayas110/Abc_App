import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Steps from '../../components/steps/Steps';



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
                <Steps
                    backtoPage={true}
                    totalSteps={"4"}
                    activeStep={"3"}
                    backIcon={require('./images/Icons.png')}
                    leftIcon={require('./images/Profile.png')}
                    rightIcon={require('./images/Setting.png')}
                    ProgressBarIcon={require('./images/steps.png')}
                />
                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>What would you be {'\n'} using Smart star for?</Text>
                    <Text style={{ ...style.gray_color_f, marginTop: 10, fontSize: 19, fontFamily: "Poppins-Regular" }}>I plan to use Smart star for...</Text>
                    <CheckBoxInput textStyle={{color: "black", fontSize: 17, marginLeft: 10 }} text={"Daily spending"} color={"#00a200"} />
                    <CheckBoxInput textStyle={{color: "black", fontSize: 17, marginLeft: 10 }} text={"Saving"} color={"#00a200"} />
                    <CheckBoxInput textStyle={{color: "black", fontSize: 17, marginLeft: 10 }} text={"Financing"} color={"#00a200"} />
                    <CheckBoxInput textStyle={{color: "black", fontSize: 17, marginLeft: 10 }} text={"Other"} color={"#00a200"} />
                </View>
                <RequestButton text={"Confirm"} onPress={() => nextPage()}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />
            </View>
        </>
    )
}

export default DetailThree