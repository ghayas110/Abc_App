import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';

const Privacy = () => {
    const navigation = useNavigation()
    const dataOne = [
        {
            id: '1',
            imageLeft: require('../../assets/generalImages/move.png'),
            text: 'Log in authentication preference',
            imageRight: require('../../assets/generalImages/Arrow-Right.png'),
        },
        {
            id: '2',
            imageLeft: require('../../assets/generalImages/encryption.png'),
            text: 'Change app passcode',
            imageRight: require('../../assets/generalImages/Arrow-Right.png'),
        },
        {
            id: '3',
            imageLeft: require('../../assets/generalImages/lock.png'),
            text: 'Change password',
            imageRight: require('../../assets/generalImages/Arrow-Right.png'),
        },
        {
            id: '4',
            imageLeft: require('../../assets/generalImages/key.png'),
            text: 'Change secure word',
            imageRight: require('../../assets/generalImages/Arrow-Right.png'),
        },
        {
            id: '5',
            imageLeft: require('../../assets/generalImages/mobile.png'),
            text: 'Manage mobile device',
            imageRight: require('../../assets/generalImages/Arrow-Right.png'),
        },
    ];
    const renderItemOne = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item.text)}>
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
        if (text == "Change app passcode") {
            navigation.navigate('ExistingPassCode')
        } else if (text == "Log in authentication preference") {
            navigation.navigate('LoginPreference')
        }else if (text == "Change secure word") {
            navigation.navigate('NewSecureWord')
        }else if (text == "Manage mobile device") {
            navigation.navigate('DeRegister')
        }else if (text == "Change password") {
            navigation.navigate('NewPassword')
        }
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
                        title={"Privacy & Security"}
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
                        paddingTop: 0
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

export default Privacy