import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Transfer-Payment/components/Header'
import Theme from '../../assets/styles/basic'
import style from "../../assets/styles/basic"
import Icons from '../../components/Icons'
const Finance = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <>
       <View style={{ backgroundColor: "#FFFFFF", borderBottomWidth: 0.5, ...Theme.ligth_gray_border_Color }}>
                <Header
                    backtoPage={false}
                    title="Finnancinng Center"
                />
            </View>
            <View style={{
        ...style.basic_container,
        height: height,
        position: "relative",
        backgroundColor: "white",padding:10
    }}>
    

    <Text style={{ ...style.main_heading, textAlign: "left", paddingLeft: 10, fontSize: 25, fontFamily: "Poppins-Bold" }}>Additional funds to achieve your life goals</Text>
    <View style={styles.AccountBalance}>
                <View style={styles.accountCardHeader}>
                    <View>
                         <Image source={require('../../assets/Finance/finance1.png')}/>
                    </View>
                    
                </View>

            </View>
    </View>
    </>
  )
}

export default Finance


const styles = StyleSheet.create({
  container:{
      backgroundColor:"#FFFFFF",
      flex:1,
      padding:10
  },
  header:{
      flex:0.1,
      // backgroundColor:"red",
      borderBottomWidth:0.5,
      justifyContent:"center",
      alignItems:"center"
  },
  headerText:{
      textAlign:"center",
      ...Theme.black_color_h,
      fontWeight: "700",
      fontSize: 20,
      },
  balanceCard:{
      height:90,
      borderRadius:15,
  
      padding:15,
      backgroundColor: "#E6E6E6",
      ...Theme.ligth_gray_border_Color,
      shadowColor: '#000000',
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginVertical: 5,
      marginHorizontal: 5,
      elevation: 4
  },
  accountCardHeader:{
     
  },
  balanceText:{
      fontSize: 14,
      ...Theme.black_color_h,
      ...Theme.Font_family,
      fontWeight: "500",
  },
  balanceText2:{
      fontSize: 20,
      ...Theme.black_color_h,
      ...Theme.Font_family,
      fontWeight: "700",
  },
  cardContainer:{
      padding:10
  },

  AccountBalance:{
     display:'flex',alignItems:'center',justifyContent:'center',
      borderRadius: 15,
      borderWidth: 0.5,
      // padding: 15,
      backgroundColor: "#FFFFFF",
      ...Theme.ligth_gray_border_Color,
      shadowColor: '#000000',
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginVertical: 5,
      marginHorizontal: 5,
      elevation: 4
  }
})