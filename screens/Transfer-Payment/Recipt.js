import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import Logos from '../../assets/TransferPayment/SssscoLandingLgo-01.png'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons';
import ZigzagView from "react-native-zigzag-view"
import React from 'react'
import Header from './components/Header'

const Review = () => {

    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('DigitalSecure')
    }
    const back = () => {
        navigation.navigate('DeutNowSent')
    }
    const Flatlist = [
        {
            name: 'Transfer from',
            value: "Rize Savings Account-i \n 700007123456789",
            key: "1"

        },
        {
            name: 'Business \n message ID',
            value: "21023299281",
            key: "2"
        },
        {
            name: 'Recipient reference',
            value: "Hermès Bag",
            key: "3"
        },
        {
            name: 'Other payment \n details',
            value: "Happy Birthday",
            key: "3"
        },
        {
            name: 'Date & time',
            value: "3 Dec 2021, 02:45 PM",
            key: "3"
        },


    ];


    const data = [
        {
            name: 'Recipient ID',
            value: "12345678",
            key: "1"

        },
    ];

    const renderItem = ({ item }) => (
        <>
            <View style={styles.flatlistrow}>
                <View>
                    <Text style={styles.nameHead}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.nameValue}>{item.value}</Text>
                </View>
            </View>


        </>
    );


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Icons.Entypo name="chevron-thin-left" style={styles.headericon} onPress={back} />
                <Image source={Logos} style={styles.Images} />
                <Icons.Entypo name="upload" style={styles.headericon} />
            </View>

            <ScrollView>
                <View style={styles.subheaderstyle}>
                    <Text style={styles.accountName}>Hussien Lee</Text>
                    <Text style={styles.accountDetaik}>Al Saudi Bank Saudi / Saudi by Al Saudi - •••••••••••5431
                        Savings Account-i</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />

                    <View style={styles.successtag}>
                        <View style={styles.sucesstxt}>
                            <Text style={styles.Suctext}>Successful</Text>
                            <Icons.Ionicons name="shield-checkmark-outline" style={{ marginLeft: 5, }} />
                        </View>
                    </View>


                </View>
                <View style={styles.FlatlistCon} >
                    <FlatList
                        data={Flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />
                    <View style={styles.Amountss}>
                        <Text style={styles.headType}>Transfer amount</Text>
                        <Text style={styles.price}>AED 3,400.00</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <RequestButton text={'Continue'} onPress={Navigate} />
                    </View>
                </View>





            </ScrollView>

        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"#CCC",
        padding:10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },
    Images: {
        width: 150,
        height: 50,
        resizeMode: "center",
    },
    successtag: {
        padding: 10,
    },
    Suctext: {
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontSize: 12
    },
    sucesstxt: {
        flexDirection: "row",
        alignItems: "center",
        ...Theme.bg_green_color,
        width: 100,
        padding: 5,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        borderRadius: 5,
    },
    headericon: {
        ...Theme.Green_color_f,
        fontSize: 24,
        // ...Theme.White_color_h

    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    nameHead: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    nameValue: {
        fontSize: 14,
        marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    tranferInstruc: {
        ...Theme.Light_gray_color_f,
        fontSize: 12,
        padding: 5

    },
    headType: {
        fontSize: 16,
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family
    },
    subheaderstyle: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingLeft: 15,
        paddingRight: 15,
    },
    accountName: {
        fontSize: 24,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    accountDetaik: {
        ...Theme.gray_color_f,
        ...Theme.Font_family,
        marginTop: 10,

    },
    ammouncontianer: {
        padding: 10,
        flex: 1,
    },
    amount: {
        marginTop: 0,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputstyle: {
        borderBottomWidth: 0.5,
        fontSize: 12,
        ...Theme.black_color_f,
    },
    amounttext: {
        fontWeight: "700",
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontSize: 16,
        marginTop: 35
    },

    headinput: {
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_f

    },
    transder: {
        flex: 1,
        padding: 15,
        paddingLeft: 15,

    },
    transfertext: {
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_f,
        ...Theme.Font_family
    },
    savingAccountcheckbox: {
        borderWidth: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        ...Theme.gray_border_Color,
        borderRadius: 10,
    },
    checkedbox: {
        ...Theme.bg_green_color,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    transferNum: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: "500",
        ...Theme.gray_color_f,
        ...Theme.Font_family
    },
    Amountss: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20
    },
    price: {
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontSize: 24,
        fontWeight: "700",

    },
    tranferInstruc2: {
        flexDirection: "row"
    },
    FlatlistCon: {
        backgroundColor: "#FFFFFF",
        bordeTop: 'none',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    }

})