import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icons from '../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../components/Inputs'
import { RequestButton, OutlineButton } from '../components/Buttons'
import CardInage from '../assets/HomeScreenImages/RyseCard.png'
import HomeDuet from '../assets/HomeScreenImages/duit-now-01.png'
import DuetQr from '../assets/HomeScreenImages/DuitNowQR1.png'
import Transfer from '../assets/HomeScreenImages/Icons.png'
import Statement from '../assets/HomeScreenImages/Icons1.png'
import Market from '../assets/HomeScreenImages/market.png'
import Modal from 'react-native-modal';
import Header from '../components/header/header'
import ThemeSty from '../assets/styles/basic'
import ProgressBar from 'react-native-progress/Bar';


const HomeScreen = ({ disabled }) => {
  const [progress, setProgress] = useState(0);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const toggleBottomSheet2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
  };

  const navigation = useNavigation();

  const ForWordnavigation = () => {
    navigation.navigate('StartLoginStep2');
  };




  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.Progress}>
          <Header />
        </View>
        <View style={{ padding: 5, marginTop: 25, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "500", ...ThemeSty.gray_color_f, ...ThemeSty.Font_family }}>
            Spending balance
          </Text>

          <Icons.AntDesign name="infocirlceo" style={{
            marginLeft: 5,
            fontSize: 12, ...ThemeSty.Green_color_f
          }} />
        </View>
        <Text style={{ fontSize: 24, fontWeight: "700", ...ThemeSty.black_color_f, ...ThemeSty.Font_family ,textAlign:"center" }}>
          AED 10,000.00
        </Text>
        <View style={{ padding: 5, marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          
          <Image source={CardInage} style={{ width: 300, height: 300, resizeMode: "contain", }} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, }}>
          <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={{ borderWidth: 1, ...ThemeSty.gray_border_Color, padding: 25, borderRadius: 20, justifyContent: "center", alignItems: 'center' }}>
              <Image source={HomeDuet} style={{ resizeMode: "contain" , width:25, height:30}} />
            </View>
            <Text style={{ fontSize: 12, ...ThemeSty.black_color_f, fontWeight: "500", marginTop: 5 }}>DuitNow  Transfer</Text>
          </View>
          <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={{ borderWidth: 1, ...ThemeSty.gray_border_Color, padding: 25, borderRadius: 20, justifyContent: "center", alignItems: 'center' }}>
              <Image source={DuetQr} style={{ resizeMode: "contain", width: 25, height: 30 }} />
            </View>
            <Text style={{ fontSize: 12, ...ThemeSty.black_color_f, fontWeight: "500", marginTop: 5 }}>DuitNow QR Code</Text>
          </View>
          <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={{ borderWidth: 1, ...ThemeSty.gray_border_Color, padding: 25, borderRadius: 20, justifyContent: "center", alignItems: 'center' }}>
              <Image source={Transfer} style={{ resizeMode: "contain", width: 25, height: 30 }} />
            </View>
            <Text style={{ fontSize: 12, ...ThemeSty.black_color_f, fontWeight: "500", marginTop: 5 }}>Transaction History</Text>
          </View>
          <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
            <View style={{ borderWidth: 1, ...ThemeSty.gray_border_Color, padding: 25, borderRadius: 20, justifyContent: "center", alignItems: 'center' }}>
              <Image source={Statement} style={{ resizeMode: "contain", width: 25, height: 30 }} />
            </View>
            <Text style={{ fontSize: 12, ...ThemeSty.black_color_f , fontWeight: "500", marginTop:5
             }}>Latest Statements</Text>
          </View>




        </View>


        <View style={styles.containerMenu}>
          <View style={styles.card}>
            <Image source={Market} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Marketplace</Text>
              <Text style={styles.description}>
                Financial products that let you be more by doing more for others.
              </Text>
            </View>
            <Icons.MaterialIcons
              name='arrow-forward-ios'
              style={styles.arrowIcon}
            />
          </View>
          <View style={styles.card}>
            <Image source={Market} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Marketplace</Text>
              <Text style={styles.description}>
                Financial products that let you be more by doing more for others.
              </Text>
            </View>
            <Icons.MaterialIcons
              name='arrow-forward-ios'
              style={styles.arrowIcon}
            />
          </View>
          <View style={styles.card}>
            <Image source={Market} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Marketplace</Text>
              <Text style={styles.description}>
                Financial products that let you be more by doing more for others.
              </Text>
            </View>
            <Icons.MaterialIcons
              name='arrow-forward-ios'
              style={styles.arrowIcon}
            />
          </View>
        </View>

        <Modal
          isVisible={isBottomSheetVisible}
          style={{ margin: 0 }}
          onBackdropPress={toggleBottomSheet}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
              <View>
                <Text style={{ fontSize: 28, fontWeight: '700', ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }} >How can we help?</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ ...ThemeSty.gray_color_f, ...ThemeSty.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1800 81 9149 (local) or +6016 299 6610 (overseas).
                  Alternatively you may email us at:
                  Rize-cs@alrajhibank.com.my
                  We’ll get this sorted!</Text>
              </View>
              <View style={{ padding: 20, ...ThemeSty.bg_light_green_color }}>
                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}>Customer Support: +6016 299 5333 (fraud support line 24/7) or email to us at:  Rize-fraud@alrajhibank.com.my.</Text>
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
          style={{ margin: 0 }}
          onBackdropPress={toggleBottomSheet2}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: 'transparent', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
              <View style={{ padding: 10, alignItems: "center" }}>
                <OutlineButton text='call +165464661' />
              </View>
              <View style={{ alignItems: "center" }}>
                <RequestButton text='Cancel' />
              </View>

            </View>
          </View>
        </Modal>
      </ScrollView>
    </>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: "Space-evently",

  },


  Image: {
    width: 180,
    height: 50
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: "#00A200",
    marginTop: 10,
  },


  CheckIcon: {
    fontSize: 14,
    color: "#808080",
    fontFamily: 'Poppins',
    fontWeight: "500"
  },

  BackArrowIcon: {
    color: "#00A200",
    fontSize: 16,
    position: 'relative',
    right: 50,
  },
  ForgotPassword: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMenu:{
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop:5
  },
  image: {
    resizeMode: 'contain',
    width:40,
    height:50
    
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

})
