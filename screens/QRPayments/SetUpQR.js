import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import Header from '../transaction-history/components/Header';




const SetUpQR = () => {
    const navigation = useNavigation()
    const { width, height } = Dimensions.get('window');
    const nextPage = async () => {
        navigation.navigate('DetailTwo')
    }


    return (
        <>
            <View style={{
                ...style.basic_container,
                height: height,
                position: "relative",
                backgroundColor: "white"
            }}>
            <Header
            backtoPage={true}
            title={"DoitNow QR"}
            backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
        />
                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 60,
                }}>
                    <Text style={{ ...style.main_headings, textAlign: "left", paddingLeft: 10, fontSize: 25, fontFamily: "Poppins-Bold" }}>Set up DuitNow QR  {'\n'} Account</Text>
                    <Text style={{  textAlign: "left", paddingLeft: 10, fontSize: 25, fontSize: 16,lineHeight:24 }}>
                    Select account and set your preferred daily limit for seamless payments
                                        </Text>
                    

              
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 18, marginBottom: 10 }}
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...style.gray_color_f }}
                        label={"Your Account"}
                        placeholder={"SSSCO Savings Account-1"}
                        items={[
                            { label: 'SSSCO Savings Account-1', value: 'option1' },
                            { label: 'SSSCO Savings Account-2', value: 'option2' },
                            { label: 'SSSCO Savings Account-3', value: 'option3' },
                        ]}
                    />
                </View>
                
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                <Text style={{ color:'green', textAlign: "left", paddingLeft: 30, fontSize: 18,fontWeight:"500",fontFamily: "Poppins-Regular" }}>Amount</Text>

       
            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',marginTop:-20}}>
            <Text >AED</Text>
            
            <FormInput
            placeholder={'Enter Amount'}
            placeholderColor={'grey'}
          
            keyboardType={'numeric'}
            />
            </View>
                </View>
                <RequestButton text={"Confirm"} onPress={() => navigation.navigate('AllowBiometric')}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />
            </View>
        </>
    )
}

export default SetUpQR