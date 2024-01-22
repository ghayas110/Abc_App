import { StyleSheet, Text, View, Image, Switch, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput, CheckBoxInput, List } from '../../components/Inputs'
import ProgressBar from 'react-native-progress/Bar';
import Biomatric from '../../assets/CreateAccoutImages/SuccessFully.png'
import CheckSucess from '../../assets/CreateAccoutImages/ProgressBarCom.png'
import ThemeSty from '../../assets/styles/basic'
import { RequestButton, OutlineButton } from '../../components/Buttons'

const Successfully = () => {
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
        navigation.navigate('Successfully')
    }

    return (
        <>
        <View style={styles.container}>
           <View>
                <Image source={Biomatric} />
           </View>
            <View>
                <Text style={{ ...ThemeSty.Green_color_f, ...ThemeSty.Font_family , fontSize: 28, fontWeight: "700", marginTop:50 }}>Where do we send you nice things?</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" , marginTop: 25,
            }}>
                <Image source={CheckSucess} />
            </View>

        </View>
            <View style={{marginBottom:15}} >
                <View style={styles.btn2}>
                    <RequestButton text={'Confirm'} onPress={ForWordnavigation} />
                </View>
            </View>
        </>
    )
}

export default Successfully

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    Progress: {
        justifyContent: 'center',
        flexDirection: "row",
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