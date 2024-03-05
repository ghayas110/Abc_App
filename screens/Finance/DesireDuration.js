import { StyleSheet, Text, View, Button, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../assets/styles/basic'
import { SearchInput } from '../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { FilterButton, RequestButton } from '../../components/Buttons';
import Icons from '../../components/Icons';
import Header from './components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const DesireDuration = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

    const navigation = useNavigation()
    const [selectedItem, setSelectedItem] = useState(null);
    console.log(selectedItem, 'Selected')

    const ForWordnavigation = () => {
        navigation.navigate('TransferTO')
    }


    

    const Flatlist = [
        {
            name: '12 months (1 year)',
            id:"1"
        },
        {
            name: '24 months (2 years)',
            id: "2"
        },
        {
            name: '36 months (3 years)',
            id: "3"
        },
        {
            name: '48 months (4 years)',
            id: "4"
        },
        {
            name: '60 months (5 years)',
            id: "5"
        },
        {
            name: '72 months (6 years)',
            id: "6"
        },
        {
            name: '84 months (7 years)',
            id: "7"
        },

    ];



    const renderItem = ({ item }) => (
        <>
            <ScrollView>
                <TouchableOpacity
                    style={[styles.item, item.id === selectedItem && styles.selectedItem]}
                    onPress={() => setSelectedItem(item.id)}
                >
                <View style={styles.flatlistrow}>
                        <Text style={styles.name}>{item.name}</Text>
                </View>
                </TouchableOpacity>

            </ScrollView>

        </>
    );

    return (
        <>

            <View style={styles.container}>
                <View style={{ borderBottomWidth: 0.5, ...Theme.gray_border_Color, padding: 15 }}>
                    <Header
                        backtoPage={true}
                        title={"Desired Duration"}
                        backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}


                    />
                </View>
                    <FlatList
                        data={Flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />




            </View>
        </>
    )
}

export default DesireDuration

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    item: {
        // padding: 16,
    },
    selectedItem: {
        // backgroundColor: '#FFFFFF',
    },
    itemText: {
        fontSize: 16,
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

    name: {
        fontSize: 16,
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