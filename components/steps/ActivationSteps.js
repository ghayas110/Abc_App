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
    cards,
    imagePosition

}) => {
    return (
        <>

            <View style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30
            }}>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Image source={image_a} />
                    <Image style={{ position: "relative", top: -15, left: 45, ...imagePosition }} source={verticalLineImage} />
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12,marginTop:5 }}>{text_a}</Text>
                </View>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Image source={image_b} />
                    <Image style={{ position: "relative", top: -15, left: 45, ...imagePosition }} source={verticalLineImage} />
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_b}</Text>
                </View>
                <View style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Image source={image_c} />
                    {cards!=3?
                    <Image style={{ position: "relative", top: -15, left: 45, ...imagePosition }} source={verticalLineImage} />:null}
                    <Text style={{ color: "black", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_c}</Text>
                </View>
                {
                    cards?.lenght > 3 ?
                    <View style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={image_d} />
                        <Text style={{ color: "gray", fontFamily: "Poppins-Regular", textAlign: "center", fontSize: 12 }}>{text_d}</Text>
                    </View> : null
                }
            </View>
        </>
    )
}

export default ActivationSteps