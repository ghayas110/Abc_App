import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/Illustration.png'
import { RequestButton, OutlineButton } from '../../components/Buttons'

const HowSearch = () => {
    const [progress, setProgress] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [progress]);

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('PersonalDetails')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.Progress}>
                <View></View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icons.AntDesign name='setting' style={{ fontSize: 24, marginRight: 5, color: "#0038A4" }} />
                    <View>
                        <Text>step 5 to 6 </Text>
                        <ProgressBar progress={progress} width={80} />
                    </View>
                    <Icons.Entypo name='wallet' style={{ fontSize: 24, marginLeft: 5, }} />
                </View>
                <View></View>
            </View>            
            <View>
                <Text style={{ color: "#00A200", fontSize: 28, fontWeight: "700", fontFamily: "Poppins" }}>How should we reach you? </Text>
            </View>
            <View>
                <Text style={{ color: "#808080", fontSize: 14, fontFamily: "Poppins" }}>We’re always excited to announce our new products and offers. Let us know how you’d like to be updated </Text>
            </View>
            
            <View style={styles.Switches}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"center",}}>
                        <Icons.MaterialCommunityIcons name="email-minus-outline" style={{ fontSize: 16, color:"#00A200" }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color: "#00A200" }}>email</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={isEnabled ? '#00A200' : '#00A200'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} style={{alignItems:"flex-end"}} value={isEnabled} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Icons.MaterialCommunityIcons name="phone" style={{ fontSize: 16, color: "#00A200" }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color: "#00A200" }}>Phone</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={isEnabled ? '#00A200' : '#00A200'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} style={{ alignItems: "flex-end" }} value={isEnabled} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Icons.AntDesign name="message1" style={{ fontSize: 16, color: "#00A200" }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color: "#00A200" }}>Text massages</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={isEnabled ? '#00A200' : '#00A200'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} style={{ alignItems: "flex-end" }} value={isEnabled} />
                </View>
            </View>
            
            <View style={styles.Notify}>
                <Text style={{ color: "#00A200", fontSize: 14, fontWeight: "700", fontFamily: "poppins" }}>
                    Normal communications (non-marketing related) will be email by default. By tapping “Confirm”, I agree that Al Rajhi Bank may process my personal data to promote the Bank’s products and services.
                </Text>
            </View>
            <View >
                <View style={styles.btn2}>
                    <RequestButton text={'Confirm'} onPress={ForWordnavigation} />
                </View>
            </View>
        </View>
    )
}

export default HowSearch

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        justifyContent: "space-evenly"
    },
    Progress: {
        justifyContent: 'center',
        flexDirection: "row",
    },
    Image: {
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',

    },
    headerText: {
        padding: 10,
    },
    Notify: {
        padding: 20,
        backgroundColor: "#DCF2FC",
    },
    btn2: {
        alignItems: "center"
    },
    btn1: {
        alignItems: "center"
    }

})