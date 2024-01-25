import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import Header from './components/Header';

const PayTransfer = () => {
    const dataOne = [
        {
            id: '1',
            imageLeft: require('../../assets/transferPaymentImages/duitNow.png'),
            text: 'Manage DuitNow ID',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '2',
            imageLeft: require('../../assets/transferPaymentImages/duitNow.png'),
            text: 'Manage DuitNow QR',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
        {
            id: '3',
            imageLeft: require('../../assets/transferPaymentImages/direction2.png'),
            text: 'Manage daily limits',
            imageRight: require('../../assets/transferPaymentImages/right.png'),
        },
    ];

    const renderItemOne = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
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
        // navigation.navigate('DuitNowSuccess')
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
                        title={"Pay & Transfer Settings"}
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
                        <FlatList
                            data={dataOne}
                            renderItem={renderItemOne}
                            keyExtractor={(item) => item.id}
                        />
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default PayTransfer