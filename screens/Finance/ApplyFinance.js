import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import FinanceImage from '../../assets/Finance/finance1.png'
import { RequestButton, OutlineButton } from '../../components/Buttons'
import ThemeSty from "../../assets/styles/basic"
import Steps from '../../components/steps/Steps'
import ActivationSteps from '../../components/steps/ActivationSteps'
const { width, height } = Dimensions.get('window');
const ApplyFinance = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const navigation = useNavigation()

    const ForWordnavigation = () => {
        navigation.navigate('HowSearch')
    }
    return (
        <View style={styles.container}>
    
            <View style={styles.Image}>
                <View>
                    <Image source={require("../../assets/Finance/finance1.png")} style={{width:width*0.6,height:height*0.3,resizeMode:'contain' }}/>
                </View>
            </View>
            <View style={styles.headerText}>
                <Text style={{  fontSize: 28, fontWeight: "700",paddingBottom:10,  ...ThemeSty.Font_family , ...ThemeSty.Green_color_f }}>
                    Let's Get Started
                </Text>
                <Text style={{ fontSize: 16,lineHeight:24, fontWeight: "700", ...ThemeSty.gray_color_f , ...ThemeSty.Font_family }}>
                Please complete the 3 steps below to get your Rize Personal Financing-i
                </Text>
            </View>
            <View style={styles.headerText1}>
            <ActivationSteps
                    verticalLineImage={require('../../assets/SignUp/line.png')}
                    image_a={require('../../assets/Finance/person.png')}
                    text_a={`Applicannt  ${'\n'}  Details`}
                    image_b={require('../../assets/Finance/file.png')}
                    text_b={`Upload ${'\n'} Documents`}
                    image_c={require('../../assets/Finance/aproval.png')}
                    text_c={`Final ${'\n'} Acceptance`}
                    cards={3}
                />
               
            </View>
     
            <View >
                <View style={styles.btn1}>
                    <OutlineButton text={'Go to Financing Center'} onPress={()=>navigation.goBack()}/>
                </View>
                <View style={styles.btn2}>
                    <RequestButton text={'Continue'} onPress={()=>navigation.navigate('ApplyPF')} />
                </View>
            </View>
        </View>
    )
}

export default ApplyFinance

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 26,
        paddingTop: 46,
        justifyContent:"space-between"
    },
    Progress: {
        padding: 15,
        justifyContent: 'center',
        flexDirection: "row",
    },
    Image: {
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',

    },
    headerText1: {
marginLeft:30
    },
    Notify: {
        padding: 20,
        // backgroundColor: "#DCF2FC",
    },
    btn2: {
        alignItems: "center"
    },
    btn1: {
        alignItems: "center"
    }

})