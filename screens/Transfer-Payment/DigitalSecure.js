import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton , OutlineButton } from '../../components/Buttons'
import React from 'react'
import Header from './components/Header'

const DigitalSecure = () => {

    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('DuetNowSent')
    }

    const RejectScreen = () => {
        navigation.navigate('Reject')
    }
    const Flatlist = [
        {
            name: 'Transfer from',
            value: "Rize Savings Account-i \n 700007123456789"

        },
        {
            name: 'Transfer to',
            value: "Hussien Lee  \n  Al-Rajhi Bank  \n  •••••••••••5431"
        },
        {
            name: 'Transfer type',
            value: " DuitNow Pay to Account"
        },
        {
            name: 'Date & time',
            value: "3 Dec 2021, 02:45 PM"
        },


    ];


    const renderItem = ({ item }) => (
        <>
            <View>
                <View style={styles.flatlistrow}>
                    <View>
                        <Text style={styles.nameHead}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.nameValue} >{item.value}</Text>
                    </View>
                </View>

            </View>

        </>
    );


    return (
        <View style={styles.container}>
            <Header
                style={{color:"ffffff"}}
                backtoPage={true}
                title={'Digital Secure'}
                backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
            />
            <ScrollView>

                <View style={styles.subheaderstyle}>
                    <Text style={styles.accountName}>Transaction authentication</Text>

                </View>

                <FlatList
                    data={Flatlist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <View style={styles.Amountss}>
                    <Text style={styles.headType}>Transfer amount</Text>
                    <Text style={styles.price}>AED 3,400.00</Text>
                </View>

            
                <View style={styles.btn}>
                    <OutlineButton text={'Reject'} textoutbtnsty={styles.outlinebtntext} outbuttonsty={styles.outlinebtn} onPress={RejectScreen} />                    
                    <RequestButton text={'Approve'} buttonsty={styles.btnsty} textbtnsty={styles.btntext} onPress={Navigate} />
                </View>

            </ScrollView>

        </View>
    )
}

export default DigitalSecure

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        padding:10
    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        marginTop: 15,
    },
    nameHead: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    nameValue: {
        fontSize: 14,
        marginLeft: 10,
        ...Theme.White_color_h,
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
        ...Theme.White_color_h,
        ...Theme.Font_family
    },
    subheaderstyle: {
        flex: 1,
        padding: 25,
        marginTop: 10,
    },
    accountName: {
        fontSize: 28,
        ...Theme.golden_color_h,
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

    
    Amountss: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20
    },
    price: {
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontSize: 24,
        fontWeight: "700",

    },
    
    btn:{
        flex: 1,
        alignItems:"center",
        justifyContent:"flex-end",
        borderColor:"white",
        marginTop: 20,
        
        
    },
    btnsty:{
    backgroundColor:"#FFFFFF",
    height:50,
    justifyContent: "center",
    alignContent: "center",
    },
    btntext:{
        ...Theme.Green_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        
    },
    outlinebtntext:{
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontWeight: '700',

        
    },
    outlinebtn:{
        height:50,
        borderColor: "#FFFFFF",
        backgroundColor:"transparent",

    }
    

})