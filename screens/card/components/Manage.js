import React, { useState, useEffect } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, ToastAndroid, View, FlatList, ScrollView, Switch } from 'react-native'
import style from "../../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal';
import { OutlineButton, RequestButton } from '../../../components/Buttons';

const Manage = () => {
    const navigation = useNavigation()
    const [isEnabledOne, setIsEnabledOne] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const toggleBottomSheet2 = () => {
        setBottomSheetVisible2(!isBottomSheetVisible2);
    };
    const toggleSwitchOne = () => {
        setIsEnabledOne(previousState => !previousState)
    }
    
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);
    const next = () => {
        navigation.navigate("ChangePin");
    };

    useEffect(() => {
        if (isEnabledOne == true) {
            ToastAndroid.show(
                'Freeze',
                ToastAndroid.SHORT,
            );
        } else {
            ToastAndroid.show(
                'Unfreeze',
                ToastAndroid.SHORT,
            );
        }
    }, [isEnabledOne])

    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 10
            }}>
                <ScrollView>
                    <TouchableOpacity onPress={next}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/keys.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Change card PIN</Text>
                            </View>
                            <Image source={require("../../../assets/cardImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/alert.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Report and replace card</Text>
                            </View>
                            <Image source={require("../../../assets/cardImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleBottomSheet}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/list.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Report</Text>
                            </View>
                            <Image source={require("../../../assets/cardImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/cool.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Temporarily freeze card</Text>
                            </View>
                            <Switch trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledOne ? '#00a200' : '#cccccc'} onValueChange={toggleSwitchOne} style={{ alignItems: "flex-end" }} value={isEnabledOne} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 20
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/block.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Kill Switch</Text>
                            </View>
                            <Switch trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledTwo ? '#00a200' : '#cccccc'} onValueChange={toggleSwitchTwo} value={isEnabledTwo} />
                        </View>
                    </TouchableOpacity>
                    <Modal
                        isVisible={isBottomSheetVisible}
                        style={{ margin: 0 }}
                        onBackdropPress={toggleBottomSheet}
                    >
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                                <View>
                                    <Text style={{ fontSize: 28, fontWeight: '700', ...style.Green_color_f, ...style.Font_family }} >How can we help?</Text>
                                </View>
                                <View style={{ padding: 15 }}>
                                    <Text style={{ ...style.gray_color_f, ...style.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
                                        Alternatively you may email us at:
                                        bank@ssssco.com
                                        We’ll get this sorted!</Text>
                                </View>
                                <View style={{ padding: 20, ...style.bg_light_green_color }}>
                                    <Text style={{ ...style.Green_color_f, fontSize: 14, ...style.Font_family, fontWeight: '500', }}>Customer Support: +6016 299 5333 (fraud support line 24/7) or email to us at:  bank@ssssco.com</Text>
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
                                    <OutlineButton text='call +165464661' onPress={toggleBottomSheet2}/>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <RequestButton text='Cancel' onPress={toggleBottomSheet2} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Manage