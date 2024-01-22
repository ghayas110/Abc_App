import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';



const Steps = ({
    backtoPage,
    totalSteps,
    activeStep,
    backtoPageName
}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const back = async () => {
        navigation.navigate(backtoPageName)
    }
    return (
        <>

            <View style={{
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }}>

                {backtoPage ?
                    <TouchableOpacity onPress={back}
                        style={{
                            position: "absolute",
                            left: width * 0.10
                        }}
                    >
                        <Image source={require('../screens/verify-personal/images/Icons.png')} />
                    </TouchableOpacity>
                    : null
                }

                {/* STEPS =========================== */}
                <View style={{
                    width: width * 0.5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>

                    <Image
                        source={require('../screens/verify-personal/images/Profile.png')}
                    />
                    <View>
                        <Text style={{ ...style.simple_txt, marginBottom: 5, fontFamily: "Poppins-Regular" }}>Step {activeStep} of {totalSteps}</Text>
                        <Image
                            source={require('../screens/verify-personal/images/steps.png')}
                        />
                    </View>
                    <Image
                        source={require('../screens/verify-personal/images/Setting.png')}
                    />
                </View>
            </View>
        </>
    )
}

export default Steps