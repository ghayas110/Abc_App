import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../assets/styles/basic'
import { SearchInput } from '../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { FilterButton, RequestButton } from '../../components/Buttons';
import Icons from '../../components/Icons';
import Header from './components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const AccountType = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('TransferTO')
    }

    const Flatlist = [
        {
            name: 'Savings',
        },
        {
            name: 'Current',
        },
        {
            name: 'Financing',
        },
        {
            name: 'Credit Card',
        },
       
    ];



    const renderItem = ({ item }) => (
        <>
            <View>
                <View style={styles.flatlistrow}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>

            </View>

        </>
    );

    return (
        <>

            <View style={styles.container}>
                <View style={{ borderBottomWidth: 0.5, ...Theme.gray_border_Color, padding: 15 }}>
                    <Header
                        backtoPage={true}
                        title={"Account Type"}
                        backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}


                    />
                </View>
                <ScrollView >
                    <FlatList
                        data={Flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </ScrollView>



            </View>
        </>
    )
}

export default AccountType

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },

    Input: {
        ...Theme.Font_family,
        fontSize: 16,
        fontWeight: "500",
        ...Theme.Light_gray_color_f,
        marginTop: 15,

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
        padding: 10,
        marginTop: 15,
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
        fontWeight: "500"
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "500",
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
    }


});