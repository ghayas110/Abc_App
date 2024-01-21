import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions,ScrollView, TouchableOpacity } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

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
                <View style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}>
                    {/* STEPS =========================== */}
                    <View style={{
                        width: width * 0.5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>

                        <Image
                            source={require('./images/Profile.png')}
                        />
                        <View>
                            <Text style={{ ...style.simple_txt, marginBottom: 5 }}>Step 4 of 4</Text>
                            <Image
                                source={require('./images/steps.png')}
                            />
                        </View>
                        <Image
                            source={require('./images/Setting.png')}
                        />
                    </View>
                </View>

                {/* INPUT BOX ============================= */}
                <ScrollView style={{ marginBottom: 180 }}>
                    <View style={{
                        ...style.basic_container,
                        marginTop: 20,
                        paddingLeft: 30,
                        paddingRight: 30
                    }}>
                        <Text style={{ ...style.main_heading, fontSize: 25 }}>Review your details</Text>
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
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "600", color: "#000" }}>Personal</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Email</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>razak@gmail.com</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Marital status</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Single</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Ethnicity</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Malay</Text>
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
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "600", color: "#000" }}>Employment details</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Employment type</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Full time</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Name of employer</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Oliver Wyman</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Occupation</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Consultant</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Sector</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Financial services</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Annual income bracket</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>RM 72,000 to RM 88,000</Text>
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
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "600", color: "#000" }}>Account</Text>
                                </View>
                                <TouchableOpacity onPress={toggleBottomSheet}>
                                    <Image
                                        source={require('./images/pancel.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "500" }}>Account purpose</Text>
                                <Text style={{ fontWeight: "900", fontSize: 22, marginTop: 15 }}>Saving</Text>
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
                                        fontSize: 30,
                                        fontWeight: "600"
                                    }}>Update your details</Text>

                                    <SimpleInput
                                        viewStyle={{
                                            marginTop: 20
                                        }}
                                        inputstyle={{
                                            fontSize: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#808080',
                                        }}
                                        placeholderTextColor="#808080"
                                        label={"Email"}
                                        type={"email"}
                                        defaultValue={"razak@gmail.com"}
                                        placeholder={"Enter Name of employer"}
                                    />
                                    <List
                                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
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