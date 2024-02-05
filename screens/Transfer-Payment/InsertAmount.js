import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import React from 'react'
import Header from './components/Header'

const InsertAmount = () => {

    const navigation = useNavigation()
    const Navigate  = () =>{
        navigation.navigate('Review')
    }

    return (
        <View style={styles.container}>
            <Header
                backtoPage={true}
                backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
            />
            <ScrollView>

                <View style={styles.subheaderstyle}>
                    <Text style={styles.accountName}>Hussien Lee</Text>
                    <Text style={styles.accountDetaik}>Al Saudi Bank Saudi / Saudi by Al Saudi - •••••••••••5431
                        Savings Account-i</Text>
                </View>
                <View style={styles.ammouncontianer}>
                    <View style={styles.amount}>
                        <Text style={styles.amounttext}>AED</Text>
                        <View style={{...styles.viewStyle , flex:1}}>
                            <Text style={styles.headinput}>Amount</Text>
                            <ExampleInput placeholder={'Enter recipients reference'} inputstyle={styles.inputamount} />
                        </View>
                    </View>
                    <View style={styles.ammountexampleboxs}>
                        <View style={styles.ExampleAmount}>
                            <Text style={styles.ExampleAmounttext}>AED</Text>
                            <Text style={styles.ExampleAmounttext}>100</Text>
                        </View>
                        <View style={styles.ExampleAmount}>
                            <Text style={styles.ExampleAmounttext}>AED</Text>
                            <Text style={styles.ExampleAmounttext}>200</Text>
                        </View>
                        <View style={styles.ExampleAmount}>
                            <Text style={styles.ExampleAmounttext}>AED</Text>
                            <Text style={styles.ExampleAmounttext}>300</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.recipient}>
                    <View>
                        <View style={styles.viewStyle}>
                            <Text style={styles.headinput}>Recipient reference <Icons.MaterialCommunityIcons name="information-outline" style={{ ...Theme.Green_color_f }} /></Text>
                            <ExampleInput placeholder={'Enter recipients reference'} inputstyle={styles.inputamount} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewStyle}>
                            <Text style={styles.headinput}>Other payment details (Optional)</Text>
                            <ExampleInput placeholder={'Enter recipients reference'} inputstyle={styles.inputamount} />
                        </View>
                    </View>
                </View>


                <View style={styles.transder}>
                    <View>
                        <Text style={styles.headinput}>Transfer from <Icons.MaterialCommunityIcons name="information-outline" style={{...Theme.Green_color_f }} /></Text>
                    </View>
                     <View style={styles.savingAccountcheckbox}>
                        <View>
                            <Text style={styles.transfertext}>Rize Savings Account-i</Text>
                            <Text style={styles.transferNum}>700007123456789</Text>
                        </View>
                        <View style={{alignItems: "flex-end"}}>
                            <Text style={styles.transferCheck}>
                                <CheckBoxInput style={styles.checkedbox} color={"#00a200"} />
                            </Text>
                            <Text style={styles.transferNum}>AED 80,000.00</Text>
                        </View>
                     </View>
                     <View style={{alignItems:"center" , padding:16}}>
                        <RequestButton text={'Continue'} onPress={Navigate} />
                     </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default InsertAmount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding:5,
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
        marginTop: 30
    },
    ExampleAmount: {
        borderWidth: 0.5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,        
        marginHorizontal:5,
        ...Theme.green_border_Color
    },
    ExampleAmounttext: {
        ...Theme.Font_family,
        ...Theme.Green_color_f,
        fontWeight: '700',
        fontSize: 14,
    },
    ammountexampleboxs: {
        flexDirection: "row",
        justifyContent: "center",        

    },
    recipient: {
        flex: 1,

    },
    viewStyle: {
        padding: 20,
        margin: 0,
    },
    inputamount: {
        color:"black",
        padding: 5,
        borderWidth: 0.5,

    },
    headinput:{
        fontSize: 16,
        fontWeight:"700",
        ...Theme.black_color_f
        
    },
    transder:{
        flex: 1,
        padding: 15,
        paddingLeft: 15,
        
    },
    transfertext:{
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_f,
        ...Theme.Font_family
    },
    savingAccountcheckbox:{
        borderWidth:0.5,
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 10,
        ...Theme.gray_border_Color,
        borderRadius: 10,        
    },
    checkedbox:{
        ...Theme.bg_green_color,
        alignSelf:"flex-end",
        borderRadius:10,
    },
    transferNum:{
        fontSize: 16,
        marginTop:5,
        fontWeight: "500",
        ...Theme.gray_color_f,
        ...Theme.Font_family
    }

})