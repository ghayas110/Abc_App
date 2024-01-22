import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { Checkbox } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


const { width, height } = Dimensions.get('window');



const SimpleInput = ({
    placeholderTextColor,
    inputstyle,
    label,
    value,
    type,
    placeholder
}) => {
    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 10
            }}>
                <Text style={{
                    fontSize: 12,
                    color: "#808080",
                    fontWeight:"700"
                }}>{label}</Text>
                <TextInput
                    style={inputstyle}
                    placeholder={placeholder}
                    type={type}
                    value={value}
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
}) => {
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10
            }}>
                <Checkbox.Android
                    color={color}
                />
                <Text>{text}</Text>
            </View>
        </>
    )
}

const List = ({
    defaultValue,
    label
}) => {


    return (
        <>
            <View style={{
                 paddingLeft: 15,
                 paddingRight: 15,
                 width: width,
                 marginTop: 15
            }}>
                <Text style={{marginBottom: 10}}>{label}</Text>
                <DropDownPicker
                   items={[
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                  ]}
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

export { SimpleInput, OtpInput, CheckBoxInput,List }