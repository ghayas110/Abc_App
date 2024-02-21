import React, {useState} from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View , StyleSheet } from 'react-native'
import Theme from "../../assets/styles/basic"
import Header from './components/Header'
import cardImage from '../../assets/cardImages/RyseCard.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Visa from '../../assets/HomeScreenImages/download-removebg-preview.png'
import Manage from './components/Manage'
import Preference from './components/Preference'
import Icons from '../../components/Icons'




const Tab = createMaterialTopTabNavigator();
const CardMangementOne = () => {
  const [isCardNumber, setCardNumber] = useState(false);
  const HandleShow = () => {
    setCardNumber(!isCardNumber)
  }
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
      }}>
        <Header
          backtoPage={true}
          title={"Card Management"}
          backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
        />
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          marginVertical: 10,
        }} />
       
          <View style={{ padding: 5, marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {/* <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} /> */}
            <View style={styles.savingCardAccont}>
              <View style={styles.savingCardheaderHome}>
                <View style={styles.DebitCard}>

                {/* <Icons.Entypo name="wallet" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={() => navigation.navigate('CardMangements')} /> */}
                  {isCardNumber ?
                  <Icons.MaterialCommunityIcons name="eye-off-outline" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={HandleShow} />
                    :
                  <Icons.MaterialCommunityIcons name="eye-outline" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={HandleShow} />
                  }
                </View>
                <View style={styles.HolderName}>
                  <Text style={styles.holdertext}>Card Holder Name</Text>
                  <Text style={styles.holderName}>Razak Bin Osman</Text>
                </View>
                <View style={styles.HolderName}>
                  <Text style={styles.holdertext}>Card Number</Text>
                  {isCardNumber ?
                    <Text style={styles.holderName}>1234 5678 9101 3282</Text>
                    :
                    <Text style={styles.holderName}>.... .... .... 3282</Text>
                  }
                </View>
                <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={styles.holdertextCCV}>Expire</Text>
                    <Text style={styles.holderNameCVV}>12/26</Text>
                  </View>
                  <View>
                    <Text style={{ ...styles.holdertextCCV, marginLeft: 30 }}>CCV</Text>
                    {
                      isCardNumber
                        ?
                        <Text style={{ ...styles.holderNameCVV, marginLeft: 30 }}>889</Text>
                        :
                        <Text style={{ ...styles.holderNameCVV, marginLeft: 30 }}>...</Text>
                    }

                  </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                  <Image source={Visa} style={{ resizeMode: "contain", width: 60, height: 60 }} />
                </View>


              </View>
            </View>
          </View>


        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: "900",
              textTransform: "capitalize",
              fontFamily: "Poppins-Regular",
              marginTop: 2,
            },
            tabStyle: {
              elevation: 0
            },
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderBottomColor: 'green',
            },
          }}>
          <Tab.Screen name="Manage" component={Manage} />
          <Tab.Screen name="Preference" component={Preference} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  )
}

export default CardMangementOne


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    // justifyContent: "Space-evently",
  },

  Image: {
    width: 180,
    height: 50,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: '#00A200',
    marginTop: 10,
  },

  CheckIcon: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },

  BackArrowIcon: {
    color: '#00A200',
    fontSize: 16,
    position: 'relative',
    right: 50,
  },
  ForgotPassword: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containeAEDenu: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#dcdcdc', // Replace with your desired border color
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff', // Replace with your desired background color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    // marginTop: 5,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  textContainer: {
    width: 220,
    marginLeft: 10,
  },
  title: {
    ...Theme.black_color_f,
    fontSize: 16,
    fontWeight: '700',
    ...Theme.Font_family,
  },
  description: {
    ...Theme.gray_color_f,
    fontSize: 12,
    fontWeight: '500',
    ...Theme.Font_family,
  },
  arrowIcon: {
    fontSize: 24,
    ...Theme.Green_color_f,
  },
  boxes: {
    borderWidth: 1,
    ...Theme.ligth_gray_border_Color,
    padding: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    ...Theme.ligth_gray_border_Color,
    shadowColor: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 4
  },
  boxImage: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  tableContainer: {
    padding: 10,
    margin: 0,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  headerCell: {
    flex: 1,
    fontWeight: '700',
    fontSize: 16,
    ...Theme.Font_family,
    ...Theme.black_color_h,
  },
  cell: {
    flex: 1,
    fontWeight: '500',
    ...Theme.Font_family,
    fontSize: 14,
    ...Theme.black_color_h,
  },
  cell2: {
    flex: 1,
    fontWeight: '500',
    ...Theme.Font_family,
    fontSize: 14,
    ...Theme.Light_gray_color_f,
  },
  savingCard: {
    borderRadius: 15,
    borderWidth: 0.5,
    // padding: 15,
    backgroundColor: "#FFFFFF",
    ...Theme.ligth_gray_border_Color,
    shadowColor: '#000000',
    marginVertical: 5,
    // marginHorizontal: 5,
    width: 320,
    elevation: 4
  },
  savingCardAccont: {
    borderRadius: 20,
    borderWidth: 0.5,
    width: 225,
    // padding: 15,
    backgroundColor: "#FF8C19",
    ...Theme.ligth_gray_border_Color,
    shadowColor: '#000000',
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 4
  },
  savingCardHeadertext: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop:10 ,

  },
  DebitCard: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  savingCardHeadertext2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,

  },
  savingCardheader: {
    borderBottomWidth: 0.5,
    ...Theme.ligth_gray_border_Color,
    // padding: 15
  },
  savingCardheaderHome: {
    ...Theme.ligth_gray_border_Color,
    padding: 10
  },
  textSaving: {
    fontWeight: '600',
    fontSize: 16,
    ...Theme.Font_family,
    ...Theme.black_color_h,
  },
  textSavingtext2: {
    fontWeight: '500',
    fontSize: 14,
    ...Theme.Font_family,
    ...Theme.black_color_h,
  },
  textNumber: {
    fontWeight: '700',
    fontSize: 16,
    ...Theme.Font_family,
    ...Theme.black_color_h,
  },
  savingpotcard: {
    flexDirection: "row",
    alignContent: "center",
    padding: 15
  },
  savingCardImage: {
    resizeMode: "contain",
    height: 60,
    width: 60
  },
  savingpottextcontianer: {
    marginLeft: 5
  },
  savingpottext: {
    fontWeight: '500',
    fontSize: 14,
    ...Theme.Font_family,
    ...Theme.black_color_h,
  },
  savingPercent: {
    fontWeight: '500',
    fontSize: 10,
    ...Theme.Font_family,
    ...Theme.Light_gray_color_f,
  },
  HolderName: {
    padding: 10,
    marginTop: 15,

  },
  holdertext: {
    ...Theme.White_color_h,
    fontSize: 12,
    ...Theme.Font_family,
    fontWeight: "500",
  },

  holderName: {
    ...Theme.White_color_h,
    fontSize: 14,
    ...Theme.Font_family,
    fontWeight: "700",
  },
  holdertextCCV: {
    ...Theme.White_color_h,
    fontSize: 12,
    ...Theme.Font_family,
    fontWeight: "500",
  },
  holderNameCVV: {
    ...Theme.White_color_h,
    fontSize: 14,
    ...Theme.Font_family,
    fontWeight: "700",
  },
  textDeposit: {
    fontWeight: '600',
    fontSize: 16,
    ...Theme.black_color_h,
    ...Theme.Font_family
  },
  textViewAll: {
    fontWeight: '600',
    fontSize: 16,
    ...Theme.Green_color_h,
    ...Theme.Font_family
  },

});