import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Steps from '../../components/Steps';




const DetailOne = () => {
    const navigation = useNavigation()
    const { width, height } = Dimensions.get('window');
    const nextPage = async () => {
        navigation.navigate('DetailTwo')
    }


    return (
        <>
            <View style={{
                ...style.basic_container,
                height: height,
                position: "relative",
                backgroundColor: "white"
            }}>
                <Steps
                    backtoPageName={"DetailOne"}
                    backtoPage={false}
                    totalSteps={"4"}
                    activeStep={"1"}
                />
                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <Text style={{ ...style.main_heading, textAlign: "left", paddingLeft: 10, fontSize: 25, fontFamily: "Poppins-Bold" }}>Just a few more {'\n'} details from you</Text>
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            fontFamily: "Poppins-Regular"
                        }}
                        placeholderTextColor="#808080"
                        label={"Email"}
                        type={"email"}
                        placeholder={"Email"}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10 }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Marital status"}
                        placeholder={"Select Marital status"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10 }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Marital Ethnicity"}
                        placeholder={"Select Ethnicity"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <RequestButton text={"Next"} onPress={() => nextPage()}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />
            </View>
        </>
    )
}

export default DetailOne