import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';


const ComingSoon = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };
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
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/transferPaymentImages/Back_press_area.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{...style.Font_family_Bold,...style.Green_color_h,fontSize: 30}}>Coming Soon</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ComingSoon