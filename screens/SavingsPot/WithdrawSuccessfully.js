import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Header from './components/Header';
import SuccessImage from "../../assets/SavingPotsImages/FundSuccessfycreate.png"
import { useNavigation } from '@react-navigation/native';
import Theme from '../../assets/styles/basic'
import { RequestButton, OutlineButton } from '../../components/Buttons';

const WithdrawSuccessfully = () => {
    const navigation = useNavigation()
    const HandleNavigate = () => {
        navigation.navigate("SavingPots")
    }
    const HandleNavigatetoFunds = () => {
        navigation.navigate("AddFundsHome")
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header
                    backtoPage={true}
                    backtoPage2={true}
                    backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                />
            </View>
            <View style={styles.Image}>
                <Image source={SuccessImage} />
            </View>
            <View style={styles.Heading}>
                <Text style={styles.HeadingText}>Your transaction is successful!</Text>
                {/* <Text style={styles.HeadingPara}>Keep saving to achieve more of your goals</Text> */}
            </View>
            <View style={styles.Bottom}>
                <RequestButton text={"Done"} onPress={HandleNavigatetoFunds} />

            </View>


        </View>
    )
}

export default WithdrawSuccessfully

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
    header: {
        flex: 0.3,
        // backgroundColor:"yellow",
    },
    Image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Heading: {
        flex: 1,
        padding: 10
    },
    Bottom: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    HeadingText: {
        ...Theme.Font_family,
        ...Theme.Green_color_f,
        fontSize: 28,
        fontWeight: '700',
    },
    HeadingPara: {

        ...Theme.Font_family,
        ...Theme.Light_gray_color_f,
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10
    }

})