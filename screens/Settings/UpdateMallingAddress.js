import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';


const UpdateMallingAddress = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };
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
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <Text style={{
                        fontSize: 25,
                        ...style.Font_family_Bold,
                        ...style.Green_color_h
                    }}>Update your mailing address</Text>
                    <CheckBoxInput textStyle={{ color: "black", fontSize: 17, marginLeft: 10 }} text={"Same as registered address"} color={"#00a200"} />
                    <Text style={{
                        ...style.Font_family_Bold,
                        ...style.black_color_h,
                        marginTop: 10
                    }}>Mailing address</Text>
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            color: "#808080",
                            fontFamily: "Poppins-Bold",
                        }}
                        viewStyle={{
                            width: "auto",
                            marginTop: 30
                        }}
                        placeholderTextColor="#808080"
                        label={"Address (Line One)"}
                        type={"Address (Line One)"}
                        defaultValue={"62, Jalan Camar 5,"}
                        placeholder={"Address (Line One)"}
                    />
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            color: "#808080",
                            fontFamily: "Poppins-Bold",
                        }}
                        viewStyle={{
                            width: "auto",
                            marginTop: 30
                        }}
                        placeholderTextColor="#808080"
                        label={"Address (Line Two)"}
                        type={"Address (Line Two)"}
                        defaultValue={"Residensi 28,"}
                        placeholder={"Address (Line One)"}
                    />
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            color: "#808080",
                            fontFamily: "Poppins-Bold",
                        }}
                        viewStyle={{
                            width: "auto",
                            marginTop: 30
                        }}
                        placeholderTextColor="#808080"
                        label={"Postal code"}
                        type={"Postal code"}
                        defaultValue={"47810"}
                        placeholder={"Postal code"}
                    />
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            color: "#808080",
                            fontFamily: "Poppins-Bold",
                        }}
                        viewStyle={{
                            width: "auto",
                            marginTop: 30
                        }}
                        placeholderTextColor="#808080"
                        label={"City"}
                        type={"City"}
                        defaultValue={"Petaling Jaya"}
                        placeholder={"City"}
                    />
                    <List
                        textStyle={{ ...style.Font_family,...style.gray_color_h, textAlign: "left", fontSize: 15, marginBottom: 0 }}
                        dropDownStyle={{ fontFamily: "Poppins-Bold", ...style.gray_color_f }}
                        viewStyle={{
                            width: "auto",
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 20
                        }}
                        label={"State"}
                        placeholder={"Select State"}
                        defaultValue={"Selangor"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />

                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginTop: 20
                }}>
                    <RequestButton btnStyle={{ width: "auto" }} text={"Confirm"} onPress={() => onPress()} />
                </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default UpdateMallingAddress