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


const StartLoginStep2 = ({ disabled }) => {
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
        navigation.navigate('StartLoginStep3');
    };
    const blacknavigation = () => {
        navigation.navigate('StartLogin');
    };




    return (
        <>
            <View style={styles.container}>
                <View style={styles.Progress}>
                    <View style={styles.BackArrow}>
                        <Icons.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} onPress={blacknavigation} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={Logo} style={styles.Image} />
                    </View>
                    <View></View>
                </View>
                <View style={{
                    padding: 5, marginTop: 25,
                }}>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ ...ThemeSty.black_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700' }}>Hi</Text>
                    <Text style={{ ...ThemeSty.Green_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700', marginLeft: 5 }}>Abdur Rehman,</Text>
                </View>

                <View style={{ marginTop: 5 }}>
                    <Text style={{ ...ThemeSty.black_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700' }}>your secure word is </Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={{ ...ThemeSty.orenge_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700' }}>MEER712</Text>
                </View>

            </View>
            <View style={{ padding: 16, backgroundColor: "#FFFFFF", flex: 1, justifyContent: "flex-end" }}>
                <View style={{ padding: 20, ...ThemeSty.bg_light_green_color, borderRadius:10 }}>
                    <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>If your secure word is correct, tap ‘Confirm’.</Text>
                </View>
                <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" , marginTop: 10,
                 }}>
                    <RequestButton text='Confirm' onPress={ForWordnavigation} />
                </View>
            </View>
        </>

    )
}

export default StartLoginStep2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "Space-evently",
        backgroundColor: "#FFFFFF"

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