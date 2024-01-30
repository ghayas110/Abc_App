import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Button, Linking } from 'react-native'
import BackBtn from '../../assets/TopUp/TopUpBack.png'
import { useNavigation } from "@react-navigation/native";
import { RequestButton, OutlineButton } from '../../components/Buttons';
import style from "../../assets/styles/basic"
import Modal from 'react-native-modal';
import Cross from '../../assets/SignUp/cross.png'
import Acountready from '../../assets/SignUp/acountready.png'


const TopUp = () => {
    const [open, setOpen] = useState(false)
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        bottomSheetContainer: {
            backgroundColor: 'white',
            height: "45%",
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        containerFluid: {
            backgroundColor: 'white'
        },
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        TopNavigator: {
            justifyContent: 'space-between',
            borderBottomColor: '#CCCCCC',
            borderBottomWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10
        },
        TopNavigatorHeading: {
            fontFamily: 'Poppins-Bold',
            color: 'black',
            fontSize: 20
        },
        TopNavigatorHeading2: {
            display: 'none'
        },
        ListSide: {
            paddingHorizontal: 20,
            // flexDirection:'column',
            // justifyContent:'center',
            // alignItems:'center'
        },
        ListNode: {
            flexDirection: 'column',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC"
        },
        listNodeHeading: {
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: 16
        },
        listNodeHeadingDate: {
            fontFamily: 'Poppins-Medium',
            fontSize: 13,
            color:'#808080'
        },
        CalenderSelect: {
            padding: 20,
        },
        CalenderSelectInner: {
            borderWidth: 1,
            width: 120,
            borderColor: '#00A200',
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent:'center'
        },
        CalenderDate: {
            color: '#00A200',
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            marginLeft: 10
        },
        BackImage: {
            transform: [{ rotateY: '20deg' }, { rotateZ: '270deg' }],
            marginLeft: 8,
            marginBottom: 5
        },
        warning: {
            backgroundColor: "#DCF2FC",
            padding: 20,
            marginTop: 20,
            borderRadius: 5,
        },
        warningText: {
            fontFamily: 'Poppins-Medium',
            fontSize: 15,
            color: '#006400'

        },
        SelectYear: {
            color: 'black',
            fontFamily: "Poppins-Bold",
            fontSize: 22
        },
        container2: {
            flexDirection: 'column',
            paddingHorizontal: 20
        },
        SelectYearList: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 15,
            borderBottomColor: "#eeeeee",
            borderBottomWidth: 1
        },
        SelectYearListText: {
            color: '#00A200',
            fontFamily: 'Poppins-Medium',
            fontSize: 18
        }
    })
    const styless = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 80,
            padding: 30,
            height: height * 0.9,
            justifyContent: 'space-between'
        },
        text2: {
            fontSize: 16,
            fontWeight: "500",
            textAlign: 'center',
            lineHeight: 20,
        },
        bottomView: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
        },
    })
    const [listData, setListData] = useState([
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2023",
            year: 2023,
            id: 12
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 13
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 34
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 345
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 3453
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 65
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2021",
            year: 2021,
            id: 67
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2022",
            year: 2022,
            id: 1
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2022",
            year: 2022,
            id: 2
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2022",
            year: 2022,
            id: 3
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2023",
            year: 2023,
            id: 4
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2023",
            year: 2023,
            id: 5
        },
        {
            Heading: "Savings Account-i Statement",
            Para: "MAR 2023",
            year: 2023,
            id: 6
        }
    ])
    const onOpenBtn = () => setOpen(true);
    const [currentYear, setCurrentYear] = useState(2023)

    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false)
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const toggleBottomSheet2 = () => {
        setBottomSheetVisible2(!isBottomSheetVisible2);
    };
    return (
        <ScrollView style={styles.containerFluid}>
            <View style={styles.container}>
                <View style={styles.TopNavigator}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={BackBtn}></Image>
                    </TouchableOpacity>
                    <Text style={styles.TopNavigatorHeading}>Statements</Text>
                    <View>
                        <Text style={styles.TopNavigatorHeading2}>0</Text>
                    </View>
                </View>
                <View style={styles?.CalenderSelect}>
                    <TouchableOpacity onPress={onOpenBtn} style={styles?.CalenderSelectInner}>
                        <Text style={styles?.CalenderDate}>{currentYear}</Text>
                        <Image style={styles.BackImage} source={BackBtn}></Image>
                    </TouchableOpacity>
                </View>
                {listData?.filter(dat => dat.year == currentYear)?.map(Data =>
                    <View key={Data?.id} style={styles.ListSide}>
                        <View style={styles.ListNode}>
                            <Text style={styles.listNodeHeading}>{Data?.Heading}</Text>
                            <Text style={styles.listNodeHeadingDate}>{Data?.Para}</Text>
                        </View>
                    </View>
                )}
                <View style={styles.ListSide}>
                    <View style={styles.warning}>
                        <Text style={styles.warningText}>To retrieve older statements, please contact us.</Text>
                    </View>
                    <RequestButton btnStyle={{
                        width: width * 0.97,
                        marginTop: 10,
                        marginLeft: -15
                    }} text={"Contact Customer Support"} onPress={() => toggleBottomSheet()}></RequestButton>
                </View>


                <Modal
                    isVisible={open}
                    style={{ margin: 0 }}
                    onBackdropPress={() => setOpen(false)}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{
                            ...styles.bottomSheetContainer,
                        }}>
                            <View style={{
                                ...style.basic_container,
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={() => setOpen(false)}
                                    style={{
                                        ...style.bg_light_gray,
                                        padding: 15,
                                        marginRight: 30,
                                        borderRadius: 40,
                                    }}>
                                    <Image source={Cross} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.SelectYear}>Select Year</Text>
                                <TouchableOpacity onPress={() => {
                                    setOpen(false)
                                    setCurrentYear(2021)
                                }} style={styles.SelectYearList}>
                                    <Text style={styles.SelectYearListText}>2021</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setOpen(false)
                                    setCurrentYear(2022)
                                }} style={styles.SelectYearList}>
                                    <Text style={styles.SelectYearListText}>2022</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setOpen(false)
                                    setCurrentYear(2023)
                                }} style={styles.SelectYearList}>
                                    <Text style={styles.SelectYearListText}>2023</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>



                <Modal
                    isVisible={isBottomSheetVisible}
                    style={{ margin: 0 }}
                    onBackdropPress={toggleBottomSheet}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                            <View>
                                <Text style={{ fontSize: 28, fontWeight: '700', ...style.Green_color_f, ...style.Font_family }} >How can we help?</Text>
                            </View>
                            <View style={{ padding: 15 }}>
                                <Text style={{ ...style.gray_color_f, ...style.Font_family, fontSize: 16 }}>lease reach out to our 24 hours Customer Support team 1820 54 3469 (local) or +7336 559 6220 (overseas).
                                    Alternatively you may email us at:
                                    SmartStar-cs@SmartStar.com.
                                    We’ll get this sorted!</Text>
                            </View>
                            <View style={{ padding: 20, ...style.bg_light_green_color }}>
                                <Text style={{ ...style.Green_color_f, fontSize: 14, ...style.Font_family, fontWeight: '500', }}>Customer Support: +7336 559 6220 (fraud support line 24/7) or email to us at:  SmartStar-fraud@SmartStar.com</Text>
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
                                <OutlineButton onPress={() => Linking.openURL(`tel:${'+73365596220'}`)} text='call +7336 559 6220' />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <RequestButton onPress={() => toggleBottomSheet2()} text='Cancel' />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default TopUp


