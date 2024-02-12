import { StyleSheet, Text, View , Image } from 'react-native'
import RejectImage from '../../assets/transferPaymentImages/reject.png';
import Theme from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { OutlineButton , RequestButton } from '../../components/Buttons';

const Reject = () => {
    const navigation =  useNavigation();
    const handleNavigation = () => {
        navigation.navigate('HomeScreen')
    }
  return (
    <View  style={styles.container}>
          <View style={styles.Header}>
             <Image source={RejectImage} style={styles.RejectImg} />
          </View>
          <View style={styles.Header2}>
            <View>
              <Text style={styles.HeaderText}>Transaction cancelled</Text>
              <Text style={styles.HeaderPara}>Payment time limit exceeded. Please try again</Text>
            </View>
          </View>
          <View style={styles.Header}>
              <View>
                  <OutlineButton text="Back to Home" onPress={handleNavigation} />
              </View>
              <View>
                  <RequestButton text="Try Again" />
              </View>
          </View>
    </View>
  )
}

export default Reject

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
        backgroundColor:"#FFFFFF",
    },
    Header:{
        flex: 1,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    Header2:{
        flex: 0.2,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    RejectImg:{
        resizeMode:"cover",
    },
    HeaderText:{
        fontSize: 28,
        ...Theme.Green_color_h,
        ...Theme.Font_family,
        fontWeight: '700',
        marginTop: 10,
    },
    HeaderPara:{
        fontSize: 16,
        fontWeight: '500',
        ...Theme.gray_color_h,
        ...Theme.Font_family, 
    }
})