import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/Illustration.png'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import ThemeSty from '../../assets/styles/basic'
import Steps from '../../components/steps/Steps'

const HowSearch = () => {
    const [progress, setProgress] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

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
        <Steps
        backtoPage={false}
        totalSteps={'6'}
        activeStep={'5'}
        backIcon={require('../../assets/CreateAccoutImages/back.png')}
        leftIcon={require('../../assets/CreateAccoutImages/settings.png')}
        rightIcon={require('../../assets/CreateAccoutImages/profile.png')}
        ProgressBarIcon={require('../../assets/CreateAccoutImages/progress.png')}
      />          
            <View>
                <Text style={{  fontSize: 28, fontWeight: "700", ...ThemeSty.Font_family ,...ThemeSty.Green_color_f }}>How should we reach you? </Text>
            </View>
            <View>
                <Text style={{ ...ThemeSty.gray_color_f, fontSize: 14, ...ThemeSty.Font_family }}>We’re always excited to announce our new products and offers. Let us know how you’d like to be updated </Text>
            </View>
            
            <View style={styles.Switches}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"center",}}>
                        <Icons.MaterialCommunityIcons name="email-minus-outline" style={{ fontSize: 16, ...ThemeSty.Green_color_f }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color:"black" ,  ...ThemeSty.Font_family }}>Email</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={'white'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} style={{alignItems:"flex-end"}} value={isEnabled} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Icons.MaterialCommunityIcons name="phone" style={{ fontSize: 16, ...ThemeSty.Green_color_f }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color:"black", ...ThemeSty.Font_family }}>Phone</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={'white'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} style={{ alignItems: "flex-end" }} value={isEnabled1} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Icons.AntDesign name="message1" style={{ fontSize: 16, ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }} />
                        <Text style={{ marginLeft: 10, fontSize: 16, color:"black", ...ThemeSty.Font_family }}>Text messages</Text>
                    </View>
                    <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={'white'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2} style={{ alignItems: "flex-end" }} value={isEnabled2} />
                </View>
            </View>
            
            <View style={{...styles.Notify , ...ThemeSty.bg_light_green_color}}>
                <Text style={{ fontSize: 14, fontWeight: "700", ...ThemeSty.Green_color_primary, ...ThemeSty.Font_family,lineHeight:30 }}>
                    Normal communications (non-marketing related) will be email by default. By tapping “Confirm”, I agree that SSSCO may process my personal data to promote the Bank’s products and services.
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