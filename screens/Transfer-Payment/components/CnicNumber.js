import { StyleSheet, Text, View, Button, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../assets/styles/basic'
import { SimpleInput } from '../../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { FilterButton, RequestButton } from '../../../components/Buttons';
import DuetImg from '../../../assets/transferPaymentImages/DuetIcons.png'
import QrDuetImg from '../../../assets/transferPaymentImages/qrduetIcon.png'
import Icons from '../../../components/Icons';
import { CheckBoxInput } from '../../components/Inputs';
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import ContactList from './ContactList'
import * as Contacts from 'react-native-contacts';
import Modal from 'react-native-modal';



const CnicNumber = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);


    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('RecipientBank')
    }
    const GoAccountType = () => {
        navigation.navigate('NameScreen')

    }
    const insertAmount = () => {
        navigation.navigate('InsertAmount')

    }



    const Flatlist = [
        {
            name: 'Fund Transfer ID',
            text: "Emirates ID",
            Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={ForWordnavigation} />
        },
        {
            name: 'Emirates ID',
            text: "42201-6548862-8",
            // Icon2: <Icons.AntDesign name="contacts" style={styles.icon2} onPress={toggleBottomSheet} />
        },

    ];





    const renderItem = ({ item }) => (
        <>

            <View style={styles.flatlistrow}>
                <View style={styles.selection}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.Select}>{item.text}</Text>
                </View>
                <Text >{item.Icon2}</Text>
            </View>


        </>
    );





    return (
        <>

            <View style={styles.container}>
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={Flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>


                <View style={{ ...styles.Notify, }}>
                    <Text style={{ ...Theme.Green_color_f, fontSize: 14, fontWeight: "500", ...Theme.Font_family, ...Theme.bg_light_green_color, padding: 16, borderRadius: 10 }}>
                        FRAUD ALERT: Beware of phishing scams. Never click on links in unsolicited SMS and WhatsApp messages, emails or social media posts. DO NOT reveal your banking security information such as your PIN to unknown callers or personnel.
                    </Text>
                    <View style={{ alignSelf: "center", marginTop: 10, }}>
                        <RequestButton text={'Continue'} onPress={insertAmount} />
                    </View>
                </View>
                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0, marginTop: 50 }}
                    onBackdropPress={toggleBottomSheet}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 16,
                            // height: 100,
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                        }}>
                            <View>
                                <Text style={{ fontSize: 28, fontWeight: '700', ...Theme.Green_color_f, ...Theme.Font_family, textAlign: "center" }}> Contacts  </Text>
                            </View>
                            <View style={styles.Search}>
                                <Icons.AntDesign name="search1" style={styles.SearchIcon} />
                                <TextInput style={styles.input} placeholder="Search..." />
                            </View>
                            <View >
                                <ContactList />
                            </View>
                        </View>
                    </View>
                </Modal>



            </View>
        </>
    )
}

export default CnicNumber

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
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",

    },

    flatlistrow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 10,
    },

    icon2: {
        fontSize: 24,
        ...Theme.Green_color_f
    },
    name: {
        fontSize: 12,
        ...Theme.gray_color_h,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    Select: {
        fontSize: 16,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    Search: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        ...Theme.bg_light_gray,
        borderRadius: 16,

    },
    SearchIcon: {
        fontSize: 20,
    }


});