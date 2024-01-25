import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../assets/styles/basic'
import {SimpleInput} from '../../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { FilterButton, RequestButton } from '../../../components/Buttons';
import DuetImg from '../../../assets/transferPaymentImages/DuetIcons.png'
import QrDuetImg from '../../../assets/transferPaymentImages/qrduetIcon.png'
import Icons from '../../../components/Icons';
import { CheckBoxInput } from '../../components/Inputs';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const NewRecipient = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('RecipientBank')
    }
    const GoAccountType = () => {
        navigation.navigate('AccountType')

    }

    const Flatlist = [
        {
            name: 'Recipient bank ',
            text: "Select recipient bank",
            Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={ForWordnavigation} />
        },
        {
            name: 'Account type',
            text: "Select account type",
            Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={GoAccountType} />
        },

    ];



    const renderItem = ({ item }) => (
        <>
            <View>

                <View style={styles.flatlistrow}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.Select}>{item.text}</Text>
                    </View>
                    <Text >{item.Icon2}</Text>
                </View>

            </View>

        </>
    );

    return (
        <>

            <View style={styles.container}>
              <View>
                <FlatList
                    data={Flatlist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                    
                </View>
                
                <View style={{marginTop:15}}>
                    <SimpleInput
                        label="Account number"
                        type="number"
                        placeholder={"Enter account number"}
                        placeholderTextColor={{...Theme.Light_gray_color_f}}
                        styles={styles.Input}

                    />
                </View>
                <View style={{ ...styles.Notify, ...Theme.bg_light_green_color }}>
                    <Text style={{ ...Theme.Green_color_f, fontSize: 14, fontWeight: "700", ...Theme.Font_family }}>
                        FRAUD ALERT: Beware of phishing scams. Never click on links in unsolicited SMS and WhatsApp messages, emails or social media posts. DO NOT reveal your banking security information such as your PIN to unknown callers or personnel.
                    </Text>
                </View>
                <View style={{alignSelf:"center" }}>
                    <RequestButton text={'Continue'} onPress={()=>console.log('pending')}/>
                </View>
            </View>
        </>
    )
}

export default NewRecipient

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },

    Input:{
        ...Theme.Font_family,
        fontSize: 12,
        fontWeight:"500",
        ...Theme.black_color_f,
        marginTop:15,
    },
    Notify: {
        padding: 20,
        // backgroundColor: "#DCF2FC",
    },

    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        paddingTop:15,
        marginTop:15,
        paddingBottom:15,
    },
    
    icon2: {
        fontSize: 16,
        ...Theme.Green_color_f
    },
    name: {
        fontSize: 16,
        marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight:"700"
    },
    text:{
        fontSize: 16,
        marginLeft: 10,
        fontWeight:"500",
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
    }


});