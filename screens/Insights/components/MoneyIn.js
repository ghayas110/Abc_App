import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import Icons from '../../../components/Icons';
import MoneyOut from '../../../assets/HomeScreenImages/moneyOut.png'
import Theme from '../../../assets/styles/basic'
import React from 'react'

const MoneyIn = () => {


    const Flatlist = [
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
        {
            image: <Image source={MoneyOut} />,
            name: 'Transfer Fund To\nID - Adil Ahmad',
            type: 'Miscellaneous',
            date: "28 Jan 2024",
            Amount: "-AED 21.90"
        },
    ];

    const renderItem = ({ item }) => (
        <>
            <View style={styles.flatlistrow}>
                <Text>{item.image}</Text>
                <View style={styles.namerow}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <Text style={styles.Amount}>{item.Amount}</Text>
            </View>


        </>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={Flatlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default MoneyIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex:1,
    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        // alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 10,
        
    },
    penicon: {
        fontSize: 24,
        ...Theme.Green_color_f
    },
    namerow: {
        flexDirection: "column",
        alignItems: "center"
    },
    bankrow: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 100
    },
    icon2: {
        fontSize: 16,
        ...Theme.Green_color_f
    },
    name: {
        fontSize: 14,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    Bank: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    type: {
        fontSize: 12,
        ...Theme.gray_color_h,
        ...Theme.Font_family,
        fontWeight: '500',
        

    },
    date:{
        fontSize: 12,
        ...Theme.gray_color_h,
        ...Theme.Font_family,
        fontWeight: '500',
    },
    Amount:{
        fontSize: 12,
        ...Theme.chart_red_color,
        ...Theme.Font_family,
        fontWeight: '500',
    },

    number: {
        fontSize: 14,
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "500",
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
    }
})