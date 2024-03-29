import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../components/Inputs'
import { RequestButton, OutlineButton } from '../components/Buttons'
import CardInage from '../assets/HomeScreenImages/bankCard.png'
import HomeDuet from '../assets/HomeScreenImages/duit-now-01.png'
import DuetQr from '../assets/HomeScreenImages/DuitNowQR1.png'
import Transfer from '../assets/HomeScreenImages/Icons.png'
import Statement from '../assets/HomeScreenImages/Icons1.png'
import Market from '../assets/HomeScreenImages/market.png'
import Modal from 'react-native-modal';
import Header from '../components/header/header'
import ThemeSty from '../assets/styles/basic'

const HomeScreen = ({ disabled }) => {
  const [progress, setProgress] = useState(0);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);

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

  const data2 = [
    {
      name: 'Bank Account',
      Icon: <Icons.MaterialCommunityIcons name="bank-outline" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
    {
      name: 'Mobile Number',
      Icon: <Icons.AntDesign name="contacts" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
    {
      name: 'CNIC',
      Icon: <Icons.AntDesign name="contacts" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
    {
      name: 'MyPolis/MyTentera',
      Icon: <Icons.AntDesign name="contacts" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
    {
      name: 'Business Registration Number',
      Icon: <Icons.AntDesign name="contacts" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
    {
      name: 'Passport Number',
      Icon: <Icons.AntDesign name="contacts" />,
      Icon2: <Icons.MaterialIcons name="arrow-forward-ios" />,
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.Progress}>
          <Header />
        </View>
        <View
          style={{
            padding: 5,
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              ...ThemeSty.gray_color_f,
              ...ThemeSty.Font_family,
            }}>
            Spending balance
          </Text>

          <Icons.AntDesign
            name="infocirlceo"
            style={{
              marginLeft: 5,
              fontSize: 12,
              ...ThemeSty.Green_color_f,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            ...ThemeSty.black_color_f,
            ...ThemeSty.Font_family,
            textAlign: 'center',
          }}>
          AED 10,000.00
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CardMangementOne')}>
          <View style={{ padding: 5, marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TouchableOpacity>
            <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={HomeDuet} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...ThemeSty.black_color_f, fontWeight: "500", marginTop: 5 }}>DuitNow  Transfer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('AllowQR')}>
        
          <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.boxes}>
              <Image source={DuetQr} style={styles.boxImage} />
            </View>
            <Text
              style={{
                fontSize: 12,
                ...ThemeSty.black_color_f,
                fontWeight: '500',
                marginTop: 5,
                textAlign: 'center',
              }}>
              DuitNow QR
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')}>
            <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={Transfer} style={styles.boxImage} />
              </View>
              <Text style={{ fontSize: 12, ...ThemeSty.black_color_f, fontWeight: "500", marginTop: 5 }}>Transaction History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Statements')} style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
              <View style={styles.boxes}>
                <Image source={Statement} style={styles.boxImage} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  ...ThemeSty.black_color_f,
                  fontWeight: '500',
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                Latest Statements
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMenu}>
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
          <View style={styles.card}>
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
          </View>
          <View style={styles.card}>
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
          </View>
        </View>

        <Modal
          isVisible={isBottomSheetVisible}
          style={{margin: 0}}
          onBackdropPress={toggleBottomSheet}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
                  Select your transfer type
                </Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ ...ThemeSty.gray_color_f, ...ThemeSty.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
                  Alternatively you may email us at:
                  bank@ssssco.com
                  We’ll get this sorted!</Text>
              </View>
              <View style={{ padding: 20, ...ThemeSty.bg_light_green_color }}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>Customer Support: +6016 299 5333 (fraud support line 24/7) or email to us at:  bank@ssssco.com</Text>
              </View>
              <View style={{ padding: 10, alignItems: "center" }}>
                <OutlineButton text='Report Fraud' onPress={toggleBottomSheet2} />
              </View>
              <View style={{ alignItems: "center" }}>
                <RequestButton text='Give us call' onPress={toggleBottomSheet2} />
              </View>

            </View>
          </View>
        </Modal>
        <Modal
          isVisible={isBottomSheetVisible2}
          style={{margin: 0}}
          onBackdropPress={toggleBottomSheet2}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: 'transparent',
                padding: 24,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View style={{padding: 10, alignItems: 'center'}}>
                <OutlineButton text="call +165464661" />
              </View>
              <View style={{alignItems: 'center'}}>
                <RequestButton text="Cancel" />
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
  containerMenu: {
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
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fff', // Replace with your desired background color
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 5,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 50,
  },
  textContainer: {
    width: 220,
    marginLeft: 10,
  },
  title: {
    ...ThemeSty.black_color_f,
    fontSize: 16,
    fontWeight: '700',
    ...ThemeSty.Font_family,
  },
  description: {
    ...ThemeSty.gray_color_f,
    fontSize: 12,
    fontWeight: '500',
    ...ThemeSty.Font_family,
  },
  arrowIcon: {
    fontSize: 24,
    ...ThemeSty.Green_color_f,
  },
  boxes: {
    borderWidth: 1,
    ...ThemeSty.ligth_gray_border_Color,
    padding: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  boxImage: {
    resizeMode: 'contain',
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
    ...ThemeSty.Font_family,
    ...ThemeSty.black_color_h,
  },
  cell: {
    flex: 1,
    fontWeight: '500',
    ...ThemeSty.Font_family,
    fontSize: 14,
    ...ThemeSty.black_color_h,
  },
  cell2: {
    flex: 1,
    fontWeight: '500',
    ...ThemeSty.Font_family,
    fontSize: 14,
    ...ThemeSty.Light_gray_color_f,
  },
});
