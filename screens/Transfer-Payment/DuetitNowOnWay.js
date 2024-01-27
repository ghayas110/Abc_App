import { StyleSheet, Text, View, Image } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import image from '../../assets/transferPaymentImages/duetNowOnWay.png'
import React from 'react'
import Header from './components/Header'

const DuetitNowOnWay = () => {

    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('DigitalSecure')
    }
    


    


    return (
        <View style={styles.container}>
            
                <View style={styles.subheaderstyle}>
                <Image source={image} />
                    <Text style={styles.accountName}>Aha! DuitNow is on its way</Text>
                </View>

        </View>
    )
}

export default DuetitNowOnWay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        flexDirection:"row",
        paddingTop: 10,
        paddingBottom: 10,
    },
    
    subheaderstyle: {
        padding: 15,
        marginTop: 10,
    },
    accountName: {
        fontSize: 28,
        ...Theme.Green_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },

  
})