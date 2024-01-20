import { StyleSheet, Text, View, Image, Button, FlatList,  TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LandingLogo from '../../assets/LandingScreen/Slider1.png'
import LandingLogo2 from '../../assets/LandingScreen/slider2png.png'
import LandingLogo3 from '../../assets/LandingScreen/slider3.png'
import LandingLogo4 from '../../assets/LandingScreen/Slider4.png'
import Icon from '../../components/Icons';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';

const LandingPage2 = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    
  return (
      <>
          <View style={styles.Container}>
              <Swiper
                  style={styles.wrapper}
                  showsButtons={true}
                  autoplay={true}           // Enable autoplay
                  autoplayTimeout={3} 
                  nextButton={<View />}
                  prevButton={<View />}      // Set autoplay timeout in seconds
              >
                  <View style={styles.slide}>
                      <View style={styles.Logos}>
                          <Image source={LandingLogo} style={styles.image1} />
                      </View>
                      <View style={styles.HeadContainer}>
                          <Text style={styles.HeaderText} >Manage your money on the go</Text>
                      </View>
                  </View>
                  <View style={styles.slide}>
                      <View style={styles.Logos}>
                          <Image source={LandingLogo2} style={styles.image1} />
                      </View>
                      <View style={styles.HeadContainer}>
                          <Text style={styles.HeaderText} >Manage your money on the go</Text>
                      </View>
                  </View>
                  <View style={styles.slide}>
                      <View style={styles.Logos}>
                          <Image source={LandingLogo3} style={styles.image1} />
                      </View>
                      <View style={styles.HeadContainer}>
                          <Text style={styles.HeaderText} >Manage your money on the go</Text>
                      </View>
                  </View>
                  <View style={styles.slide}>
                      <View style={styles.Logos}>
                          <Image source={LandingLogo4} style={styles.image1} />
                      </View>
                      <View style={styles.HeadContainer}>
                          <Text style={styles.HeaderText} >Manage your money on the go</Text>
                      </View>
                  </View>
              </Swiper>

          </View>
          


          <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnLogin} onPress={toggleBottomSheet}>
                
                  <Icon.AntDesign name="infocirlceo"  style={styles.Icon} />
                  <Text style={styles.Texte}>am i eligible?</Text>
              </TouchableOpacity>
              <View style={styles.btnLogin2}>
                  <Button title="Sign Up" />
              </View>
              <Modal
                  isVisible={isBottomSheetVisible}
                  style={{ margin: 0}}
                  onBackdropPress={toggleBottomSheet}
              >
                  <View style={{ flex: 1, justifyContent: 'flex-end'  }}>
                      <View style={{ backgroundColor: 'white', padding: 16, borderTopRightRadius: 20, borderTopLeftRadius: 20,  height:500, }}>
                          <Text>Your Bottom Sheet Content</Text>
                      </View>
                  </View>
              </Modal>
          </View>
      </>
  )
}

export default LandingPage2

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    Logos: {
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    image1: {
        resizeMode: 'contain',
    },
    btnContainer: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        marginBottom: 12,

    },
    btnLogin: {
        width:"100%",
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center",
        marginBottom:10,
    },
    Texte: {
        color: '#00A200',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        textAlign:"center",
        marginLeft:5,

    },
    HeaderText:{
        color: '#00A200',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 28,
    },
   Icon :{
       color: '#00A200',
       fontFamily: 'Poppins',
       fontWeight: '700',
       fontSize: 16,
   },
    HeadContainer:{
        paddingLeft: 15,
        paddingRight: 15,
    },
    wrapper: {
        // height: 200,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },










})