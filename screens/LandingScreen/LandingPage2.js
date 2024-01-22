import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LandingLogo from '../../assets/LandingScreen/Slider1.png'
import LandingLogo2 from '../../assets/LandingScreen/slider2png.png'
import LandingLogo3 from '../../assets/LandingScreen/slider3.png'
import LandingLogo4 from '../../assets/LandingScreen/Slider4.png'
import Icon from '../../components/Icons';
import { RequestButton } from '../../components/Buttons';
import Fonts from '../../assets/styles/basic'
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic'


const LandingPage2 = () => {
    const navigation = useNavigation()
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const handleNavigation = () => {
        navigation.navigate('CreateUserName');
    };
    const handleBackNavigation = () => {
        navigation.navigate('Landing');
    };


    const listItems = [
        'Open a Savings Account-i in minutes',
        'Digital-only: you can bank anywhere, anytime',
    ];
    const listItems2 = [
        'The only digital bank Savings Pot with a profit rate',
        'Invite friends and family to contribute',
    ];
    const listItems3 = [
        'Discover exclusive offers from our partners and make donations easily on Marketplace',
        // 'Digital-only: you can bank anywhere, anytime',
    ];
    const listItems4 = [
        'Get your Personal Financing-i in 15 minutes',
        'Fully paperless process',
    ];
    const Modallistem = [
        'I’m 18 years old and above',
        'I’m a Malaysian citizen with a MyKad, living in Malaysia',
        'I have an existing online banking account with another bank in Malaysia',
        'I’m NOT a US person ',
        'I dont pay income tax in any other country besides Malaysia',
    ];

    return (
        <>
            <View style={styles.Container}>
                <View style={styles.BackArrow}>
                    <Icon.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} onPress={handleBackNavigation} />
                </View>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={true}
                    autoplay={true}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    autoplayTimeout={3}
                    nextButton={<View />}
                    prevButton={<View />}
                >
                    <View style={styles.slide}>
                        <View style={styles.Logos}>
                            <Image source={LandingLogo} style={styles.image1} />
                        </View>
                        <View style={styles.HeadContainer}>
                            <Text style={{ ...styles.HeaderText, ...ThemeSty.Green_color_h }} >Manage your money on the go</Text>
                        </View>
                        <View style={styles.SliderList}>
                            {listItems.map((item, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={{ fontSize: 20, marginRight: 8, fontWeight: '500', ...ThemeSty.gray_color_f }}>{'\u2022'}</Text>
                                    <Text style={{ fontSize: 20, ...ThemeSty.Font_family, fontWeight: '500', ...ThemeSty.gray_color_f }}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.Logos}>
                            <Image source={LandingLogo2} style={styles.image1} />
                        </View>
                        <View style={styles.HeadContainer}>
                            <Text style={{ ...styles.HeaderText, ...ThemeSty.Green_color_h }} >Achieve Your Financial Goals</Text>
                        </View>
                        <View style={styles.SliderList}>
                            {listItems2.map((item, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={{ fontSize: 20, marginRight: 8, fontWeight: '500', ...ThemeSty.gray_color_f }}>{'\u2022'}</Text>
                                    <Text style={{ fontSize: 20, ...ThemeSty.Font_family, fontWeight: '500', ...ThemeSty.gray_color_f }}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.Logos}>
                            <Image source={LandingLogo3} style={styles.image1} />
                        </View>
                        <View style={styles.HeadContainer}>
                            <Text style={{ ...styles.HeaderText, ...ThemeSty.Green_color_h }} >Exciting deals just for you</Text>
                        </View>
                        <View style={styles.SliderList}>
                            {listItems3.map((item, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={{ fontSize: 20, marginRight: 8, fontWeight: '500', ...ThemeSty.gray_color_f }}>{'\u2022'}</Text>
                                    <Text style={{ fontSize: 20, ...ThemeSty.Font_family, fontWeight: '500', ...ThemeSty.gray_color_f }}>{item}</Text>
                                </View>
                            ))}
                        </View>

                    </View>
                    <View style={styles.slide}>
                        <View style={styles.Logos}>
                            <Image source={LandingLogo4} style={styles.image1} />
                        </View>
                        <View style={styles.HeadContainer}>
                            <Text style={{ ...styles.HeaderText, ...ThemeSty.Green_color_h }} >Financing whenever you need it.</Text>
                        </View>
                        <View style={styles.SliderList}>
                            {listItems4.map((item, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={{ fontSize: 20, marginRight: 8, fontWeight: '500', ...ThemeSty.gray_color_f }}>{'\u2022'}</Text>
                                    <Text style={{ fontSize: 20, ...ThemeSty.Font_family, fontWeight: '500', ...ThemeSty.gray_color_f }}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </Swiper>

            </View>



            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnLogin} onPress={toggleBottomSheet}>

                    <Icon.AntDesign name="infocirlceo" style={styles.Icon} />
                    <Text style={{...styles.Texte , ...ThemeSty.Font_family, ...ThemeSty.Green_color_f}}>am i eligible?</Text>
                </TouchableOpacity>
                <View style={styles.btnLogin2}>
                    <TouchableOpacity >
                        <RequestButton text="Sign Up" onPress={handleNavigation} />
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                            <View>
                                <Text style={{ fontSize: 28, fontWeight: '700', ...ThemeSty.Green_color_f, ...ThemeSty.Font_family }} >Yes, I'm eligible!</Text>
                            </View>
                            <View style={styles.SliderList}>
                                {Modallistem.map((item, index) => (
                                    <View key={index} style={styles.listItem}>
                                        <Text style={{ fontSize: 16, marginRight: 8, }}>{'\u2022'}</Text>
                                        <Text style={{ fontSize: 16, ...ThemeSty.Font_family, fontWeight: '500', }}>{item}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={{ padding: 20, ...ThemeSty.bg_light_green_color }}>
                                <Text style={{ ...ThemeSty.Green_color_f, fontSize: 14, ...ThemeSty.Font_family, fontWeight: '500', }}><Text>Note:</Text>You are a US person if you are either a US citizen, a US resident or a Green Card holder.</Text>
                            </View>
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
        height: "auto",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginBottom: 12,

    },
    btnLogin: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    Texte: {
        // color: {...ThemeSty.Green_color_f},
        // fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        textAlign: "center",
        marginLeft: 5,

    },
    HeaderText: {
        // color: '#00A200',
        // color:{...ThemeSty.Green_color_h},
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 28,
    },
    Icon: {
        color: '#00A200',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
    },
    HeadContainer: {
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
    dot: {
        width: 15,
        height: 5,
        // color: '#00A200'
    },
    activeDot: {
        width: 15,
        height: 5,
        backgroundColor: "#00A200"
    },
    SliderList: {
        padding: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    items: {
        fontSize: 16,
        fontFamily: 'italic',
        fontWeight: '500',
        fontFamily: { ...ThemeSty.Font_family}
    },
    BackArrow: {
        width: "100%",
        padding: 10,
    },
    BackArrowIcon: {
        color: "#00A200",
        fontSize: 16,
    },
    btnLogin2: {

    }




})