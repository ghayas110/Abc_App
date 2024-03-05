import React from 'react'
import { Image, SafeAreaView, FlatList, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import Checkbox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';

const DuitNowSuccess = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('DuitNowSuccess')
    }
    const data = [
        { id: '1', title: 'Mobile number', account: "••••••7145" },
        { id: '2', title: 'Linked account', account: "••••••••••9012", description: "Bank Savings Account-i" },
    ];

    const renderItem = ({ item }) => (
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
        }}>
            <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>{item.title}</Text>
            <View style={{
                display: "flex",
                alignItems: "flex-end"
            }}>
                {item?.description ? <Text style={{ ...style.Font_family, ...style.gray_color_h }}>{item?.description}</Text> : null}
                <Text>{item?.account}</Text>
            </View>
        </View>
    );
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 30
            }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: "center",
                            }}>
                            <Image source={require("../../assets/transferPaymentImages/person.png")} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{
                            ...style.Font_family_Bold,
                            ...style.Green_color_h,
                            fontSize: 25,
                            marginTop: 30
                        }}>Nice! Your Fund-Transfer is successfully linked with your Bank account</Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 20,flex:1 }}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <View style={{ marginTop: 20,flex:1 }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 10,
                            flex:1
                        }}>
                            <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Reference ID</Text>
                            <Text style={{ ...style.Font_family, ...style.gray_color_hth }}>0023037027</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 10,
                            flex:1
                        }}>
                            <Text style={{ ...style.Font_family_Bold, ...style.black_color_h }}>Date & time</Text>
                            <Text style={{ ...style.Font_family, ...style.gray_color_h }}>3 Dec 2021, 02:45 PM</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: 50,
                        justifyContent: "flex-end",
                    }}>
                        <RequestButton btnStyle={{width: "auto"}} text={"Back to Home"} onPress={() => onPress()} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default DuitNowSuccess