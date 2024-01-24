import { StyleSheet, Text, View, Image, Animated, Easing, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/header'
import TopUpFaqMainIcon from '../../assets/TopUp/TopUpFaqMainIcon.png'
import { RequestButton } from '../../components/Buttons'
import TopUpC from './popUp'


const TopUpFaq = () => {
const { width, height } = Dimensions.get('window');
  const [TopUp,setTopUp] = useState(false)
  const CloseBtn =()=>{
    setTopUp(!TopUp)
  }

  const styles = StyleSheet.create({
    containerFluid: {
      flex: 1,
      backgroundColor: 'white'
    },
    Container: {
      padding: 20
    },
    CopyAccNumberAreaText: {
      fontSize: 16,
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
      fontSize: 26,
      color: 'black',
      fontFamily: "Poppins-Bold",
      paddingRight: 5
    },
    TopUpCard: {
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 5,
      borderRadius: 10,
      padding:15,
      borderColor: "#E6E6E6",
      flexDirection:'column',
      alignItems:'center'
    },
    FaqHeading:{
      fontFamily:'Poppins-Medium',
      textAlign:"center",
      marginTop:10,
      color:'black',
      fontSize:20
    },
    FaqPara:{
      fontFamily:'Poppins-Medium',
      textAlign:"center",
      marginTop:10,
      color:'#808080',
      fontSize:14
    }
  })
  return (
    <>
      <View style={styles.containerFluid}>
        <Header />
        <View style={styles.Container}>
          <View style={styles.CopyAccNumberArea}>
            <Text style={styles.CopyAccNumberAreaText}>Spending balance</Text>
            <View style={styles.CopyAccNumberAreaNumberArea}>
              <Text style={styles.CopyAccNumberAreaNumber}>AED 0.00</Text>
            </View>
          </View>


          <View style={{...styles.TopUpCard}}>
            <Image source={TopUpFaqMainIcon}></Image>
            <Text style={styles.FaqHeading}>Thank you for topping up, it is currently under review. Please sit back and relax!</Text>
            <Text style={styles.FaqPara}>We will inform you of your review results. If you have any inquiries, please visit our FAQ page.</Text>
            <RequestButton text={'Confirm'} 
            btnStyle={{
              width: width * 0.90,
              marginTop:10
            }}
            onPress={()=>setTopUp(true)} />
          </View>
        </View>
      </View>

      <TopUpC open={TopUp} CloseBtn={CloseBtn}/>
    </>
  )
}

export default TopUpFaq

