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


const StartLoginStep3 = ({ disabled }) => {
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
        navigation.navigate('StartLoginStep4');
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
                {/* <View style={{
                    padding: 5, marginTop: 25,
                }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }}>Welcome back. Great to see you!</Text>
                </View> */}
                <View style={{flexDirection:"row" , alignItems:"center"}}>
                   <Text style={{...ThemeSty.black_color_f , fontSize:24, ...ThemeSty.Font_family , fontWeight:'700'}}>Hi</Text>
                    <Text style={{ ...ThemeSty.Green_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700',marginLeft:5 }}>Abdur Rehman,</Text>
                  </View>

                <View style={{marginTop:5}}>
                    <Text style={{ ...ThemeSty.black_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700' }}>your secure word is </Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={{ ...ThemeSty.orenge_color_f, fontSize: 24, ...ThemeSty.Font_family, fontWeight: '700' }}>MEER712</Text>
                </View>
                <View style={styles.inputContainer}>
                    <SimpleInput
                        label={'Password'}
                        placeholder={'Enter Password'}
                        placeholderTextColor={ "grey" }
                        type={'password'}
                       pass={true}
                        inputstyle={{ fontSize: 20, fontWeight: "600", color:'black', ...ThemeSty.Font_family }}
                    />
                    
                </View>
                <View style={styles.ForgotPassword}>
                    <Text style={{ ...ThemeSty.Green_color_f, ...ThemeSty.Font_family, fontWeight: "700", fontSize: 16 }}>Forgot Password?</Text>
                    <Text style={{ ...ThemeSty.Green_color_f, ...ThemeSty.Font_family, fontWeight: "700", fontSize: 16 }} onPress={toggleBottomSheet}>Help</Text>
                </View>

                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                            <View>
                                <Text style={{ fontSize: 28, fontWeight: '700', ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }} >How can we help?</Text>
                            </View>
                            <View style={{ padding: 15 }}>
                                <Text style={{ ...ThemeSty.gray_color_f, ...ThemeSty.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
                                    Alternatively you may email us at:
                                    Bank@SSSCO.com
                                    We’ll get this sorted!</Text>
                            </View>
                            <View style={{ padding: 20, ...ThemeSty.bg_light_green_color }}>
                                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>Customer Support: +6016 299 5333 (fraud support line 24/7) or email to us at: Bank@SSSCO.com</Text>
                            </View>
                            <View style={{ padding: 10, alignItems: "center" }}>
                                <OutlineButton text='Report Fraud' onPress={toggleBottomSheet2} />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <RequestButton text='Give us call' onPress={toggleBottomSheet2} />
                            </View>

                        </View>
                    </View>
                </Modal>
                <Modal
                    isVisible={isBottomSheetVisible2}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet2}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'transparent', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                            <View style={{ padding: 10, alignItems: "center" }}>
                            <OutlineButton onPress={() => Linking.openURL(`tel:${'+73365596220'}`)} text='call +7336 559 6220' />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <RequestButton text='Cancel' onPress={toggleBottomSheet2}/>
                            </View>

                        </View>
                    </View>
                </Modal>
            
            </View>
            
            <View style={{ alignItems: "center", marginBottom: 20, }}>
                <RequestButton text='Login' onPress={ForWordnavigation} />
            </View>
        </>

    )
}

export default StartLoginStep3

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