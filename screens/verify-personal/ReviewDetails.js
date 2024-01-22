import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions,ScrollView, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import Steps from '../../components/Steps';

const ReviewDetails = () => {
    const { width, height } = Dimensions.get('window');
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('VerifyingDetails')
    }
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const styles = {
        bottomSheetContainer: {
            backgroundColor: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 20, // Adjust the value based on your desired borderRadius
            borderTopRightRadius: 20, // Adjust the value based on your desired borderRadius
        },
    };
    return (
        <>

            <View style={{
                ...style.basic_container,
                height: height,
                position: "relative",
                backgroundColor: "white"
            }}>
                <Steps
                    backtoPageName={"DetailThree"}
                    backtoPage={true}
                    totalSteps={"4"}
                    activeStep={"4"}
                />

                {/* INPUT BOX ============================= */}
                <ScrollView style={{ marginBottom: 180 }}>
                    <View style={{
                        ...style.basic_container,
                        marginTop: 20,
                        paddingLeft: 30,
                        paddingRight: 30
                    }}>
                        <Text style={{ ...style.main_heading, fontSize: 25,fontFamily: "Poppins-Bold" }}>Review your details</Text>
                        <View style={{ marginTop: 20 }}>
                            <View style={{
                                ...style.flex_space_between,
                                ...style.borderBot_gray,
                                paddingBottom: 4
                            }}>
                                <View style={{ ...style.flex_space_between }}>
                                    <Image
                                        source={require('./images/uparrow.png')}
                                    />
                                    <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: "600", color: "#000",fontFamily: "Poppins-Bold" }}>Personal</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Email</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>razak@gmail.com</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Marital status</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Single</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Ethnicity</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Malay</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{
                                ...style.flex_space_between,
                                ...style.borderBot_gray,
                                paddingBottom: 4
                            }}>
                                <View style={{ ...style.flex_space_between }}>
                                    <Image
                                        source={require('./images/uparrow.png')}
                                    />
                                    <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: "600", color: "#000",fontFamily: "Poppins-Bold" }}>Employment details</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Employment type</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Full time</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Name of employer</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Oliver Wyman</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Occupation</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Consultant</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Sector</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Financial services</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Annual income bracket</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>RM 72,000 to RM 88,000</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{
                                ...style.flex_space_between,
                                ...style.borderBot_gray,
                                paddingBottom: 8
                            }}>
                                <View style={{ ...style.flex_space_between }}>
                                    <Image
                                        source={require('./images/uparrow.png')}
                                    />
                                    <Text style={{marginLeft: 20, fontSize: 15, fontWeight: "600", color: "#000",fontFamily: "Poppins-Bold"}}>Account</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: "500",fontFamily: "Poppins-Regular",...style.gray_color_h }}>Account purpose</Text>
                                <Text style={{ fontSize: 16, marginTop: 15,...style.gray_color_h,fontFamily: "Poppins-Bold" }}>Saving</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <RequestButton text={"Next"} onPress={() => nextPage()}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Modal
                        isVisible={isBottomSheetVisible}
                        style={{ margin: 0 }}
                        onBackdropPress={toggleBottomSheet}
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
                                    <TouchableOpacity onPress={toggleBottomSheet}
                                        style={{
                                            ...style.bg_light_gray,
                                            padding: 15,
                                            marginRight: 30,
                                            borderRadius: 40,
                                        }}>
                                        <Image
                                            source={require('./images/cross.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{
                                        ...style.Green_color_h,
                                        paddingLeft: 10,
                                        fontSize: 25,
                                        fontWeight: "600",
                                        fontFamily: "Poppins-Bold"
                                    }}>Update your details</Text>

                                    <SimpleInput
                                        inputstyle={{
                                            fontSize: 15,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#808080',
                                            color: "#808080",
                                            fontFamily: "Poppins-Bold"
                                        }}
                                        placeholderTextColor="#808080"
                                        label={"Email"}
                                        type={"email"}
                                        defaultValue={"razak@gmail.com"}
                                        placeholder={"Enter Name of employer"}
                                    />
                                    <List
                                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                                        dropDownStyle={{fontFamily: "Poppins-Bold",...style.gray_color_f}}
                                        label={"Marital status"}
                                        placeholder={"Select Marital status"}
                                        defaultValue={"Single"}
                                        items={[
                                            { label: 'Option 1', value: 'option1' },
                                            { label: 'Option 2', value: 'option2' },
                                            { label: 'Option 3', value: 'option3' },
                                        ]}
                                    />

                                    <List
                                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                                        dropDownStyle={{fontFamily: "Poppins-Bold",...style.gray_color_f}}
                                        label={"Ethnicity"}
                                        placeholder={"Select Malay"}
                                        defaultValue={"Malay"}
                                        items={[
                                            { label: 'Option 1', value: 'option1' },
                                            { label: 'Option 2', value: 'option2' },
                                            { label: 'Option 3', value: 'option3' },
                                        ]}
                                    />
                                    <RequestButton text={"Save"} onPress={() => nextPage()}
                                        btnStyle={{ marginTop: 20 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )
}

export default ReviewDetails