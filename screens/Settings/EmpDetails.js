import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';


const EmpDetails = () => {
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
                <View style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <Text style={{
                        fontSize: 25,
                        ...style.Font_family_Bold,
                        ...style.Green_color_h
                    }}>Update your Details</Text>
                    <CheckBoxInput textStyle={{ color: "black", fontSize: 17, marginLeft: 10 }} text={"Same as registered Details"} color={"#00a200"} />
                    <Text style={{
                        ...style.Font_family_Bold,
                        ...style.black_color_h,
                        marginTop: 10
                    }}>Details</Text>
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
                        label={"Annual income bracket"}
                        type={"text"}
                        defaultValue={"RM 72,000 to RM 88,000"}
                        placeholder={"Annual income bracket"}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginTop: 20,
                }}>
                    <RequestButton btnStyle={{ width: "auto" }} text={"Confirm"} onPress={() => {navigation.navigate("Profile")}} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default EmpDetails