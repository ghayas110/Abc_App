import { StyleSheet, Text, View, Image, Animated, Easing, Dimensions, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RequestButton } from '../../components/Buttons'
import { List, SimpleInput } from '../../components/Inputs'
import Cross from '../../assets/SignUp/cross.png'
import Acountready from '../../assets/SignUp/acountready.png'


import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal';
import style from "../../assets/styles/basic"
const { width, height } = Dimensions.get('window');
const TopUp = ({ open, CloseBtn }) => {
    const styles = {
        bottomSheetContainer: {
            backgroundColor: 'white',
            height: "90%",
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
    };
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(open);
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('VerifyingDetails')
    }
    // const toggleBottomSheet = () => {
    //     setBottomSheetVisible(!isBottomSheetVisible);
    // };
    return (
        <View>
            <TouchableOpacity onPress={CloseBtn}>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Modal
                    isVisible={open}
                    style={{ margin: 0 }}
                    onBackdropPress={CloseBtn}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{
                            ...styles.bottomSheetContainer,
                        }}>
                            <View style={{
                                ...style.basic_container,
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={CloseBtn}
                                    style={{
                                        ...style.bg_light_gray,
                                        padding: 15,
                                        marginRight: 30,
                                        borderRadius: 40,
                                    }}>
                                    <Image source={Cross} />
                                </TouchableOpacity>
                            </View>
                            <View style={styless.container}>
                                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: "60%" }}>
                                    <Image source={Acountready} />
                                    <View style={{ padding: 5, flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 30, fontWeight: '700', color: 'green', marginBottom: 15,lineHeight:33.6 }}>Your account is ready!</Text>
                                        <Text style={styless.text2}>Welcome to a new way of banking. You can now order physical card </Text>
                                    </View>
                                </View>

                                <View>
                                    
                                      <RequestButton text={"Order Card"} onPress={() =>navigation.navigate('Mailing')}
                                       btnStyle={{ width: "auto"}}
              />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>

    )
}

export default TopUp
const styless = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        padding: 30,
        height: height * 0.9,
        justifyContent: 'space-between'
    },
    text2: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 25,
        color:'#808080'
    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
})