import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../components/Icons';
import Collapsible from 'react-native-collapsible';
import Header from './components/Header';
const FAQs = () => {
  const navigation = useNavigation();
  const Accordion = ({ title, children, leftIcon }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
      <View>
        <TouchableOpacity style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10
        }} onPress={() => setIsCollapsed(!isCollapsed)}>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            {/* <Image style={{ marginRight: 8 }}
              source={require('../../assets/SignUp/docgreen.png')}
            /> */}
            <Text style={{
              ...style.Font_family_Bold,
              ...style.black_color_h
            }}>{title}</Text>
          </View>
          {leftIcon ? <Icons.AntDesign name={'down'} style={{ ...style.Green_color_h }} /> : null}
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed} style={{ paddingHorizontal: 5 }}>
          {children}
        </Collapsible>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        paddingTop: 40
      }}>
        <ScrollView>
          <View>
            <Text style={{
              ...style.Font_family_Bold,
              ...style.black_color_h,
              fontSize: 30
            }}>FAQs</Text>
            <Text style={{
              ...style.Font_family,
              ...style.black_color_h,
              fontSize: 20,
              textDecorationLine: "underline"
            }}>General (Application,Devices, {'\n'} Requirements)</Text>
          </View>
          <View style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#cccccc',
          }}>
              <Accordion leftIcon={true} title="What is DigitalBank?"></Accordion>
              <Accordion leftIcon={true} title="What is the difference between Bank 
              and AI DigitalBank smartphone banking app (DigitalBank@gmail.com)"></Accordion>
              <Accordion leftIcon={true} title="How can I open DigitalBank account?"></Accordion>
              <Accordion leftIcon={true} title="Can I open Digital Bank account in any UAE branch?"></Accordion>
              <Accordion leftIcon={true} title={`What happens after I have successfully submitted my account ${'\n'} opening application?`}></Accordion>
              <Accordion leftIcon={true} title={`Do I need to walk into a branch for physical verification after my application?`}></Accordion>
              <Accordion leftIcon={true} title={`Can i re-apply or onboard again if any application was not successful on the first time application?`}></Accordion>
              <Accordion leftIcon={true} title={`What is the minimum smartphone operating software version required to use DigitalBank?`}></Accordion>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  acordion1: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginTop: 5,
    marginBottom: 8,
    paddingBottom: 5
  },
  text: {
    ...style.Font_family,
    ...style.Green_color_h,
    fontSize: 17,
  },
  text2: {
    ...style.Font_family_Bold,
    ...style.Green_color_h,
    fontSize: 15,
  },
});

export default FAQs