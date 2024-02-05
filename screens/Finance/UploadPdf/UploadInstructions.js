import React, { useState } from 'react';
import { Image, SafeAreaView, Text,FlatList, TouchableOpacity, StyleSheet, View, Switch, ScrollView, Button } from 'react-native'
import style from '../../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import ActivationSteps from '../../../components/steps/ActivationSteps';
import { OutlineButton, RequestButton } from '../../../components/Buttons';
import Steps from '../../../components/steps/Steps';
import Header from '../components/Header';
import LottieView from 'lottie-react-native';

const UploadInstructions = () => {
    const navigation = useNavigation()
    const listOne = [
        { id: '1', name: 'Click “Upload” button' },
        { id: '2', name: 'Choose your preferred option to retrieve the document(s)' },
        { id: '3', name: 'Select the document(s) to upload' },
        { id: '4', name: 'Click “Upload another file” if you want to upload more document(s)' },
        { id: '5', name: 'Click “Continue” when done' },
    ];
    const listTwo = [
        { id: '1', name: 'Open the relevant websites (bank/KWSP/LDHN)' },
        { id: '2', name: 'Search for “Statements”' },
        { id: '3', name: 'Select relevant period' },
        { id: '4', name: 'Click “Download”' },
    ];
    const renderItemOne = ({ item }) => (
        <View style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5
        }}>
            <Text style={{...style.Font_family_Bold,...style
            .black_color_h,marginRight:10}}>{item.id}.</Text>
            <Text style={{...style.Font_family_Bold,...style.gray_color_h}}>{item.name}</Text>
        </View>
    );

    const renderItemTwo = ({ item }) => (
        <View style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5
        }}>
            <Text style={{...style.Font_family_Bold,...style
            .black_color_h,marginRight:10,...style.dark_green_h}}>{item.id}.</Text>
            <Text style={{...style.Font_family_Bold,...style.gray_color_h,...style.dark_green_h}}>{item.name}</Text>
        </View>
    );

    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <Header
                    backtoPage={true}
                    title={"How To Upload"}
                    backIcon={require('../../../assets/TransactionHistoryImages/ArrowLeft.png')}
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
                    paddingTop: 0,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: 20
                    }}>
                <LottieView source={require('../../../assets/lotiefiles/upload_documents_animation.json')} autoPlay style={{width:"100%",height:200}} />
                    </View>
                    <View>
                        <FlatList
                            data={listOne}
                            renderItem={renderItemOne}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={{
                        marginTop: 20,
                        ...style.bg_light_green_color,
                        padding: 20
                    }}>
                        <Text style={{...style.Font_family_Bold,...style.dark_green_h,fontSize: 18,marginBottom: 10}}>How to download document?</Text>
                        <FlatList
                            data={listTwo}
                            renderItem={renderItemTwo}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        </>
    )
}

export default UploadInstructions