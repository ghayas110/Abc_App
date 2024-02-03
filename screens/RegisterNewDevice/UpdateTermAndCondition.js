import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import Modal from 'react-native-modal';
import Imagess from '../../assets/registerNewDeviceImage/Icons.png'
import ThemeSty from '../../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';


const UpdateTermAndCondition = ({ onLogin }) => {
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






    return (
        <>
            <View style={styles.container}>

                <View style={{ padding: 5, marginTop: 25, }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }}>
                        Updated terms & conditions
                    </Text>
                </View>
                <View style={{ padding: 5, marginTop: 15, }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
                        We have updated our terms & conditions, please read and understand before proceeding
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={{ ...ThemeSty.green_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, marginTop: 5 }}>
                        <Image source={Imagess} />
                        <Text style={{
                            ...ThemeSty.Green_color_f, fontSize: 16, marginLeft: 5,
                        }}>General Terms & Conditions</Text>
                    </View>
                    <View style={{ ...ThemeSty.green_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, marginTop: 5 }}>
                        <Image source={Imagess} />
                        <Text style={{
                            ...ThemeSty.Green_color_f, fontSize: 16, marginLeft: 5,
                        }}>Debit Card-i Product Disclosure Sheet</Text>
                    </View>
                    <View style={{ ...ThemeSty.gray_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, marginTop: 5 }}>
                        <Image source={Imagess} />
                        <Text style={{
                            ...ThemeSty.Green_color_f, fontSize: 16, marginLeft: 5,
                        }}>Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "flex-start", padding: 10, }}>
                        <CheckBoxInput name="text-document" color={"#00a200"} />
                        <Text style={{ ...ThemeSty.ligth_gray_border_Color, fontSize: 16, marginLeft: 5, }}>I have read and accepted ALL the updated documents above.</Text>
                    </View>
                </View>

            </View>
            <View style={{ padding: 16 }}>
                <View style={{ padding: 20, ...ThemeSty.bg_light_green_color, borderRadius: 10 }}>
                    <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>Please call our Customer Support if you have any questions at 1800 81 9149.</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20, }}>
                <RequestButton text='Confirm' onPress={() => onLogin()} />
            </View>
        </>

    )
}

export default UpdateTermAndCondition

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "Space-evently",
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