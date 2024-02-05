import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import Theme from '../../assets/styles/basic'
import ThemeSty from "../../assets/styles/basic"



const PersonalDetails = ({ onPress, AddressPress }) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('ReviewDetails')
    }

    return (

        <ScrollView>

            <View
                style={{
                    ...style.basic_container,
                    padding:16
                }}
            >
                <View>

                    <Text style={{
                        ...style.main_heading, textAlign: "left", fontSize: 24, ...Theme.Font_family, fontWeight: '700',
                    }}>Let’s get started</Text>
                    <Text style={{
                        ...Theme.gray_color_h, ...Theme.Font_family, fontSize: 16,
                    }}>Please confirm your details and tell us a little bit more about yourself</Text>
                 
                </View>

            </View>
            <View>

                <View style={{ ...style.basic_container,}}>
                    <Text style={{
                        ...Theme.black_color_h, ...Theme.Font_family, fontSize: 16, fontWeight: '700',
                    }}>
                        Personal details
                    </Text>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ ...Theme.gray_color_h  , ...Theme.Font_family, fontWeight: "500", fontSize: 12,}}>
                            Full Name
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            Razak Bin Osman
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            IQAMA No
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            4356578-768-5678
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Date of Birth
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            7/09/1997
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Email
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            razakbinosman@gmail.com
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Martial Status
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            Single
                        </Text>
                    </View>
                </View>
                
                <View style={{
                    ...style.basic_container,
                    // backgroundColor: 'whitesmoke'
                }}>
                        <Text style={{ ...Theme.black_color_h , ...Theme.Font_family , fontSize: 16, fontWeight: "700", }}>
                            Mailing Address
                        </Text>
                    <View style={{ marginTop:10}}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Address (Line One)
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            99, Jalan Prince 4
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Address (Line Two)
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            Azan Garden
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            Postal Code
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            49810
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            City
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            Petaling Jaya
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ ...Theme.gray_color_h, ...Theme.Font_family, fontWeight: "500", fontSize: 12, }}>
                            State
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 16, ...Theme.black_color_h, ...Theme.Font_family }}>
                            Selangor
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                ...style.basic_container,
            }}>
                <View style={{ ...styles.Notify, ...ThemeSty.bg_light_green_color }}>
                    <Text style={{ ...Theme.Green_color_f, fontSize: 12, fontWeight: "500", ...Theme.Font_family }}>
                        Request change of mailing address.
                    </Text>
                    <TouchableOpacity onPress={AddressPress}>

                        <Text style={{ ...Theme.Green_color_f, fontSize: 16, fontWeight: "bold", ...Theme.Font_family }}>
                            Update now {'>'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View styles={{}}>
                    <TouchableOpacity onPress={() => console.log("")}>
                        <FormInput
                            placeholder={'Select Highest Education Level'}
                            placeholderColor={'grey'}
                            title={`Highest Education Level`}
                            fontsize={12}
                            icon={"right"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("")}>
                        <FormInput
                            placeholder={'Select residential status'}
                            placeholderColor={'grey'}
                            title={`Residential ownership status`}
                            fontsize={12}
                            icon={"right"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("")}>
                        <FormInput
                            placeholder={'What would you use the funds for?'}
                            placeholderColor={'grey'}
                            title={`Purpose of financing`}
                            fontsize={12}
                            icon={"right"}
                        />
                    </TouchableOpacity>
                    <View style={{ ...styles.Notify, ...ThemeSty.bg_light_green_color }}>
                        <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, fontWeight: "500", ...ThemeSty.Font_family, lineHeight: 24 }}>
                            We will use the above details to perform verification checks and communicate important information, such as your application document.
                        </Text>

                    </View>
                </View>

            </View>
            <View style={{ paddingBottom: 10 }}>

                <RequestButton text={"Continue"} onPress={onPress} />
            </View>
        </ScrollView>
    )
}

export default PersonalDetails
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        justifyContent: "space-evenly",
        backgroundColor: "#FFFFFF",
    },
    Progress: {
        padding: 15,
        justifyContent: 'center',
        flexDirection: "row",
    },
    Image: {
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',

    },
    headerText: {
        padding: 10,
        marginTop: 15,
    },
    Notify: {
        padding: 24,
        borderRadius:10,
        marginTop:10
        // backgroundColor: "#DCF2FC",
    },
    btn2: {
        alignItems: "center"
    },
    btn1: {
        alignItems: "center"
    }

})