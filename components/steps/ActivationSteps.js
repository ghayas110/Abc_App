import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"

const ActivationSteps = ({
    verticalLineImage,
    image_a,
    text_a,
    image_b,
    text_b,
    image_c,
    text_c,
    image_d,
    text_d,
}) => {
    return (
        <>

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
                    <Image source={image_a} />
                    <Image style={{ position: "relative", top: -15, left: 45 }} source={verticalLineImage} />
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_a}</Text>
                </View>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Image source={image_b} />
                    <Image style={{ position: "relative", top: -15, left: 45 }} source={verticalLineImage} />
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_b}</Text>
                </View>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Image source={image_c} />
                    <Image style={{ position: "relative", top: -15, left: 45 }} source={verticalLineImage} />
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_c}</Text>
                </View>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image source={image_d} />
                    <Text style={{ color: "gray", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_d}</Text>
                </View>
            </View>
        </>
    )
}

export default ActivationSteps