import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput } from '../../components/Inputs'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import CongratesImage from '../../assets/StartLoginImages/CongratsImage.png'
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';


const StartLoginStep6 = ({ disabled }) => {
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
        navigation.navigate('UpdateTermAndCondition');
    };




    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image source={CongratesImage} />
                </View>
                <View style={{ padding: 5, marginTop: 25, }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }}>
                        Congratulations! Your SSSSCO account is now registered on this device
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20, }}>
                <RequestButton text='Go to Home' onPress={ForWordnavigation} />
            </View>
        </>

    )
}

export default StartLoginStep6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "Space-evently",
        justifyContent:"center",
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