import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Steps from '../../components/steps/Steps';



const DetailTwo = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('DetailThree')
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
                   backtoPage={true}
                   totalSteps={"4"}
                   activeStep={"2"}
                   backIcon={require('./images/Icons.png')}
                   leftIcon={require('./images/Profile.png')}
                   rightIcon={require('./images/Setting.png')}
                   ProgressBarIcon={require('./images/steps.png')}
                />

                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 10,
                }}>
                    <Text style={{ ...style.main_heading, textAlign: "left", paddingLeft: 10, fontSize: 25, fontFamily: "Poppins-Bold" }}>What do you do for a  {'\n'} living?</Text>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10, fontFamily: "Poppins-Regular" }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Employment type"}
                        placeholder={"Select Employment type"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <SimpleInput
                        inputstyle={{
                            fontSize: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                            fontFamily: "Poppins-Regular"
                        }}
                        placeholderTextColor="#808080"
                        label={"Name of employer"}
                        type={"text"}
                        placeholder={"Enter Name of employer"}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10, fontFamily: "Poppins-Regular" }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Occupation"}
                        placeholder={"Select Occupation"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10, fontFamily: "Poppins-Regular" }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Employment sector"}
                        placeholder={"Select Employment sector"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10, fontFamily: "Poppins-Regular" }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Annual income bracket"}
                        placeholder={"Select Annual income bracket"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <RequestButton text={"Next"} onPress={() => nextPage()}
                    btnStyle={{ marginTop: 30 }}
                />
            </View>
        </>
    )
}

export default DetailTwo