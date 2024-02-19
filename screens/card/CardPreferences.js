import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView, Switch, TextInput } from 'react-native'
import style from "../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'
import Header from './components/Header'
import { RequestButton } from '../../components/Buttons'

const CardPreferences = () => {
    const navigation = useNavigation()
    const [isEnabledOne, setIsEnabledOne] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const toggleSwitchOne = () => setIsEnabledOne(previousState => !previousState);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);
    const goBack = () => {
        navigation.goBack("Home");
    };
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <Header
                    backtoPage={true}
                    title={"Card Preferences"}
                    backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    marginVertical: 10,
                }} />
                <ScrollView>
                    <SafeAreaView style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 15,
                        paddingTop: 0,
                        flex: 1
                    }}>
                        <View>
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
                                        <Image style={{ marginRight: 10 }} source={require("../../assets/cardImages/wifi.png")} />
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Enable internet payments</Text>
                                    </View>
                                    <Switch trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledOne ? '#00a200' : '#FAF9F6'} onValueChange={toggleSwitchOne} value={isEnabledOne} />
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
                                        <Image style={{ marginRight: 10 }} source={require("../../assets/cardImages/airo.png")} />
                                        <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Enable international payments</Text>
                                    </View>
                                    <Switch trackColor={{ false: '#cccccc', true: '#00a200' }} thumbColor={isEnabledTwo ? '#00a200' : '#FAF9F6'} onValueChange={toggleSwitchTwo} value={isEnabledTwo} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom:10
                }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Save"} onPress={() => goBack()} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default CardPreferences