import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import style from "../../assets/styles/basic"
import Checkbox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../components/Buttons';

const CheckDuitNow = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };

    const onPress = () => {
        navigation.navigate('DuitNowSuccess')
    }
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
                <View>
                    <Text style={{
                        ...style.Font_family_Bold,
                        ...style.Green_color_h,
                        fontSize: 30
                    }}>All good?</Text>
                    <Text style={{
                        ...style.Font_family,
                        ...style.gray_color_h,
                        fontSize: 18
                    }}>Please make sure your details are {'\n'} correct before proceeding</Text>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <View style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: 15
                    }}>
                        <Text style={{
                            ...style.Font_family_Bold,
                            ...style.black_color_f,
                        }}>DuitNow ID</Text>
                        <View style={{
                            display: "flex",
                            alignItems: "flex-end"
                        }}>
                            <Text style={{
                                ...style.Font_family
                            }}>Mobile number</Text>
                            <Text style={{ ...style.Font_family, marginTop: 5 }}>••••••7145</Text>
                        </View>
                    </View>

                    <View style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: 15
                    }}>
                        <Text style={{
                            ...style.Font_family_Bold,
                            ...style.black_color_f,
                        }}>Bank account</Text>
                        <View style={{
                            display: "flex",
                            alignItems: "flex-end"
                        }}>
                            <Text style={{
                                ...style.Font_family
                            }}>Bank Savings Account-i</Text>
                            <Text style={{ ...style.Font_family, marginTop: 5 }}>••••••••••9012</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 20
                    }}>
                    <Checkbox
                        isChecked={isChecked}
                        onClick={handleCheckBoxClick}
                        checkBoxColor={"#00a200"}
                    />
                    <Text style={{
                        ...style.black_color_h,
                        ...style.Font_family,
                        fontSize: 18,
                        textAlign: 'center',
                    }}>
                        I have read/accepted/understood the {' '}
                        <Text style={{
                            ...style.Green_color_h,
                            ...style.Font_family_Bold,
                        }}>
                            DuitNow terms and conditions & privacy notice.
                        </Text>
                    </Text>
                    </View>
                    <RequestButton btnStyle={{width: "auto"}} text={"Confirm"} onPress={() => onPress()}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default CheckDuitNow