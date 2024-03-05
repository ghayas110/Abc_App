import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';



const NameScreen = ({ onPress }) => {
    const [isName , setName] = useState(false)
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()


    const nextPage = async () => {
        if (isName) {
            navigation.navigate('ReviewDetails')
        }
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                ...style.basic_container,
                height: height * 0.95,
                position: "relative",
                backgroundColor: "white"
            }}
        >

            {/* INPUT BOX ============================= */}
            <View style={{
                ...style.basic_container,
                marginTop: 30,
                paddingLeft: 30,
                paddingRight: 30
            }}>
                <View>

                    <Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>What would you like us to call you?</Text>
                    <Text style={{fontFamily:'Poppins-Regular'}}>This name is only for the app, not applicable for your SSSCO card or official documents</Text>
                    <FormInput
                        placeholder={"Enter Prefered Name"}
                        placeholderColor={'#CCCCCC'}
                        charecter={"10 characters remaining"}
                        value={isName}
                        onChangeText={setName}
                    />
                </View>
            </View>
            <RequestButton text={"Confirm"} onPress={onPress}

                btnStyle={{ position: "absolute", bottom: 50 }}
            />

        </KeyboardAvoidingView>
    )
}

export default NameScreen 