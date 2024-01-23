import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import BackBtn from '../../assets/TopUp/TopUpBack.png'
import TopUpCopy from '../../assets/TopUp/TopUpCopy.png'
import Description1 from '../../assets/TopUp/TopUpProfile.png'
import Description2 from '../../assets/TopUp/TopUpDuitNow.png'
import Description3 from '../../assets/TopUp/TopUpDoller.png'
import { useNavigation } from "@react-navigation/native";


const TopUp = () => {
  const navigation =useNavigation()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white'
    },
    TopNavigator: {
      height: 60,
      justifyContent: "center"
    },
    TextArea: {
      paddingTop: 20
    },
    TextAreaHeading: {
      fontSize: 32,
      color: '#00A200',
      fontFamily: "Poppins-Bold"
    },
    TextAreaPara: {
      fontSize: 18,
      color: '#808080',
      fontFamily: "Poppins-Medium",
      paddingTop: 8
    },
    CopyAccNumberAreaText: {
      fontSize: 14,
      color: '#808080',
      fontFamily: "Poppins-Medium",
      paddingTop: 25,
    },
    CopyAccNumberArea: {
      paddingTop: 1,
      alignItems: 'center'
    },
    CopyAccNumberAreaNumberArea: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    CopyAccNumberAreaNumber: {
      fontSize: 24,
      color: 'black',
      fontFamily: "Poppins-Bold",
      paddingRight: 5
    },
    AmountNumber: {
      marginTop: 25,
      padding: 15,
      backgroundColor: "#DCF2FC",
      borderRadius:5
    },
    CopyAccNumberAreaText2: {
      fontSize: 14,
      color: '#006400',
      fontFamily: "Poppins-Medium",
    },
    CopyAccNumberAreaNumber2: {
      fontSize: 24,
      color: '#006400',
      fontFamily: "Poppins-Bold",
      paddingRight: 5
    },
    DescriptionBox:{
      flexDirection:'row',
      flexWrap:'wrap',
      paddingTop:20,
      // height:80,
      alignItems:'flex-start'
    },
    TextAreaPara2: {
      fontSize: 16,
      color: '#006400',
      fontFamily: "Poppins-Medium",
    },
    DescriptionImage:{
      marginTop:5,
      marginRight:10
    }
  })

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('TopUpFaq')
    }, 5000);
  },[])
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.TopNavigator}>
          <Image source={BackBtn}></Image>
        </View>
        <View style={styles.TextArea}>
          <Text style={styles.TextAreaHeading}>Let's Go!{"\n"}Top up your account</Text>
          <Text style={styles.TextAreaPara}>Deposit into your new account within 30{"\n"}days to get started</Text>
        </View>


        <View style={styles.CopyAccNumberArea}>
          <Text style={styles.CopyAccNumberAreaText}>Smart Star account number:</Text>
          <View style={styles.CopyAccNumberAreaNumberArea}>
            <Text style={styles.CopyAccNumberAreaNumber}>700007123456789</Text>
            <Image source={TopUpCopy}></Image>
          </View>
        </View>



        <View style={styles.AmountNumber}>
          <View style={styles.CopyAccNumberArea}>
            <Text style={styles.CopyAccNumberAreaText2}>Minimum top up amount:</Text>
            <View style={styles.CopyAccNumberAreaNumberArea}>
              <Text style={styles.CopyAccNumberAreaNumber2}>AED 20.00</Text>
            </View>
          </View>

          <View style={styles.DescriptionBox}>
            <Image style={styles.DescriptionImage} source={Description1}></Image>
            <Text style={styles.TextAreaPara2}>Transfer from your sole bank account</Text>
          </View>


          <View style={styles.DescriptionBox}>
            <Image style={styles.DescriptionImage} source={Description2}></Image>
            <Text style={styles.TextAreaPara2}>Send via DuitNow to your Smart Star account. Select Smart Star BANKING & INVESTMENT CORP (M) BERHAD as recipient bank</Text>
          </View>


          <View style={styles.DescriptionBox}>
            <Image style={styles.DescriptionImage} source={Description3}></Image>
            <Text style={styles.TextAreaPara2}>Please top up a minimum amount of AED20.00</Text>
          </View>
        </View>


      </View>
    </ScrollView>
  )
}

export default TopUp


