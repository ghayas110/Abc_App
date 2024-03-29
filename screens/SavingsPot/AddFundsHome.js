import { StyleSheet, Text, View, ImageBackground, ProgressBarAndroid, TouchableOpacity } from 'react-native'
import BackgroundImage from '../../assets/SavingPotsImages/createSavingPot2.png'
import Icons from '../../components/Icons';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '../../assets/styles/basic'
import React, { useState, useEffect } from 'react'

const AddFundsHome = () => {
    const [progress, setProgress] = useState(5)
    const navigation = useNavigation()
    const navigateAddfunds = () =>{
        navigation.navigate('AddFunds')
    }
    const navigateWithdrawFund = () => {
        navigation.navigate('WithdrawFund')
    }
    useEffect(() => {
        // Simulating progress increase over time
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 0.1;
                return newProgress < 1 ? newProgress : 1;
            });
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.Header} source={BackgroundImage} >
                <View style={styles.headerIcon}>
                    <Icons.MaterialIcons name="arrow-back-ios" style={styles.Icons} />
                    <View style={styles.rightIcon}>
                        <Icons.AntDesign name="delete" style={styles.Icons} />
                        <Icons.AntDesign name="edit" style={styles.Icons} />

                    </View>
                </View>
                <View style={styles.Heading}>
                    <Text style={styles.headingText}>My Umrah</Text>
                    <Text style={styles.headingPara}>Yay! Start saving by adding funds to your pot.</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons.MaterialCommunityIcons name="calendar-month-outline" style={styles.headingIcons} />
                        <Text style={styles.headingsss}>Expected completion date 1 Apr 2024</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.Bottom}>
                <View style={styles.boxes}>
                    <TouchableOpacity onPress={navigateWithdrawFund}>
                        <View style={styles.box1}>
                            <Icons.AntDesign name="minus" style={styles.plusIcons} />
                        </View>
                        <Text style={styles.boxText}>Withdraw   Funds</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxes}>
                    <TouchableOpacity onPress={navigateAddfunds}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="plus" style={styles.plusIcons} />
                        </View>
                        <Text style={styles.boxText}>Add   Funds</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxes}>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Icons.AntDesign name="upload" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>Contribute to My Goal</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Cards}>
                <Text style={styles.CardHeading}>Total saved</Text>
                <Text style={styles.CardHeadingPrice}>AED 0.00</Text>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={progress}
                    color="green"
                />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={styles.Cardtext}>0%</Text>
                    <Text style={styles.Cardtext}>AED 30,000.00</Text>
                </View>
            </View>
        </View>
    )
}

export default AddFundsHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        // padding: 10,
    },
    Header: {
        flex: 1.8,
        resizeMode: "cover",
        padding: 10

    },
    Heading: {
        flex: 2,
        padding: 10,
        paddingLeft: 18,

        justifyContent: "center"
    },
    headerIcon: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    },
    rightIcon: {
        flexDirection: "row",
        // alignItems: "center"
    },
    Icons: {
        fontSize: 24,
        marginHorizontal: 5,
        ...Theme.White_color_h

    },
    Bottom: {
        // backgroundColor: "yellow",
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        backgroundGradient: {
            colors: ['#313131', '#2E2E2E'],
            start: { x: 0, y: 56 },
            end: { x: 8, y: 0 },
        },
    },
    headingIcons: {
        fontSize: 24,
        ...Theme.White_color_h,
        fontWeight: "700"
    },
    headingText: {
        fontSize: 24,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontWeight: "700",
    },
    headingPara: {
        fontSize: 16,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
        marginTop: 10

    },
    headingsss: {
        fontSize: 12,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
        marginLeft: 5,

    },
    Cards: {
        position: "absolute",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        top: 380,
        bottom: 0,
        right: 0,
        left: 25,
        zIndex: 50,
        width: 300,
        height: 160,
        borderRadius: 16,
        borderWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    },
    CardHeading: {
        fontWeight: "600",
        fontSize: 16,
        ...Theme.black_color_h,
        ...Theme.Font_family
    },
    CardHeadingPrice: {
        fontWeight: "600",
        fontSize: 24,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        marginTop: 10,

    },
    Cardtext: {
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontSize: 16,

    },
    box: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 20,
        borderWidth: 0.5,
        ...Theme.green_border_Color,
        ...Theme.bg_green_color,



    },
    box1: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 20,
        borderWidth: 0.5,
        ...Theme.green_border_Color,
        ...Theme.bg_Maroon_color,
    },
    boxText: {
        ...Theme.black_color_f,
        textAlign: "center",
        ...Theme.Font_family,
        fontWeight: "700",
        marginTop: 5,

    },
    Icons: {
        ...Theme.White_color_h,
        fontSize: 24,

    },
    boxes: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 70,
        margin: 10

    },
    plusIcons: {
        ...Theme.White_color_h,
        // ...Theme.bg_green_color,
        fontSize: 24,

    }
})