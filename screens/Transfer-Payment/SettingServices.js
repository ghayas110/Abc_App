import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Header from './components/Header'
import Avatar from './components/Avatar'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal';
import { OutlineButton, RequestButton } from '../../components/Buttons'


const SettingServices = () => {
    const navigation = useNavigation();
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)
    const dataOne = [
        {
            id: '1',
            imageLeft: require('../../assets/transferPaymentImages/Profile.png'),
            text: 'Profile',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '2',
            imageLeft: require('../../assets/transferPaymentImages/ShieldDone.png'),
            text: 'Privacy & Security',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '3',
            imageLeft: require('../../assets/transferPaymentImages/wallet.png'),
            text: 'Account & Card',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '4',
            imageLeft: require('../../assets/transferPaymentImages/directions.png'),
            text: 'Pay & Transfer Settings',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '5',
            imageLeft: require('../../assets/transferPaymentImages/messge.png'),
            text: 'Communications preference',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '6',
            imageLeft: require('../../assets/transferPaymentImages/wallet.png'),
            text: 'General Preference',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
    ];
    const dataTwo = [
        {
            id: '1',
            imageLeft: require('../../assets/transferPaymentImages/marked.png'),
            text: 'FAQ',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '2',
            imageLeft: require('../../assets/transferPaymentImages/phone.png'),
            text: 'Contact Us',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '3',
            imageLeft: require('../../assets/transferPaymentImages/list.png'),
            text: 'Important Documents',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
    ];

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const toggleBottomSheet2 = () => {
        setBottomSheetVisible2(!isBottomSheetVisible2);
    };

    const renderItemOne = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item?.text)}>
            <View style={{
                flex: 1,
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
                    <Image source={item.imageLeft} style={{ marginRight: 20 }} />
                    <Text style={{ ...style.Font_family, ...style.black_color_h }}>{item.text}</Text>
                </View>
                <Image source={item.imageRight} />
            </View>
        </TouchableOpacity>
    );

    const handleItemClick = (text) => {
        if (text == "Pay & Transfer Settings") {
            navigation.navigate('PayTransfer')
        }else if(text == "Privacy & Security"){navigation.navigate('Privacy')}
        else if(text == "Profile"){navigation.navigate('Profile')}
        else if(text == "Account & Card"){navigation.navigate('CardMangementOne')}
    }

    const renderItemTwo = ({ item }) => (
        <TouchableOpacity onPress={() => gotNextPage(item?.text)}>
            <View style={{
                flex: 1,
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
                    <Image source={item.imageLeft} style={{ marginRight: 20 }} />
                    <Text style={{ ...style.Font_family, ...style.black_color_h }}>{item.text}</Text>
                </View>
                <Image source={item.imageRight} />
            </View>
        </TouchableOpacity>
    );
    const gotNextPage = (text) => {
        if (text == "Contact Us") {
            setBottomSheetVisible(true)
        }else if(text == "Important Documents"){navigation.navigate('ImportantDocs')}
        else if(text == "FAQ"){navigation.navigate('FAQs')}
    }
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <ScrollView>
                    <Header
                        backtoPage={true}
                        title={"Settings & Services"}
                        backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                    />
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#cccccc',
                        marginVertical: 10,
                    }} />
                    <SafeAreaView style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 15,
                        paddingTop: 30
                    }}>
                        <Avatar fullName={"Razak Othman"} shortName={"RO"} />
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#cccccc',
                            marginTop: 40
                        }} />
                        <FlatList
                            data={dataOne}
                            renderItem={renderItemOne}
                            keyExtractor={(item) => item.id}
                        />
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#cccccc',
                            marginTop: 20
                        }} />
                        <FlatList
                            data={dataTwo}
                            renderItem={renderItemTwo}
                            keyExtractor={(item) => item.id}
                        />
                    </SafeAreaView>

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
                                    <Text style={{ ...style.gray_color_f, ...style.Font_family, fontSize: 16 }}>Please reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
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
                                    <OutlineButton text='call +165464661' onPress={toggleBottomSheet2} />
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <RequestButton text='Cancel' onPress={toggleBottomSheet2} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default SettingServices