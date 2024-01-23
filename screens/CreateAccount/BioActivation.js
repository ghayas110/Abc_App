import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/Illustration.png'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import ThemeSty from "../../assets/styles/basic"

const BioActivation = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('HowSearch')
    }
    return (
        <View style={styles.container}>
            <View style={styles.Progress}>
                <View></View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icons.AntDesign name='setting' style={{ fontSize: 24, marginRight: 5, color: "#0038A4" }} />
                    <View>
                        <Text>step 4 to 6 </Text>
                        <ProgressBar progress={progress} width={80} />
                    </View>
                    <Icons.Entypo name='wallet' style={{ fontSize: 24, marginLeft: 5, }} />
                </View>
                <View></View>
            </View>
            <View style={styles.Image}>
                <View>
                    <Image source={Biomatric} />
                </View>
            </View>
            <View style={styles.headerText}>
                <Text style={{  fontSize: 28, fontWeight: "700",  ...ThemeSty.Font_family , ...ThemeSty.Green_color_f }}>
                    Activate biometric login
                </Text>
            </View>
            <View style={styles.headerText}>
                <Text style={{ fontSize: 16, fontWeight: "700", ...ThemeSty.gray_color_f , ...ThemeSty.Font_family }}>
                    Log in to Rize securely with facial / fingerprint recognition
                </Text>
            </View>
            <View style={{...styles.Notify , ...ThemeSty.bg_light_green_color}}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, fontWeight: "700", ...ThemeSty.Font_family }}>
                    You can change this later in Settings.
                </Text>
            </View>
            <View >
                <View style={styles.btn1}>
                    <OutlineButton text={'Activation  later'} />
                </View>
                <View style={styles.btn2}>
                    <RequestButton text={'Enable'} onPress={ForWordnavigation} />
                </View>
            </View>
        </View>
    )
}

export default BioActivation

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        justifyContent:"space-evenly"
    },
    Progress: {
        padding: 15,
        justifyContent: 'center',
        flexDirection: "row",
    },
    Image: {
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',

    },
    headerText: {
        padding: 10,
        marginTop: 15,
    },
    Notify: {
        padding: 20,
        // backgroundColor: "#DCF2FC",
    },
    btn2: {
        alignItems: "center"
    },
    btn1: {
        alignItems: "center"
    }

})