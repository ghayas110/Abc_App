import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView } from 'react-native'
import style from '../../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import ActivationSteps from '../../../components/steps/ActivationSteps';
import { OutlineButton, RequestButton } from '../../../components/Buttons';
import FormInput from '../../../components/FormInput';
import ThemeSty from "../../../assets/styles/basic"

const ChangeAddress = ({onPress,BackPress}) => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 20,
                paddingTop: 30
            }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={BackPress}>
                        <View style={{width:50}}>
                            <Image source={require("../../../assets/transferPaymentImages/Back_press_area.png")} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ ...style.Font_family_Bold, ...style.Green_color_h, fontSize: 30 }}>Request change of address</Text>
                </View>
                <View        style={{
                    ...style.basic_container,
                    marginTop: 20,
                    paddingLeft: 5,
                    paddingRight: 5,
               
                }}>
                <Text style={{fontFamily:'Poppins-Bold',color:'black'}}>
  Mailing Address
    </Text>
                </View>
                <View>
                <FormInput
placeholder={'Select Address (Line One)'}
placeholderColor={'grey'}
title={`Address (Line One)`}
fontsize={12}
icon={"right"}
/>
                <FormInput
placeholder={'Select Address (Line Two)'}
placeholderColor={'grey'}
title={`Address (Line Two)`}
fontsize={12}
icon={"right"}
/>
                <FormInput
placeholder={'Select Postal Code'}
placeholderColor={'grey'}
title={`Postal Code`}
fontsize={12}
icon={"right"}
/>
<FormInput
placeholder={'Select City'}
placeholderColor={'grey'}
title={`City`}
fontsize={12}
icon={"right"}
/>
<FormInput
placeholder={'Select State'}
placeholderColor={'grey'}
title={`State`}
fontsize={12}
icon={"right"}
/>
                
            </View>
                <View style={{ flex: 1,justifyContent: "flex-end" }}>
                    <RequestButton btnStyle={{
                        width: "auto"
                    }} text={"Continue"} onPress={onPress} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default ChangeAddress
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