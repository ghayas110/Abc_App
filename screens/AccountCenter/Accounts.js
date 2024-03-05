import { StyleSheet, Text, View, ScrollView, Image, ProgressBarAndroid } from 'react-native'
import Theme from "../../assets/styles/basic"
import Icons from '../../components/Icons'
import Image1 from '../../assets/accountCenterImage/createSavingPot1.png'
import Image2 from '../../assets/accountCenterImage/createSavingPot2.png'
import Image3 from '../../assets/accountCenterImage/createSavingPot3.png'
import Image4 from '../../assets/accountCenterImage/createSavingPot4.png'
import Image5 from '../../assets/accountCenterImage/createSavingPot5.png'
import Image6 from '../../assets/accountCenterImage/createSavingPot6.png'
import { useNavigation } from '@react-navigation/native'
import React, {useState , useEffect} from 'react'

const Accounts = () => {
    const [progress, setProgress] = useState(5)
    useEffect(() => {
        // Simulating progress increase over time
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 0.1;
                return newProgress < 1 ? newProgress : 1;
            });
        }, 90000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const navigation = useNavigation()
    const AllView = () => {
        navigation.navigate('AccountDeposit');
    }
    const HandleNavigate = () => {
        navigation.navigate('SavingPots')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Account Centre</Text>
            </View>
            <ScrollView style={styles.cardContainer}>
                <View style={styles.balanceCard}>
                    <Text style={styles.balanceText}>Total Balance</Text>
                    <Text style={styles.balanceText2}>AED 42,140.00</Text>
                </View>
                {/* =====deposit card==== */}
                <View style={styles.AccountBalance}>
                    <View style={styles.accountCardHeader}>
                        <View style={styles.Headertext}>
                            <Text style={styles.textDeposit}>Deposit Account</Text>
                            <Text style={styles.textViewAll} onPress={AllView}>View all  <Icons.MaterialIcons name="arrow-forward-ios" style={styles.textIcon} /></Text>
                        </View>
                        <View style={styles.Headertext}>
                            <Text style={styles.textlinktext}><Icons.MaterialCommunityIcons name="link" />Linked to SSSSCO Debit Card-i</Text>
                        </View>
                    </View>
                    <View style={styles.accountCardFooter}>
                        <Text style={styles.footertexthead}>SSSSCO Savings Account-i</Text>
                        <Text style={styles.footertext}>AED 10,000.00</Text>
                    </View>

                </View>

                {/* =======saving card===== */}

                <View style={styles.savingCard}>
                    <View style={styles.savingCardheader}>
                        <View style={styles.savingCardHeadertext}>
                            <Text style={styles.textSaving}>Savings Pot</Text>
                            <Text style={styles.textViewAll} onPress={HandleNavigate}>View all  <Icons.MaterialIcons name="arrow-forward-ios" style={styles.textIcon} /></Text>
                        </View>
                        <View style={styles.savingCardHeadertext2}>
                            <Text style={styles.textSavingtext2}>Savings pot balance:</Text>
                            <Text style={styles.textNumber}>AED 32,140.00</Text>
                        </View>

                    </View>
                    <View style={styles.SavingsPots}>
                        <View style={styles.savingpotcard}>
                            <View style={styles.ImageContainer}>
                                <Image source={Image1} style={styles.savingCardImage} />
                            </View>
                            <View style={styles.savingpottextcontianer}>
                                <Text style={styles.savingpottext}>My Umrah</Text>
                                 <View style={{width:200, }}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={progress}
                                        color="green"
                                        
                                    />
                                 </View>
                              
                                <Text style={styles.savingPercent}>80% completed</Text>
                            </View>
                        </View>
                        {/* <View style={styles.savingpotcard}>
                            <View style={styles.ImageContainer}>
                                <Image source={Image2} style={styles.savingCardImage} />
                            </View>
                            <View style={styles.savingpottextcontianer}>
                                <Text style={styles.savingpottext}>Trip to Kyoto</Text>
                                <View style={{ width: 200, }}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={progress}
                                        color="green"

                                    />
                                </View>

                                <Text style={styles.savingPercent}>80% completed</Text>
                            </View>
                        </View>
                        <View style={styles.savingpotcard}>
                            <View style={styles.ImageContainer}>
                                <Image source={Image3} style={styles.savingCardImage} />
                            </View>
                            <View style={styles.savingpottextcontianer}>
                                <Text style={styles.savingpottext}>New Phone</Text>
                                <View style={{ width: 200, }}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={progress}
                                        color="green"

                                    />
                                </View>

                                <Text style={styles.savingPercent}>80% completed</Text>
                            </View>
                        </View> */}
                        <View style={styles.savingpotcard}>
                            <View style={styles.ImageContainer}>
                                <Image source={Image4} style={styles.savingCardImage} />
                            </View>
                            <View style={styles.savingpottextcontianer}>
                                <Text style={styles.savingpottext}>Makkah</Text>
                                <View style={{ width: 200, }}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={progress}
                                        color="green"

                                    />
                                </View>

                                <Text style={styles.savingPercent}>80% completed</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* =======saving card===== */}
            </ScrollView>


        </View>
    )
}

