import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Checkbox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';

const { width, height } = Dimensions.get('window');



const SimpleInput = ({
    placeholderTextColor,
    inputstyle,
    label,
    value,
    defaultValue,
    type,
    placeholder,
    viewStyle,
    pass
}) => {
    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 10,
                ...viewStyle
            }}>
                <Text style={{
                    fontSize: 17,
                    color: "#808080",
                    fontFamily: "Poppins-Regular"
                }}>{label}</Text>
                <TextInput
                    style={{ ...inputstyle }}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={pass}
                    value={value}
                    defaultValue={defaultValue}
                    placeholderTextColor={"black"}
                />
            </View>
        </>
    )
}

const OtpInput = () => {
    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-around'
            }}>
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                />
            </View>
        </>
    )
}

const CheckBoxInput = ({
    text,
    textStyle,
    color,
    status,
    others
}) => {
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                padding: 0,
            }}>
                <Checkbox
                    isChecked={isChecked}
                    onClick={handleCheckBoxClick}  // or use onChange
                    checkBoxColor={color}
                />
                <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{text}</Text>
            </View>
        </>
    )
}

const List = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()


    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 15
            }}>
                <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{label}</Text>
                <DropDownPicker
                    placeholder={placeholder}
                    items={items}
                    defaultValue={defaultValue}
                    value={currentValue}
                    setOpen={() => setOpen(!isOpen)}
                    open={isOpen}
                    textStyle={dropDownStyle}
                    style={{
                        zIndex: 1000,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        fontFamily: "Poppins-Regular",
                        // color: "red"
                    }}
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    otpInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
});

export { SimpleInput, OtpInput, CheckBoxInput, List }
