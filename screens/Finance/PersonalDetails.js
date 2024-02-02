import React, { useState } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import ThemeSty from "../../assets/styles/basic"



const PersonalDetails = ({onPress,AddressPress}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('ReviewDetails')
    }
    
    return (
        
 <ScrollView>

                <View 
                style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30
                }}
                >
               <View>

<Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>Let’s get started</Text>
<Text style={{lineHeight:30,color:'black'}}>Please confirm your details and tell us a little bit more about yourself</Text>
<Text style={{fontFamily:'Poppins-Bold',color:'black'}}>
    Personal details
    </Text>
</View>

                </View>
                <View>
  
    <View        style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor:'whitesmoke'
                }}>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            Full Name
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Razak Bin Osman
        </Text>
        </View>
        
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            IQAMA No
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        4356578-768-5678
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            Date of Birth
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        7/09/1997
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            Email
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        razakbinosman@gmail.com
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            Martial Status
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Single
        </Text>
        </View>
    </View>
    <View        style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
               
                }}>
                <Text style={{fontFamily:'Poppins-Bold',color:'black'}}>
  Mailing Address
    </Text>
                </View>
    <View        style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor:'whitesmoke'
                }}>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Address (Line One)
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        99, Jalan Prince 4
        </Text>
        </View>
        
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Address (Line Two)
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Azan Garden
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Postal Code
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        49810
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
            City
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Petaling Jaya
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        State
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Selangor
        </Text>
        </View>
    </View>
</View>
<View        style={{
                    ...style.basic_container,
                    marginVertical: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
               
                }}>
                <View style={{...styles.Notify , ...ThemeSty.bg_light_green_color}}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 12, fontWeight: "700", ...ThemeSty.Font_family }}>
                Request change of mailing address.
                </Text>
                <TouchableOpacity onPress={AddressPress}>

             
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 15, fontWeight: "bold", fontFamily:'Popins-Bold' }}>
                Update now {'>'}
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'Select Highest Education Level'}
placeholderColor={'grey'}
title={`Highest Education Level`}
fontsize={12}
icon={"right"}
/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'Select residential status'}
placeholderColor={'grey'}
title={`Residential ownership status`}
fontsize={12}
icon={"right"}
/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'What would you use the funds for?'}
placeholderColor={'grey'}
title={`Purpose of financing`}
fontsize={12}
icon={"right"}
/>
                </TouchableOpacity>
                <View style={{...styles.Notify , ...ThemeSty.bg_light_green_color}}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, fontWeight: "700", ...ThemeSty.Font_family,lineHeight:24 }}>
                We will use the above details to perform verification checks and communicate important information, such as your application document.
                </Text>
               
            </View>
            </View>
            
            </View>
            <View style={{paddingBottom:10}}>

            <RequestButton text={"Continue"} onPress={onPress}/>
            </View>
                </ScrollView>
    )
}

export default PersonalDetails 
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        justifyContent:"space-evenly"
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
    headerText: {
        padding: 10,
        marginTop: 15,
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