import React, { useState } from 'react';
import { Image, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet, View, Switch, ScrollView, Button } from 'react-native'
import style from '../../../assets/styles/basic';
import { OutlineButton, RequestButton } from '../../../components/Buttons';
import Steps from '../../../components/steps/Steps';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const Reviewing = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 0,
            }}>
                <Header
                    backtoPage={false}
                    title={"Awaiting Decision"}
                    backIcon={require('../../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    marginVertical: 10,
                }} />
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: 20,
                }}>
                    <Image source={require("../../../assets/Finance/9285.png")} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{...style.Font_family_Bold,...style.Green_color_h,fontSize: 25}}>We’re reviewing your application</Text>
                    <Text style={{...style.Font_family,...style.gray_color_h}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
                    <OutlineButton btnStyle={{
                        width: "auto"
                    }} text={"Withdraw application"} />
                    <RequestButton btnStyle={{ 
                        width: "auto"
                    }} text={"Check status"} onPress={() => { navigation.navigate("Approved") }}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Reviewing