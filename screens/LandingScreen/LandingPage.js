import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LandingLogo from '../../assets/LandingScreen/LandingLogo.png'


const SplashScreen = () => {
    const navigation = useNavigation()



    return (
        <>
            <View style={styles.Container}>
                <View style={styles.Logos}>
                    <Image source={LandingLogo} style={styles.image1} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btnLogin}>
                    <Button title="Login" onPress={() => navigation.navigate('Landing2')}  />
                </View>
                <View style={styles.btnLogin2}>
                    <Button title="Sign Up"   />
                </View>
            </View>
        </>
    )
}

export default SplashScreen

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
    },
    btnContainer: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        marginBottom: 15,

    }, 
    btnLogin2 :{
        marginTop:10,
    }










})