import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RequestButton, OutlineButton } from '../../components/Buttons'
import LandingLogo from '../../assets/LandingScreen/SssscoLandingLgo-01.png'


const LandingPage = () => {
    const navigation = useNavigation()

    
    const handleNavigation = () => {
        navigation.navigate('Landing2');
    };

    return (
        <>
            <View style={styles.Container}>
                <View style={styles.Logos}>
                    <Image source={LandingLogo} style={styles.image1} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btnLogin}>
                    <OutlineButton text="Login"/>
                </View>
                <TouchableOpacity style={styles.btnLogin2}>
                    <RequestButton text="Sign Up" onPress={handleNavigation} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    Logos: {
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    image1: {
        resizeMode: 'contain',
        width:200,
        height:200,
    },
    btnContainer: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        
        backgroundColor: "#FFFFFF",
        // justifyContent: "space-between",
        marginBottom: 15,
        alignItems:"center",
        height: 100,
    }, 
    btnLogin2 :{
        marginTop:10,
    }










})