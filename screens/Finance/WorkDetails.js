import React, { useState } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import style from "../../assets/styles/basic"
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import ThemeSty from "../../assets/styles/basic"



const WorkDetails = ({onPress}) => {
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

<Text style={{ ...style.main_heading, textAlign: "left", fontSize: 25, fontFamily: "Poppins-Bold" }}>Tell us more about your work</Text>
<Text style={{lineHeight:30,color:'black'}}>Please also fill in the details about your work.</Text>

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
        Employment type
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Private employee
        </Text>
        </View>
        
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Name of employer/company
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Oliver Wyman
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Occupation
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Consultant
        </Text>
        </View>
        <View style={{padding:7}}>
        <Text style={{color:'black'}}>
        Employment sector
        </Text>
        <Text style={{paddingVertical:15,fontWeight:'500',fontSize:16,color:'black',lineHeight:24,fontFamily:'Poppins'}}>
        Financial services
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
              
            <View>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'Enter your industrial sector'}
placeholderColor={'grey'}
title={`Industrial sector`}
fontsize={12}
icon={"right"}
/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'Select your date joined'}
placeholderColor={'grey'}
title={`Date joined`}
fontsize={12}
icon={"right"}
/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("")}>
                <FormInput
placeholder={'Enter your office address'}
placeholderColor={'grey'}
title={`Office address (Line one)`}
fontsize={12}
icon={"right"}
/>
<FormInput
placeholder={'Enter your office address'}
placeholderColor={'grey'}
title={`Office address (Line two)`}
fontsize={12}
icon={"right"}
/>
<FormInput
placeholder={'Enter your office postal code'}
placeholderColor={'grey'}
title={`Office postal code`}
fontsize={12}
icon={"right"}
/><FormInput
placeholder={'Select your office state'}
placeholderColor={'grey'}
title={`Office state`}
fontsize={12}
icon={"right"}
/>
<FormInput
placeholder={'Enter your office phone number'}
placeholderColor={'grey'}
title={`Office phone number`}
fontsize={12}
icon={"right"}
keyboardType={"numeric"}
/>

                </TouchableOpacity>
            
            </View>
            
            </View>
            <View style={{paddingBottom:10}}>

            <RequestButton text={"Continue"} onPress={onPress}/>
            </View>
                </ScrollView>
    )
}

export default WorkDetails 
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