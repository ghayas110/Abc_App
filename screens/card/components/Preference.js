import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView, Switch } from 'react-native'
import style from "../../../assets/styles/basic"
import { useNavigation } from '@react-navigation/native'

const Preference = () => {
    const navigation = useNavigation()
    const nextOne = () => {
        navigation.navigate("SpendLimit");
    };
    const nextTwo = () => {
        navigation.navigate("CardPreferences");
    };
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
                    <TouchableOpacity onPress={nextOne}>
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
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/direction2.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Card limits</Text>
                            </View>
                            <Image source={require("../../../assets/cardImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextTwo}>
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
                                <Image style={{ marginRight: 10 }} source={require("../../../assets/cardImages/Setting.png")} />
                                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Card preferences</Text>
                            </View>
                            <Image source={require("../../../assets/cardImages/right.png")} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Preference