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
    placeholder,
    onChangeText
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
                    fontSize: 25,
                    color: "#808080"
                }}>{label}</Text>
                <TextInput
                    style={inputstyle}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={() => onChangeText()}
                />
            </View>
        </>
    )
}

const OtpInput = ({onChangeText}) => {
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
                    onChangeText={() => onChangeText()}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                    onChangeText={() => onChangeText()}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                    onChangeText={() => onChangeText()}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                    onChangeText={() => onChangeText()}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                    onChangeText={() => onChangeText()}
                />
                <TextInput
                    style={styles.otpInput}
                    type={"number"}
                    onChangeText={() => onChangeText()}
                />
            </View>
        </>
    )
}

const CheckBoxInput = ({
    text,
    color,
    onValueChange
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
                    onValueChange={() => onValueChange()}
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