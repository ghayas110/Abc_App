import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, ToastAndroid, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import { OutlineButton, RequestButton } from '../../components/Buttons'
import Modal from 'react-native-modal';


const DeRegister = ({onLogin}) => {
    const navigation = useNavigation()
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const goto = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
        // setTimeout(() => {
        //     navigation.navigate('Privacy')
        // }, 2000);
    }
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };


    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 30
            }}>
                <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ ...style.Green_color_h, ...style.Font_family_Bold, fontSize: 30 }}>Manage your device</Text>
                        <Text style={{ ...style.gray_color_h, ...style.Font_family, fontSize: 18 }}>Your Smart Bank account is linked to the following device</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>Device model</Text>
                            <Text style={{ ...style.Font_family, ...style.gray_color_h, textTransform: "capitalize", fontSize: 18 }}>samsung</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 18 }}>Registered on</Text>
                            <Text style={{ ...style.Font_family, ...style.gray_color_h, textTransform: "capitalize", fontSize: 18 }}>12/02/2022</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    <View style={{
                        ...style.bg_light_green_color,
                        padding: 20,
                        marginBottom: 20
                    }}>
                        <Text style={{ ...style.Font_family, ...style.Green_color_primary, fontSize: 15 }}>You may only link your Smart Bank account to one device at any given time.</Text>
                        <Text style={{ ...style.Font_family, ...style.Green_color_primary, marginTop: 20, fontSize: 15 }}>If you wish to switch devices, you may de-register this device first.</Text>
                    </View>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} buttonsty={{ backgroundColor: "#f04438" }} text={"De-register this device"} onPress={() => goto()} />
                </View>

                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'white', padding: 24, borderRadius: 20, margin: 20 }}>
                            <View>
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, textAlign: "center", fontSize: 25 }}>Are you sure you want to de-register your device?</Text>
                                <Text style={{ ...style.Font_family, ...style.gray_color_h, textAlign: "center", fontSize: 17, marginTop: 15 }}>You will be logged out of your Smart Bank account on this device if you wish to de-register.</Text>
                                <View style={{marginTop: 20}}>
                                    <OutlineButton btnStyle={{ width: "auto" }} text='Cancel' onPress={()=> {setBottomSheetVisible(false)}}/>
                                    <RequestButton btnStyle={{ width: "auto",marginTop:15 }} onPress={onLogin} text='Confirm' />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>

        </>
    )
}

export default DeRegister