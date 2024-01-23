import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import Logo from '../../assets/LandingScreen/SssscoLandingLgo-01.png'
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';


const StartLoginStep5 = ({ disabled }) => {
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
        navigation.navigate('StartLoginStep6');
    };




    return (
        <>
            <View style={styles.container}>
                <View style={styles.Progress}>
                    <View style={styles.BackArrow}>
                        <Icons.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={Logo} style={styles.Image} />
                    </View>
                    <View></View>
                </View>
                <View style={{ padding: 5, marginTop: 25, }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }}>
                        Enter your One-Time Password (OTP)
                    </Text>
                </View>
                <View style={{ padding: 5, marginTop: 15, }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
                        We have sent your one time password to ‘+60XXXXX1234’
                    </Text>
                </View>
                <OtpInput />

            </View>
            <View style={{ padding: 5, marginTop: 15, alignItems:"center" }}>
                <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
                    Your one time password expires in
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.orenge_color_f, ...ThemeSty.Font_family }}>
                  01:42
                </Text>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20, }}>
                <RequestButton text='Confirm' onPress={ForWordnavigation} />
            </View>
        </>

    )
}

export default StartLoginStep5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "Space-evently",
        // justifyContent:"center",
        alignItems: "center",

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