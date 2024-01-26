import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Header from './components/Header'
import Avatar from './components/Avatar'
import { useNavigation } from '@react-navigation/native'

const SettingServices = () => {
    const navigation = useNavigation();
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
        if(text == "Pay & Transfer Settings"){
            navigation.navigate('PayTransfer')
        }
    }

    const renderItemTwo = ({ item }) => (
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
    );
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
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default SettingServices