import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import ThemeSty from "../../assets/styles/basic"


const PersonalDetails = ({onPress}) => {
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
<Text style={{lineHeight:30}}>Please confirm your details and tell us a little bit more about yourself</Text>
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
        <Text>
            Full Name
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Razak Bin Osman
        </Text>
        </View>
        
        <View style={{padding:7}}>
        <Text>
            IQAMA No
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        4356578-768-5678
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
            Date of Birth
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        7/09/1997
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
            Email
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        razakbinosman@gmail.com
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
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
                    backgroundColor:'whitesmoke'
                }}>
        <View style={{padding:7}}>
        <Text>
            Full Name
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Razak Bin Osman
        </Text>
        </View>
        
        <View style={{padding:7}}>
        <Text>
            IQAMA No
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        4356578-768-5678
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
            Date of Birth
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        7/09/1997
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
            Email
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        razakbinosman@gmail.com
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text>
            Martial Status
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Single
        </Text>
        </View>
    </View>
</View>
                <View style={{...styles.Notify , ...ThemeSty.bg_light_green_color}}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, fontWeight: "700", ...ThemeSty.Font_family }}>
                    You can change this later in Settings.
                </Text>
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