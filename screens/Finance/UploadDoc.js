import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView, Button, Dimensions } from 'react-native'
import React from 'react'
import { RequestButton } from '../../components/Buttons'
import Steps from '../../components/steps/Steps'
import style from '../../assets/styles/basic';
import { FilePicker } from '../../components/Inputs';
const { width, height } = Dimensions.get('window');

const UploadDoc = ({onPress}) => {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        paddingTop: 30,
        height:height*0.94
    }}>
   
        <View style={{ marginTop:20 }}>
            <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 30 }}>Request change of address</Text>
            <Text style={{ ...style.Font_family, ...style.gray_color_h }}>Please only upload pdf files</Text>
            <View style={{marginTop:20}}>
                <Text style={{ ...style.Font_family_Bold, ...style.black_color_h, fontSize: 20}}>Bank statement / Utility bill </Text>
                <Text style={{ ...style.Font_family, ...style.gray_color_h }}>Please upload the above documents that have your name and mailing address.</Text>
            </View>

            <FilePicker
                icon={require("../../assets/Finance/upload.png")} 
                text={"Upload"}
                fileStyleView={{
                    marginTop: 40
                }}
            />
          
        </View>
        <View style={{
            flex:1,
            justifyContent: "flex-end"
        }}>
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20
            }}>
                <Image source={require("../../assets/Finance/info.png")} style={{marginRight: 10,height: 20,width: 20}}/>
                <Text style={{...style.Font_family_Bold,...style.Green_color_h,fontSize: 13}}>How to upload?</Text>
            </TouchableOpacity>
            <RequestButton 
            btnStyle={{
                width: "auto"
            }} 
            text={"Continue"} onPress={onPress} />
        </View> 
    </SafeAreaView>
  )
}

export default UploadDoc

const styles = StyleSheet.create({})