export default Accounts

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        padding: 10
    },
    header: {
        // height:100,
        // backgroundColor:"red",
        padding: 10,
        borderBottomWidth: 0.5,
        ...Theme.gray_border_Color,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        textAlign: "center",
        ...Theme.black_color_h,
        fontWeight: "700",
        fontSize: 20,
    },
    balanceCard: {
        height: 90,
        borderRadius: 15,
        borderWidth: 0.5,
        padding: 15,
        backgroundColor: "#E6E6E6",
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    },
    accountCardHeader: {
        // borderBottomWidth:0.5,
    },
    accountCardFooter: {
        // padding:10,
        marginTop: 10
    },
    balanceText: {
        fontSize: 14,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
    },
    balanceText2: {
        fontSize: 20,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "700",
    },
    cardContainer: {
        padding: 10,
        paddingVertical:20

    },

    AccountBalance: {
        // height: 90,
        borderRadius: 15,
        borderWidth: 0.5,
        padding: 15,
        backgroundColor: "#FFFFFF",
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        // paddingVertical: 16,
        // paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    },
    Headertext: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textDeposit: {
        fontWeight: '600',
        fontSize: 16,
        ...Theme.black_color_h,
        ...Theme.Font_family
    },
    textViewAll: {
        fontWeight: '600',
        fontSize: 16,
        ...Theme.Green_color_h,
        ...Theme.Font_family
    },
    textlinktext: {
        fontSize: 12,
        ...Theme.Font_family,
        ...Theme.Light_gray_color_f,
        fontWeight: '500',
    },
    footertexthead: {
        fontSize: 14,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
    },
    footertext: {
        fontSize: 20,
        fontWeight: "700",
        ...Theme.black_color_h,
        ...Theme.Font_family,
    },
    savingCard: {
        borderRadius: 15,
        borderWidth: 0.5,
        // padding: 15,
        backgroundColor: "#FFFFFF",
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    },
    savingCardHeadertext:{
        flexDirection:"row",
        justifyContent:"space-between",
        // marginTop:10 ,
        
    },
    savingCardHeadertext2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },
    savingCardheader:{
        borderBottomWidth:0.5,
        ...Theme.ligth_gray_border_Color,
        padding:15
    },
    textSaving:{
        fontWeight: '600',
        fontSize: 16,
        ...Theme.Font_family,
        ...Theme.black_color_h,
        },
     textSavingtext2:{
         fontWeight: '500',
         fontSize: 14,
         ...Theme.Font_family,
         ...Theme.black_color_h,
     },
     textNumber:{
         fontWeight: '700',
         fontSize: 16,
         ...Theme.Font_family,
         ...Theme.black_color_h,
     },
    savingpotcard:{
        flexDirection:"row",
        alignContent:"center",
        padding:15
    },
    savingCardImage:{
        resizeMode:"contain",
        height: 60,
        width: 60
    },
    savingpottextcontianer:{
      marginLeft:5
    },
    savingpottext:{
        fontWeight: '500',
        fontSize: 14,
        ...Theme.Font_family,
        ...Theme.black_color_h,
    },
    savingPercent:{
        fontWeight: '500',
        fontSize: 10,
        ...Theme.Font_family,
        ...Theme.Light_gray_color_f,
    }   
})