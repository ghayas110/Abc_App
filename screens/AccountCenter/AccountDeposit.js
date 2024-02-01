import { StyleSheet, Text, View , Image } from 'react-native'
import Vise from '../../assets/accountCenterImage/Visa.png'
import { useNavigation } from '@react-navigation/native'
import Header from './components/Header'
import Theme from "../../assets/styles/basic"
import Icons from '../../components/Icons'
import React from 'react'

const AccountDeposit = () => {
   const navigation = useNavigation()
   const HandleNavigate = () => {
    navigation.navigate('')
   }
     
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Header
                    title={"Deposit Account"}
                    backtoPage={true}
                    backtoPage2={true}
                    backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                />
            </View>
            <View style={styles.HeaderAmount}>
                <Text style={styles.spendingText}>Spending Balance <Icons.AntDesign name="infocirlceo" style={styles.headericon} /> </Text>
                <Text style={styles.AmounText}>AED 10,000.00</Text>
            </View>
            <View style={styles.AccountInformationContainer}>
                <Text style={styles.InformationHeaderText}>Account information</Text>
                <View style={styles.information}>
                    <View style={styles.informationtextContainer}>
                        <Text style={styles.informationtext}>Account holder</Text>
                        <Text style={styles.informationtext2}>Razak Bin Osman</Text>
                    </View>
                    <View style={styles.informationtextContainer2}>
                        <View>
                            <Text style={styles.informationtext}>Account number</Text>
                            <Text style={styles.informationtext2}>912010114562356</Text>
                        </View>
                        <View>
                            <Icons.MaterialIcons name="content-copy" style={styles.CopyIcon} />
                        </View>
                    </View>
                    <View style={styles.informationtextContainer}>
                        <Text style={styles.informationtext}>Account type</Text>
                        <Text style={styles.informationtext2}>Rize Savings Account-i</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomCin}>
                    <View style={styles.VisaCont}>
                       <Image source={Vise} style={styles.VisaImage} />
                    </View>
                    <Text style={styles.bottomText}>Linked to Rize Debit Card-i</Text>
                </View>
                
            </View>
        </View>
    )
}

export default AccountDeposit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth:1,
    },
    Header: {
        borderWidth: 0.5,
        padding: 10,
    },
    HeaderAmount: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingVertical: 20
    },
    spendingText: {
        fontSize: 16,
        ...Theme.Light_gray_color_f,
        fontWeight: '500',
        ...Theme.Font_family

    },
    AmounText: {
        fontSize: 24,
        ...Theme.black_color_h,
        fontWeight: '700',
        ...Theme.Font_family
    },
    headericon: {
        fontSize: 16,
        ...Theme.Green_color_h,
        fontWeight: '500',
        ...Theme.Font_family,
        marginLeft: 5
    },
    AccountInformationContainer: {
        padding: 15,
        borderBottomWidth: 0.5,
        ...Theme.gray_border_Color
    },
    InformationHeaderText: {
        fontSize: 20,
        ...Theme.black_color_h,
        fontWeight: '700',
        ...Theme.Font_family,
        paddingVertical: 10,
        marginLeft: 13,
        
    },
    information: {
        padding: 10
    },
    informationtext: {
        fontSize: 12,
        ...Theme.gray_color_h,
        fontWeight: '12',
        ...Theme.Font_family,
    },
    informationtextContainer2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:5,
        paddingVertical:5
    },
    informationtextContainer:{
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    informationtext:{
        fontSize: 12,
        ...Theme.Font_family,
        ...Theme.gray_color_f,
        fontWeight: '500',
    },
    informationtext2:{
        fontSize: 16,
        ...Theme.Font_family,
        ...Theme.black_color_h,
        fontWeight: '500',
    },
    CopyIcon:{
        fontSize: 20,
        ...Theme.Green_color_f,
    },
    bottomCin:{
        flexDirection:"row",
        alignItems: 'center',
        padding:10,
        marginLeft: 13,
    },
    VisaCont:{
        ...Theme.bg_green_color,
         padding:10,
         paddingHorizontal:15,
         borderRadius:15,
    },
    bottomText:{
        marginLeft: 10,
        fontSize: 16,
        ...Theme.gray_color_h,
        ...Theme.Font_family
        
        
    }
    


})