import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView, Button } from 'react-native'
import style from '../../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import ActivationSteps from '../../../components/steps/ActivationSteps';
import { OutlineButton, RequestButton } from '../../../components/Buttons';
import Steps from '../../../components/steps/Steps';
import { FilePicker } from '../../../components/Inputs';

// const UploadPdf = () => {
//     const navigation = useNavigation()

//     return (

//     )
// }

// export default UploadPdf

const UploadPdf = () => {
    const navigation = useNavigation()
  return (
 
    <>
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        paddingTop: 30
    }}>
         <Steps
            backtoPage={false}
            totalSteps={"1"}
            activeStep={"1"}
            backIcon={require('../../verify-personal/images/Icons.png')}
            leftIcon={require('../../../assets/Finance/activeStep2.png')}
            rightIcon={require('../../../assets/Finance/aproval.png')}
            ProgressBarIcon={require('../../verify-personal/images/steps.png')}
        />
        <View style={{ flex: 1,marginTop:20 }}>
            <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 30 }}>We need some documents from you</Text>
            <Text style={{ ...style.Font_family, ...style.gray_color_h }}>Please only upload .pdf files</Text>
            <View style={{marginTop:20}}>
                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 20}}>Latest 2 year EPF full statements</Text>
                <Text style={{ ...style.Font_family, ...style.gray_color_h }}>Showing at least the last 12 months of {'\n'} contribution history</Text>
            </View>

            <FilePicker 
                icon={require("../../../assets/Finance/upload.png")} 
                text={"Upload"}
                fileStyleView={{
                    marginTop: 40
                }}
            />
            <View style={{
                ...style.bg_light_green_color,
                padding: 20,
                marginTop: 20
            }}>
                <Text style={{
                    ...style.Font_family,
                    color: "#006400",
                    fontSize: 15
                }}>Note: You will need to provide the digital PDF statements downloaded directly from your bank portal or LHDN or KWSP website. Scanned statements are not accepted.</Text>
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20
            }}>
                <Image source={require("../../../assets/Finance/info.png")} style={{marginRight: 10,height: 30,width: 30}}/>
                <Text style={{...style.Font_family_Bold,...style.Green_color_h,fontSize: 20}}>How to upload?</Text>
            </TouchableOpacity>
            <RequestButton btnStyle={{
                width: "auto"
            }} text={"Continue"} onPress={() => { navigation.navigate("DocsInfo") }} />
        </View> 
    </SafeAreaView>
</>
  )
}

export default UploadPdf

const styles = StyleSheet.create({})