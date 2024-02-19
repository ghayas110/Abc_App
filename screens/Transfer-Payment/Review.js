import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import React from 'react'
import Header from './components/Header'

const Review = () => {

    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('DigitalSecure')
    }
    const Flatlist = [
        {
            name: 'Recipient reference',
            value:"Happy Birthday",
            key:"1"

        },
        {
            name: 'Other payment details',
            value: "Hermès Bag",
            key: "2"
        },
        {
            name: 'Date & time',
            value: "3 Dec 2021, 02:45 PM",
            key: "3"
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
            <Header
                backtoPage={true}
                title={'Review Transaction'}
                backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
            />
            <ScrollView>

                <View style={styles.subheaderstyle}>
                    <Text style={styles.accountName}>Hussien Lee</Text>
                    <Text style={styles.accountDetaik}>Dubai Islamic Bank - •••••••••••5431
                        Savings Account-i</Text>
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
        
                <View style={styles.transder}>
                    <View>
                        <Text style={styles.headinput}>Transfer from <Icons.MaterialCommunityIcons name="information-outline" style={{ ...Theme.Green_color_f }} /></Text>
                    </View>
                    <View style={styles.savingAccountcheckbox}>
                        <View>
                            <Text style={styles.transfertext}>Savings Account-i</Text>
                            <Text style={styles.transferNum}>700007123456789</Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={styles.transferCheck}>
                                <CheckBoxInput style={styles.checkedbox} color={'#00a200'} />
                            </Text>
                            <Text style={styles.transferNum}>AED 80,000.00</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.tranferInstruc}>
                            I have read and agreed to the  DuitNow Transfer Terms and Conditions.
                        </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center" , padding:10,}}>
                        <CheckBoxInput style={{ ...Theme.Green_color_h }} color={'#00a200'} /> 
                        <Text style={{...Theme.black_color_f , ...Theme.Font_family ,marginLeft:5}}>
                               I have read and agreed to the  <Text style={{...Theme.Green_color_f}}>DuitNow Transfer Terms and Conditions.</Text> 
                        </Text>
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
        backgroundColor: "#FFFFFF",
        padding: 10
    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight: 10,
        padding: 5,
        marginTop: 15,
    },
    nameHead: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    nameValue:{
        fontSize: 14,
        marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight:"500"
    },
    tranferInstruc:{
        ...Theme.Light_gray_color_f,
        fontSize: 12,
        padding:5
        
    },
    headType:{
        fontSize:16,
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family
    },
    subheaderstyle: {
        flex: 1,
        padding: 15,
        marginTop: 10,
        borderBottomWidth: 0.5
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
    Amountss:{
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20
    },
    price:{
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontSize: 24,
        fontWeight: "700",
        
    },
    tranferInstruc2:{
        flexDirection:"row"
    }

})