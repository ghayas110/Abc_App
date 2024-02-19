import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView } from 'react-native'
import style from '../../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import ActivationSteps from '../../../components/steps/ActivationSteps';
import { OutlineButton, RequestButton } from '../../../components/Buttons';
import LottieView from 'lottie-react-native';

const ApplyFinanceScd = () => {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 30
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                <LottieView source={require('../../../assets/lotiefiles/financing_application.json')} autoPlay style={{width:"100%",height:200}} />
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 30
                }}>
                    <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 30 }}>Great! Moving on to the next step</Text>
                    <Text style={{ ...style.Font_family, ...style.gray_color_h, fontSize: 15 }}>Please complete the remaining 2 steps below to get your Rize Personal Financing-i</Text>
                </View>
                <ActivationSteps
                    verticalLineImage={require('../../../assets/Finance/lines.png')}
                    image_a={require('../../../assets/Finance/person.png')}
                    text_a={`Applicannt  ${'\n'}  Details`}
                    image_b={require('../../../assets/Finance/activeStep2.png')}
                    text_b={`Upload ${'\n'} Documents`}
                    image_c={require('../../../assets/Finance/aproval.png')}
                    text_c={`Final ${'\n'} Acceptance`}
                    cards={3}
                    imagePosition={{
                        left: 60
                    }}
                />
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
                    <OutlineButton btnStyle={{
                        width: "auto"
                    }} text={"Go to Financing Center"} />
                    <RequestButton btnStyle={{ 
                        width: "auto"
                    }} text={"Continue"} onPress={() => {navigation.navigate("DocsInfo")}}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ApplyFinanceScd