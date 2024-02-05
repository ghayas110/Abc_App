import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import Theme from "../../assets/styles/basic"
import Icons from '../../components/Icons'
import Image1 from '../../assets/Finance/finance1.png'
import { RequestButton } from '../../components/Buttons'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import LottieView from 'lottie-react-native'

const Finance = () => {
    const navigation = useNavigation();
    const HandleNavigate = () => {
        navigation.navigate('Checknote');
    };
    

    const data = [
        { key: '1', title: 'Apply for up to AED250,000*' },
        { key: '2', title: 'Quick decisioning outcome' },
        { key: '3', title: 'Receive funds within a day' },
        { key: '4', title: 'Enjoy competitive rates' },
        { key: '5', title: 'Flexible duration between 12 - 84 months\n     (1 - 7 years)' },
        { key: '6', title: 'Take control of your financing using the\n     ssssco app' }
    ];

    const renderItem = ({ item }) => (
        <View>
            <Text style={{ fontSize: 12, ...Theme.Font_family, ...Theme.black_color_h, fontWeight: "500", }}>
                <Icons.Entypo name="dot-single" /> {item.title}
            </Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Financing Center</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.balanceCard}>
                    <Text style={styles.balanceText}>Additional funds to achieve your life goals</Text>
                </View>
            </View>


            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                pagination={false}
                autoplay={false}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                autoplayTimeout={3}
                nextButton={<View />}
                prevButton={<View />}
            >

                <View style={styles.savingCard}>
                    <View style={styles.savingCardheader}>
                        <View style={styles.savingCardHeadertext}>
                        <LottieView source={require('../../assets/lotiefiles/achieve_your_financial_goals_animation.json')} autoPlay style={{width:"100%",height:120}} />
                        </View>
                        <View style={styles.savingCardHeadertext2}>
                            <Text style={styles.textSavingtext2}>ssssco Personal Financing-i</Text>
                            <Text style={styles.textNumber}>Get financing for your most important life events - without the hassle.</Text>
                        </View>

                    </View>
                    <View style={styles.SavingsPots}>
                        <View style={styles.savingpotcard}>
                            <Text style={styles.benefits}>Benefits:</Text>
                            <View style={styles.savingpottextcontianer}>
                                <FlatList
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.key}
                                />
                                <View>
                                    <Text style={styles.termandcondition} >*Terms and conditions applies</Text>
                                </View>
                                <View style={{ alignItems: "center", }}>
                                    <RequestButton btnStyle={{ width: 305 }} text={"Check Notes"} onPress={HandleNavigate} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.savingCard}>
                    <View style={styles.savingCardheader}>
                        <View style={styles.savingCardHeadertext}>
                            <Image source={Image1} style={styles.ImagePFCard} />
                        </View>
                        <View style={styles.savingCardHeadertext2}>
                            <Text style={styles.textSavingtext2}>ssssco Personal Financing-i</Text>
                            <Text style={styles.textNumber}>Get financing for your most important life events - without the hassle.</Text>
                        </View>

                    </View>
                    <View style={styles.SavingsPots}>
                        <View style={styles.savingpotcard}>
                            <Text style={styles.benefits}>Benefits:</Text>
                            <View style={styles.savingpottextcontianer}>
                                <FlatList
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.key}
                                />
                                <View>
                                    <Text style={styles.termandcondition} >*Terms and conditions applies</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <RequestButton btnStyle={{ width: 305 }} text={"Check Notes"} onPress={HandleNavigate} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </Swiper>



        </View>
    )
}

export default Finance

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        padding: 10
    },
    header: {
        // height:100,
        // backgroundColor:"red",
        padding: 10,
        borderBottomWidth: 0.5,
        ...Theme.gray_border_Color,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        textAlign: "center",
        ...Theme.black_color_h,
        fontWeight: "700",
        fontSize: 20,
    },
    balanceCard: {
        padding: 15,
    },

    balanceText: {
        fontSize: 28,
        ...Theme.Green_color_h,
        ...Theme.Font_family,
        fontWeight: "700",
    },

    cardContainer: {
        padding: 10,
        paddingVertical: 5

    },


    Headertext: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    savingCard: {
        borderRadius: 15,
        borderWidth: 0.5,
        // padding: 15,
        backgroundColor: "#FFFFFF",
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
    savingCardHeadertext2: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,

    },
    savingCardheader: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        fontWeight: '600',
        fontSize: 16,
        ...Theme.Font_family,
        ...Theme.black_color_h,
    },
    textNumber: {
        fontWeight: '500',
        fontSize: 14,
        ...Theme.Font_family,
        ...Theme.gray_color_h,
    },
    savingpotcard: {
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
    ImagePFCard: {
        resizeMode: "contain",

    },
    benefits: {
        fontWeight: '500',
        fontSize: 12,
        ...Theme.Font_family,
        ...Theme.black_color_h,
    },
    termandcondition: {
        padding: 10,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        ...Theme.Font_family,
        ...Theme.Light_gray_color_f,
    },
    Swiper: {
        flexDirection: 'row',
    },
    activeDot: {
        width: 15,
        height: 5,
        backgroundColor: "#00A200"
    },
    dot: {
        width: 15,
        height: 5,
        color: '#00A200'
    },
})