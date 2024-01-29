import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native';



const Steps = ({
    // backtoPageName
    totalSteps,
    activeStep,
    backtoPage,
    backIcon,
    leftIcon,
    rightIcon,
    ProgressBarIcon,
}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <>

            <View style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }}>

                {backtoPage ?
                    <TouchableOpacity onPress={goBack}
                        style={{
                            position: "absolute",
                            left: width * 0.10
                        }}
                    >
                        <Image source={backIcon} />
                    </TouchableOpacity>
                    : null
                }

                <View style={{
                    width: width * 0.5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>

                    <Image
                        source={leftIcon}
                    />
                    <View>
                        <Text style={{ ...style.simple_txt, marginBottom: 5, fontFamily: "Poppins-Regular" }}>Step {activeStep} of {totalSteps}</Text>
                        <Image
                            source={ProgressBarIcon}
                        />
                    </View>
                    <Image
                        source={rightIcon}
                    />
                </View>
            </View>
        </>
    )
}

export default Steps