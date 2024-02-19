import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import Logo from '../../assets/LandingScreen/SssscoLandingLgo-01.png'
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';
import LoginImage from '../../assets/StartLoginImages/loginImage.png'
import LottieView from 'lottie-react-native'

const StartLoginStep4 = ({ disabled }) => {
    const [progress, setProgress] = useState(0);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const toggleBottomSheet2 = () => {
        setBottomSheetVisible2(!isBottomSheetVisible2);
    };

    const navigation = useNavigation();

    const ForWordnavigation = () => {
        navigation.navigate('StartLoginStep5');
    };
    const backnavigation = () => {
        navigation.navigate('StartLoginStep4');
    };




    return (
        <>
            <View style={styles.container}>
            <View style={styles.Progress}>
                    <View style={styles.BackArrow}>
                        <Icons.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} onPress={backnavigation} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={Logo} style={styles.Image} />
                    </View>
                </View>
                        <LottieView source={require('../../assets/lotiefiles/switching_devices_animation.json')} autoPlay style={{width:"100%",height:200}} />
             
                <View style={{ padding: 5, marginTop: 25, }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family, lineHeight: 34 }}>
                        Switching devices? Please confirm
                    </Text>
                </View>
                <View style={{ padding: 5, marginTop: 15, }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
                        You are currently registered to ‘Device Name’
                    </Text>
                </View>
            </View>
            <View style={{ padding: 16,  justifyContent: "flex-end", backgroundColor: "#FFFFFF" }}>
                <View style={{ padding: 20, ...ThemeSty.bg_light_green_color, borderRadius:10 }}>
                    <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>You may only link your SSSCO account to one device at any given time. Tap ‘Confirm’ to de-register your previous device.</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 10,
                 }}>
                    <RequestButton text='Confirm' onPress={ForWordnavigation} />
                </View>
            </View>
        </>

    )
}

export default StartLoginStep4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "Space-evently",
        // justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",

    },
    Progress: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
    },

    Image: {
        width: 180,
        height: 50
    },
    inputContainer: {
        borderBottomWidth: 2,
        borderColor: "#00A200",
        marginTop: 10,
    },


    CheckIcon: {
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Poppins',
        fontWeight: "500"
    },

    BackArrowIcon: {
        color: "#00A200",
        fontSize: 16,
        position: 'relative',
        right: 50,
    },
    ForgotPassword: {
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    }

})