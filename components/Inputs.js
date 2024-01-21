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
    viewStyle
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
                    fontSize: 20,
                    color: "#808080"
                }}>{label}</Text>
                <TextInput
                    style={inputstyle}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    placeholderTextColor={placeholderTextColor}
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
                    style={styles.otpInput}
                    type={"number"}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                />
            </View>
        </>
    )
}

const CheckBoxInput = ({
    text,
    color,
    status,
    others
}) => {
    const [isChecked, setIsChecked] = useState(false)
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
                    status={isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                    checkBoxColor={color}
                />
                <Text>{text}</Text>
            </View>
        </>
    )
}

const List = ({
    defaultValue,
    label,
    textStyle,
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
                <Text style={textStyle}>{label}</Text>
                <DropDownPicker
                    placeholder={placeholder}
                    items={items}
                    defaultValue={defaultValue}
                    value={currentValue}
                    setOpen={() => setOpen(!isOpen)}
                    open={isOpen}
                    style={{
                        zIndex: 1000,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0
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