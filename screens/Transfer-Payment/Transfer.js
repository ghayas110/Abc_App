import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../assets/styles/basic'
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native'
import { FilterButton, RequestButton } from '../../components/Buttons';
import DuetImg from '../../assets/transferPaymentImages/DuetIcons.png'
import QrDuetImg from '../../assets/transferPaymentImages/qrduetIcon.png'
import Icons from '../../components/Icons';
import { CheckBoxInput } from '../../components/Inputs';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const Transfer = () => {
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
            name: 'Bank Account', Icon: <Icons.MaterialCommunityIcons name="bank-outline" style={styles.icon} onPress={ForWordnavigation} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} onPress={ForWordnavigation} />
        },
        { name: 'Mobile Number', Icon: <Icons.AntDesign name="contacts" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} /> },
        {
            name: 'MyKad', Icon: <Icons.MaterialCommunityIcons name="card-bulleted-outline" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} /> },
        { name: 'MyPolis/MyTentera', Icon: <Icons.MaterialIcons name="local-police" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} /> },
        { name: 'Business Registration Number', Icon: <Icons.MaterialIcons name="business-center" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} /> },
        { name: 'Passport Number', Icon: <Icons.MaterialCommunityIcons name="passport" style={styles.icon} />, Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} /> },
        // Add more items as needed
    ];
    const data = [
        {
            name: 'My Umrah - Profit Earned',
            Image: <Image source={DuetImg} style={styles.inmages} />,
            key: "1",
            Forward: <Icons.MaterialIcons name="arrow-forward-ios" onPress={toggleBottomSheet} style={styles.IConfor} />

        },
        {
            name: 'My Umrah - Profit Earned',
            Image: <Image source={QrDuetImg} style={styles.inmages} />,
            key: "1",
            Forward: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.IConfor} />

        },
        {
            name: 'My Umrah - Profit Earned',
            Image: <Image source={DuetImg} style={styles.inmages} />,
            key: "1",
            Forward: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.IConfor} />

        },
    ];


    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <View style={styles.flatlistrow}>
                <View style={{flexDirection:'row' , alignItems:"center"}}>
                    <Text>{item.Icon}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <Text >{item.Icon2}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View style={{ backgroundColor: "#FFFFFF", borderBottomWidth: 0.5, ...Theme.ligth_gray_border_Color }}>
                <Header
                    backtoPage={true}
                    title="Transfer"
                    backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
            </View>
            <ScrollView style={{ padding: 5, backgroundColor: "#FFFFFF" }}>

                <View style={styles.tableContainer}>

                    {data.map(item => (
                        <>
                            <View key={item.id} style={styles.tableRow}>
                                <Text style={styles.cell}>{item.Image}</Text>
                                <Text style={{ ...styles.cell2 }}>{item.name}</Text>
                                <Text style={{ ...styles.cell, marginLeft: 50 }}>{item.Forward}</Text>
                            </View>
                        </>
                    ))}

                </View>

                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                            <View>
                                <Text style={{ fontSize: 24, fontWeight: '700', ...Theme.Green_color_h, ...Theme.Font_family }} >Select your transfer type to</Text>
                            </View>
                            <FlatList
                                data={Flatlist}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />



                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </>
    )
}

export default Transfer

const styles = StyleSheet.create({
    tableContainer: {

        padding: 10,
        margin: 0,
        // marginRight: -45
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 10,
    },
    headerCell: {
        flex: 1,
        fontWeight: '700',
        fontSize: 16,
        ...Theme.Font_family,
        ...Theme.black_color_h


    },
    cell: {
        flex: 0.2,
        fontWeight: "700",
        ...Theme.Font_family,
        ...Theme.green_color_f
    },
    cell2: {
        flex: 1.5,
        fontWeight: "500",
        ...Theme.Font_family,
        fontSize: 16,
        ...Theme.black_color_h,
    },
    Datetb: {
        flex: 1,
        fontWeight: "500",
        ...Theme.Font_family,
        fontSize: 12,
        ...Theme.Light_gray_color_f
    },
    filterbtn: {
        paddingLeft: 7,
        marginTop: 10
    },
    textcheck: {
        textAlign: "center"
    },
    IConfor: {
        ...Theme.Green_color_h,
        fontSize: 24,
        fontWeight: '700'

    },
    inmages: {
        resizeMode: 'contain',


    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding:10
    },
    icon: {
        fontSize: 24,
        ...Theme.Green_color_f   
    },
    icon2:{
        fontSize: 16,
        ...Theme.Green_color_f  
    },
    name:{
        fontSize: 16,
        marginLeft:10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        
    }


});