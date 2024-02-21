import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ProgressBarAndroid, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../components/Inputs'
import { RequestButton, OutlineButton } from '../components/Buttons'
import CardInage from '../assets/HomeScreenImages/bankCard.png'
import HomeDuet from '../assets/HomeScreenImages/FundTranfer.png'
import DuetQr from '../assets/HomeScreenImages/UniversalQR.png'
import Transfer from '../assets/HomeScreenImages/account_statement.png'
import Statement from '../assets/HomeScreenImages/transaction_History.png'
import Image1 from '../assets/accountCenterImage/createSavingPot1.png'
import Image2 from '../assets/accountCenterImage/createSavingPot2.png'
import Image3 from '../assets/accountCenterImage/createSavingPot3.png'
import Image4 from '../assets/accountCenterImage/createSavingPot4.png'
import Market from '../assets/HomeScreenImages/market.png'
import Modal from 'react-native-modal';
import Visa from '../assets/HomeScreenImages/download-removebg-preview.png'
import Header from '../components/header/header'
import Theme from '../assets/styles/basic'
import ThemeSty from '../assets/styles/basic';
import Chart from './Chart/Chart'
import ChartInsight from './Chart/ChartInsight'
const HomeScreen = ({ onLogin }) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);
  const [isCardNumber, setCardNumber] = useState(false);
  const [isAccount, setAccount] = useState("Accounts");

  const HandleShow = () => {
    setCardNumber(!isCardNumber)
  }

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const toggleBottomSheet2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
  };

  const navigation = useNavigation();

  const goSavingpots = () => {
    navigation.navigate('SavingPots');
  };
  const goInsights = () => {
    navigation.navigate('Insights');
  };



  const [progress, setProgress] = useState(5)
  useEffect(() => {
    // Simulating progress increase over time
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.1;
        return newProgress < 1 ? newProgress : 1;
      });
    }, 90000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  const ForWordnavigation = () => {
    navigation.navigate('TransferTo', { data: isAccount })
  }


  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.Progress}>
          <Header onPress={toggleBottomSheet} />
        </View>
        <View
          style={{
            // padding: 5,
            // marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              ...Theme.gray_color_f,
              ...Theme.Font_family,
            }}>
            Spending balance
          </Text>

          <Icons.AntDesign
            name="infocirlceo"
            style={{
              marginLeft: 5,
              fontSize: 12,
              ...Theme.Green_color_f,
            }}
            onPress={toggleBottomSheet2}
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: '700', ...Theme.black_color_f, ...Theme.Font_family, textAlign: 'center', }}>
          AED 10,000.00
        </Text>
        {/* <TouchableOpacity > */}
        <View style={{ padding: 5, marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {/* <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} /> */}
          <View style={styles.savingCardAccont}>
            <View style={styles.savingCardheaderHome}>
              <View style={styles.DebitCard}>

                <Icons.Entypo name="wallet" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={() => navigation.navigate('CardMangements')} />
                {isCardNumber ?
                  <Icons.MaterialCommunityIcons name="eye-off-outline" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={HandleShow} />
                  :
                  <Icons.MaterialCommunityIcons name="eye-outline" style={{ margin: 5, fontSize: 20, ...Theme.White_color_h }} onPress={HandleShow} />
                }
              </View>
              <View style={styles.HolderName}>
                <Text style={styles.holdertext}>Card Holder Name</Text>
                <Text style={styles.holderName}>Razak</Text>
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


        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={{ width: 80, paddingVertical: 10 }} onPress={ForWordnavigation}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={HomeDuet} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...Theme.black_color_f, fontWeight: "500", textAlign: "center" }}>{`Fund\nTransfer`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 80, paddingVertical: 10 }} onPress={() => navigation.navigate('QRScan')}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={DuetQr} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...Theme.black_color_f, fontWeight: "500", textAlign: "center" }}>
                {`Universal\nQR`}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 80, paddingVertical: 10 }} onPress={() => navigation.navigate('TransactionHistory')} >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={Transfer} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...Theme.black_color_f, fontWeight: "500", textAlign: "center" }}>Transaction History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 80, paddingVertical: 10 }} onPress={() => navigation.navigate('Statements')}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={Statement} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...Theme.black_color_f, fontWeight: "500", textAlign: "center" }}>Latest Statements</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.containeAEDenu}>
          <TouchableOpacity style={styles.card} onPress={goSavingpots}>
            <Image source={Market} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Marketplace</Text>
              <Text style={styles.description}>
                Financial products that let you be more by doing more for
                others.
              </Text>
            </View>
            <Icons.MaterialIcons
              name="arrow-forward-ios"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

        </View>

        <View style={{ padding: 5, marginBottom: 15, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {/* <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} /> */}
          <View style={styles.savingCard}>
            <View style={styles.savingCardheader}>
              <View style={styles.savingCardHeadertext}>
                <Text style={styles.textSaving}>Savings Pot</Text>
                <Text style={styles.textViewAll} onPress={goSavingpots} >View all  <Icons.MaterialIcons name="arrow-forward-ios" style={styles.textIcon} /></Text>
              </View>
              <View style={styles.savingCardHeadertext2}>
                <Text style={styles.textSavingtext2}>Savings pot balance:</Text>
                <Text style={styles.textNumber}>AED 32,140.00</Text>
              </View>

            </View>
            <View style={styles.SavingsPots}>
              <View style={styles.savingpotcard}>
                <View style={styles.ImageContainer}>
                  <Image source={Image1} style={styles.savingCardImage} />
                </View>
                <View style={styles.savingpottextcontianer}>
                  <Text style={styles.savingpottext}>My Umrah</Text>
                  <View style={{ width: 200 }}>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeteAEDinate={false}
                      progress={progress}
                      color="#00a200"

                    />
                  </View>

                  <Text style={styles.savingPercent}>80% completed</Text>
                </View>
              </View>

              <View style={styles.savingpotcard}>
                <View style={styles.ImageContainer}>
                  <Image source={Image4} style={styles.savingCardImage} />
                </View>
                <View style={styles.savingpottextcontianer}>
                  <Text style={styles.savingpottext}>Makka</Text>
                  <View style={{ width: 200, }}>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeteAEDinate={false}
                      progress={progress}
                      color="#00a200"

                    />
                  </View>

                  <Text style={styles.savingPercent}>80% completed</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 5, marginBottom: 15, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {/* <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} /> */}
          <View style={styles.savingCard}>
            <View style={styles.savingCardheader2}>
              <View style={styles.savingCardHeadertext}>
                <Text style={styles.textSaving}>Financial Insights</Text>
                <Text style={styles.textViewAll} onPress={goInsights} >More  <Icons.MaterialIcons name="arrow-forward-ios" style={styles.textIcon} /></Text>
              </View>
            </View>
            <View style={styles.Chart }>
              <View style={styles.savingpotcard}>
                  <Chart />
              </View>
              <View style={styles.savingpotcard}>
                <View style={styles.savingpotcard}>
                  <ChartInsight />
                </View>
              </View>
            </View>
            <View style={styles.chartbottom}>
              <Text style={{fontSize: 12, ...Theme.Light_gray_color_f , ...Theme.Font_family , fontWeight: '500',}}>Net Cash Flow</Text>
              <Text style={{ fontSize: 14, ...Theme.black_color_h, ...Theme.Font_family, fontWeight: '700', }}>+AED 1,5323.00</Text>
            </View>
          </View>
        </View>




        <Modal
          isVisible={isBottomSheetVisible}
          style={{ margin: 0 }}
          onBackdropPress={toggleBottomSheet}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 24,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: '700',
                    ...ThemeSty.Green_color_f,
                    ...ThemeSty.Font_family,
                  }}>
                  Confirm Logout?
                </Text>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <Text
                  style={{
                    ...ThemeSty.gray_color_f,
                    ...ThemeSty.Font_family,
                    fontSize: 16,
                  }}>
                  Are you sure you want to log out of Smart Digital Mobile Bank App?
                </Text>
              </View>

              <View style={{ padding: 10, alignItems: 'center' }}>
                <OutlineButton text="Logout" onPress={onLogin} />
              </View>
              <View style={{ alignItems: 'center' }}>
                <RequestButton text="Cancel" onPress={toggleBottomSheet} />
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={isBottomSheetVisible2}
          style={{ margin: 0 }}
          onBackdropPress={toggleBottomSheet2}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 24,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: '700',
                    ...Theme.Green_color_f,
                    ...Theme.Font_family,
                  }}>
                  Info
                </Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ ...Theme.gray_color_f, ...Theme.Font_family, fontSize: 14 }}>
                  {`Spending balance excludes:\nMinimum balance of AED 10 required to maintain the account\nAny funds stored in savings pots`}
                </Text>
              </View>
            </View>
          </View>
        </Modal>

      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    
    // justifyContent: "Space-evently",
  },

  chartbottom :{
    justifyContent:"center",
    alignItems:"center",
    padding:10
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
    // paddingTop: 10,
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
    // padding: 10,
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
    width: 70,
    height: 70,
    shadowOpacity: 0.2,
    shadowRadius:4,
    elevation: 5,
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
    alignItems:"center",
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
    padding: 15
  },
  savingCardheader2: {
    // borderBottomWidth: 0.5,
    ...Theme.ligth_gray_border_Color,
    padding: 15
  },
  savingCardheaderHome: {
    ...Theme.ligth_gray_border_Color,
    padding: 15
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
    padding: 10
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
    // marginTop: 15,

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
  Chart:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
  },
  textIcon:{
    fontSize: 16,
    // marginLeft:10
  }

});
