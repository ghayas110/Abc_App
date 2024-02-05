import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { OtpInput, SimpleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton, OutlineButton } from '../../components/Buttons';
import ImageIcon from '../../assets/registerNewDeviceImage/Icons.png'
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';


const BeforeWeBegin = ({ onLogin }) => {
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

            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ padding: 5, marginTop: 25, }}>
                            <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }}>
                                Before we begin...
                            </Text>
                        </View>
                        <View style={{ padding: 5, marginTop: 15, }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
                                We're committed to protecting your data. Reach out to our customer care team if you have any queries
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ ...ThemeSty.ligth_gray_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, padding: 15, }}>
                                <Image source={ImageIcon} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>Personal Financing-i Product Disclosure Sheet</Text>
                            </View>
                            <View style={{ ...ThemeSty.ligth_gray_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, }}>
                                <Image source={ImageIcon} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>Personal Financing-i Terms & Conditions</Text>
                            </View>
                            <View style={{ ...ThemeSty.ligth_gray_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, }}>
                                <Image source={ImageIcon} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>Personal Financing-i Personal Data Protection</Text>
                            </View>
                            <View style={{ ...ThemeSty.ligth_gray_border_Color, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, padding: 15, }}>
                                <Image source={ImageIcon} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>Personal Financing-i Declaration & Authorisation</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", padding: 15, }}>
                                <CheckBoxInput name="text-document" textStyle={{ ...ThemeSty.Light_gray_color_f, fontSize: 16 }} color={"#00a200"} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>I have read and accepted ALL the documents above.</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", padding: 15, }}>
                                <CheckBoxInput name="text-document" textStyle={{ ...ThemeSty.Light_gray_color_f, fontSize: 16 }} color={"#00a200"} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>I also give my consent to undertake credit and background checks.</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", padding: 15,  }}>
                                <CheckBoxInput name="text-document" textStyle={{ ...ThemeSty.Light_gray_color_f, fontSize: 16 }} color={"#00a200"} />
                                <Text style={{ ...ThemeSty.black_color_h, fontSize: 14, marginLeft: 5, ...ThemeSty.Font_family }}>I understand that the amount I declared in my application may differ at payout due to fluctuation of current outstanding balances.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
              
                <View style={{ alignItems: "center", marginBottom: 20, }}>
                    <RequestButton text='Continue' onPress={() => navigation.navigate('ApplyFinance')} />
                </View>
            </SafeAreaView>
        </>

    )
}

export default BeforeWeBegin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
        ...ThemeSty.gray_border_Color,
        // marginTop: 10,
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