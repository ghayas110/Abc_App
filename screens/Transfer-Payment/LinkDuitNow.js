import React from 'react'
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import style from "../../assets/styles/basic"
import { OutlineButton, RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

const LinkDuitNow = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('DuitNowIDs')
    }


    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 15,
                paddingTop: 30
            }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() =>  navigation.goBack()}>
                        <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}
                    >
                        <Image source={require("../../assets/transferPaymentImages/hand.png")} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{
                        ...style.Font_family_Bold,
                        ...style.Green_color_h,
                        fontSize: 30
                    }}>Link SSSSCO with {'\n'} DuitNow?</Text>
                    <Text style={{
                        ...style.gray_color_h,
                        ...style.Font_family,
                        fontSize: 19
                    }}>Connect your DuitNow ID with your Bank {'\n'} account to enjoy easy payment {'\n'} transfers</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <OutlineButton text={"Skip"} btnStyle={{width: "auto"}}/>
                    <RequestButton text={"View available DuitNow IDs"} btnStyle={{width: "auto"}}onPress={() => onPress()} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default LinkDuitNow