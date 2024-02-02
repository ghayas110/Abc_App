import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import Header from './components/Header2';
import SuccessImage from "../../assets/SavingPotsImages/SuccessImage.png"
import { useNavigation } from '@react-navigation/native';
import Theme from '../../assets/styles/basic'
import { RequestButton , OutlineButton } from '../../components/Buttons';

const SuccessfullyCreated = () => {
    const navigation = useNavigation()
    const HandleNavigate = () => {
        navigation.navigate("SavingPots")
    }
    const HandleNavigatetoFunds = () => {
        navigation.navigate("AddFundsHome")
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
              <Header
                  backtoPage={true}
                  backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
              />
        </View>
        <View style={styles.Image}>
              <Image source={SuccessImage} />
        </View>
          <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Yay! Your Savings Pot has been successfully created!</Text>
              <Text style={styles.HeadingPara}>Keep saving to achieve more of your goals</Text>
          </View>
          <View style={styles.Bottom}>
              <OutlineButton text={"Maybe later"} onPress={HandleNavigate} />
              <RequestButton text={"Add funds"} onPress={HandleNavigatetoFunds} />

          </View>

      
    </View>
  )
}

export default SuccessfullyCreated

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFFFF",
        padding: 10,
    },
    header:{
        flex: 0.3,
        // backgroundColor:"yellow",
    },
    Image:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    Heading:{
        flex: 1,
        padding:10
    },
    Bottom: {
        flex: 1,
        alignItems: "center",
        justifyContent:"flex-end",
    },
    HeadingText:{
    ...Theme.Font_family,
        ...Theme.Green_color_f,
    fontSize: 28,
        fontWeight: '700',
    },
    HeadingPara:{
        
        ...Theme.Font_family,
        ...Theme.Light_gray_color_f,
        fontSize: 16,
        fontWeight: '500',
        marginTop:10
    }

})