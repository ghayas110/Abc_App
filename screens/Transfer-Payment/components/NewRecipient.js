import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, SimpleInput } from '../../../components/Inputs';
import { useNavigation } from '@react-navigation/native';
import { RequestButton } from '../../../components/Buttons';
import Theme from '../../../assets/styles/basic';
import { ScrollView } from 'react-native-gesture-handler';

const NewRecipient = () => {
    const navigation = useNavigation();

    const insertAmount = () => {
        navigation.navigate('InsertAmount');
    };

    return (
        <View style={styles.container}>
            <View style={styles.selection}>
                {/* <Text style={styles.name}>Recipient</Text> */}
                <List
                    label="Recipient"
                    textStyle={{ ...Theme.Font_family, ...Theme.black_color_h, textAlign: "left", fontSize: 15, marginBottom: 0 }}
                    dropDownStyle={{ fontFamily: "Poppins-Bold", ...Theme.gray_color_f }}
                    viewStyle={{ width: "100%", zIndex: 999, paddingLeft: 0, paddingRight: 0 }}
                    placeholder={"Select Bank"}
                    defaultValue={"Selangor"}
                    items={[
                        { label: 'Dubai Islamic Bank', value: 'Dubai Islamic Bank' },
                    ]}
                />
            </View>
            <View style={styles.selection}>
                <List
                    label="Account Type"
                    textStyle={{ ...Theme.Font_family, ...Theme.black_color_h, textAlign: "left", fontSize: 15, marginBottom: 0 }}
                    dropDownStyle={{ fontFamily: "Poppins-Bold", ...Theme.gray_color_f }}
                    viewStyle={{ width: "100%", zIndex: 99, paddingLeft: 0, paddingRight: 0 }}
                    placeholder={"Select Account"}
                    defaultValue={"Selangor"}
                    items={[
                        { label: 'Saving', value: 'option2' },
                        { label: 'Current', value: 'option1' },
                        { label: 'Financing', value: 'option2' },
                        { label: 'Credit Card', value: 'option3' },
                    ]}
                />
            </View>
            <View style={{ borderBottomWidth: 0.5 }}>
                <SimpleInput
                    label="Account number"
                    type="number"
                    placeholder={"Enter account number"}
                    placeholderTextColor={{ ...Theme.Light_gray_color_f }}
                    inputstyle={styles.Input}
                />
            </View>
            <View style={styles.Notify}>
                <Text style={{ ...Theme.Green_color_f, fontSize: 12, fontWeight: "500", ...Theme.Font_family, ...Theme.bg_light_green_color, padding: 16, borderRadius: 10 }}>
                    FRAUD ALERT: Beware of phishing scams. Never click on links in unsolicited SMS and WhatsApp messages, emails or social media posts. DO NOT reveal your banking security information such as your PIN to unknown callers or personnel.
                </Text>
                <View style={{ alignSelf: "center" }}>
                    <RequestButton text={'Continue'} onPress={insertAmount} />
                </View>
            </View>
        </View>
    )
}

export default NewRecipient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFFFFF",
    },
    Input: {
        ...Theme.Font_family,
        fontSize: 12,
        fontWeight: "500",
        ...Theme.black_color_f,
        padding: 10
    },
    Notify: {
        flex: 0.9,
        backgroundColor: "#FFFFFF",
        justifyContent: "flex-end",
    },
    name: {
        fontSize: 16,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    selection: {
        // borderWidth:1,
        // flex: 1,
    },
});