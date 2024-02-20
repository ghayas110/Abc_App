import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'
import React from 'react'
import NotificationIcon from '../../assets/TopUp/TopUpFaqLogout.png'
import LogoutIcon from '../../assets/TopUp/TopUpNotification.png'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({onPress}) => {
    const naivgation = useNavigation()
    return (
        <>
            <View style={styles.MainHeader}>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <View style={styles.RoundProfile}>
                        <Text style={styles.RoundProfileText} onPress={() => {naivgation.navigate("SettingServices")}}>AR</Text>
                    </View>
                    <Text style={styles.HeaderName} onPress={() => {naivgation.navigate("SettingServices")}}>Razak</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={LogoutIcon}></Image>
                    <TouchableOpacity onPress={onPress}>
                        
                    <Image style={{marginLeft:15}} source={NotificationIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    MainHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    RoundProfile: {
        backgroundColor: '#00A200',
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5
    },
    RoundProfileText: {
        fontFamily: "Poppins-Bold",
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
        backgroundColor: '#00A200',
        height: 55,
        width: 55,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    HeaderName: {
        marginLeft: 15,
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        color: 'black'
    }
})