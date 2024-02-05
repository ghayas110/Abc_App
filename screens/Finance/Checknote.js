import { StyleSheet, Text, View, ScrollView, Image, FlatList, SafeAreaView } from 'react-native'
import Theme from "../../assets/styles/basic"
import Icons from '../../components/Icons'
import Image1 from '../../assets/Finance/finance1.png'
import { RequestButton , OutlineButton } from '../../components/Buttons'
import { ExampleInput, SimpleInput } from '../../components/Inputs'
import Header from './components/Header'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native'
import Cancelbtn from '../../assets/FinanceImages/Cross.png'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal';


const Checknote = () => {
    const navigation = useNavigation();
    const HandleNavigate = () => {
        navigation.navigate('DesireDuration');
    };
    const NavigateToBefore= () => {
        navigation.navigate('BeforeWeBegin');
    };
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);
    const [isBottomSheetVisible3, setBottomSheetVisible3] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const toggleBottomSheet2 = () => {
        setBottomSheetVisible2(!isBottomSheetVisible2);
    };
    const toggleBottomSheet3 = () => {
        setBottomSheetVisible3(!isBottomSheetVisible3);
    };



    const Flatlist = [
        {
            name: 'Recipient bank ',
            text: "Select recipient bank",
            Icon2: <Icons.MaterialIcons name="arrow-forward-ios" style={styles.icon2} />
        },

    ];



    const renderItem = ({ item }) => (
        <>
        
         <View style={styles.flatlistrow}>
                <View style={{ flex: 1 }}>
                    <SimpleInput style={styles.Input} label="Desire Duration" placeholder='Enter amount' />
                </View>
                <View>
                    <Text style={styles.Select} onPress={HandleNavigate}>{item.Icon2}</Text>
                </View>
            </View>
        </>
    );



    return (
        < >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 5 }}>
                    <View style={styles.header}>
                        <Header
                            title={"Check Rates"}
                            backtoPage={true}
                            // backtoPage2={true}
                            backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                        />
                    </View>
                    <View style={styles.YourDesireCon}>
                        <View style={styles.Desireheader}>
                            <Text style={styles.Desireheadertext}>Your desired financing</Text>
                        </View>
                        <View style={styles.InsertAmount}>
                            <Text style={styles.InsertAmountHeadingText}>Desired amount</Text>
                            <View style={styles.HeadingInput}>
                                <Text style={styles.HeadingInputText}>AED</Text>
                                {/* <ScrollView> */}
                                <ExampleInput style={styles.Input} placeholder='Enter amount' keyboardType="numeric" />
                                {/* </ScrollView> */}
                            </View>
                        </View>
                        <FlatList
                            data={Flatlist}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />


                    </View>
                    <View style={styles.YourFinanceCon}>
                        <View style={styles.Desireheader}>
                            <Text style={styles.Desireheadertext}>Your financial details</Text>
                        </View>
                        <View style={styles.InsertAmount}>
                            <Text style={styles.InsertAmountHeadingText}>Gross annual income <Icons.AntDesign name="infocirlceo" style={styles.iconInfo} onPress={toggleBottomSheet2} /></Text>
                            <View style={styles.HeadingInput}>
                                <Text style={styles.HeadingInputText}>AED</Text>
                                {/* <ScrollView> */}
                                <ExampleInput style={styles.Input} placeholder='Enter amount' keyboardType="numeric" />
                                {/* </ScrollView> */}
                            </View>
                        </View>
                        <View style={styles.InsertAmount}>
                            <Text style={styles.InsertAmountHeadingText}>Other monthly commitments with non-banks <Icons.AntDesign name="infocirlceo" style={styles.iconInfo} onPress={toggleBottomSheet} /> </Text>
                            <View style={styles.HeadingInput}>
                                <Text style={styles.HeadingInputText}>AED</Text>
                                {/* <ScrollView> */}
                                <ExampleInput style={styles.Input} placeholder='Enter amount' keyboardType="numeric" />
                                {/* </ScrollView> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.YourBtnCon}>
                        <View style={{ ...styles.Notify, ...Theme.bg_light_green_color }}>
                            <Text style={{ fontSize: 14, fontWeight: "700", ...Theme.Green_color_primary, ...Theme.Font_family, }}>
                                Note: Rates will be confirmed after submission.
                            </Text>
                        </View>
                        <View style={styles.btn}>
                            <RequestButton text={"Calculate"} onPress={toggleBottomSheet3} />
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
            <Modal isVisible={isBottomSheetVisible} style={{ margin: 0, }} onBackdropPress={toggleBottomSheet}  >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 25, borderTopLeftRadius: 25, height: 300, }}>
                        <View style={{ alignItems: "flex-end" }}>
                            <Image source={Cancelbtn} onPress={toggleBottomSheet} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 28, fontWeight: '700', ...Theme.Green_color_f, ...Theme.Font_family }} >Gross annual income</Text>
                        </View>
                        <View>
                            <Text style={{ ...Theme.gray_color_h, fontSize: 16, ...Theme.Font_family, fontWeight: '500', }}>
                                Input the amount of your gross annual income (e.g. wages, salary, commission)
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isBottomSheetVisible2} style={{ margin: 0, }} onBackdropPress={toggleBottomSheet2}  >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 25, borderTopLeftRadius: 25, height: 300, }}>
                        <View style={{ alignItems: "flex-end" }}>
                            <Image source={Cancelbtn} onPress={toggleBottomSheet} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 28, fontWeight: '700', ...Theme.Green_color_f, ...Theme.Font_family }} >Other monthly commitments with non-banks</Text>
                        </View>
                        <View>
                            <Text style={{ ...Theme.gray_color_h, fontSize: 16, ...Theme.Font_family, fontWeight: '500', }}>
                                Input the amount of monthly commitments with non-banks financial institutions (e.g. microloan, koperasi obligations)
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={isBottomSheetVisible3} style={{ margin: 0, }} onBackdropPress={toggleBottomSheet3}  >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'white', padding: 16, borderTopRightRadius: 30, borderTopLeftRadius: 30, height: 700, }}>
                        <View>
                            <Text style={styles.ModelHead}>Check Rates</Text>
                        </View>
                        <View style={styles.RatesBoxes}>
                            <View style={styles.RatesBox}>
                                <Text style={styles.textbox}>Indicative rate</Text>
                                <Text style={styles.textrate}>5% p.a.</Text>
                            </View>
                            <View style={styles.RatesBox}>
                                <Text style={styles.textbox}>Indicative rate</Text>
                                <Text style={styles.textrate}>5% p.a.</Text>
                            </View> 
                        </View>
                        <View style={styles.RatesBoxes2}>
                            <View style={styles.RatesBox2}>
                                <Text style={styles.textbox}>Monthly instalment</Text>
                                <Text style={styles.textrate}>AED 1,598.00 +</Text>
                            </View>
                        </View>
                        <View style={styles.Notes}>
                            <Text style={styles.NotesText}><Text style={{fontWeight: "700", ...Theme.Font_family , fontSize: 14, ...Theme.Green_color_h}}> Indicative rate:</Text>Minimum flat rate, actual rate will be confirmed once you submit your application.</Text>
                            <Text style={styles.NotesText}><Text style={{ fontWeight: "700", ...Theme.Font_family, fontSize: 14, ...Theme.Green_color_h }}> Indicative EPR :</Text>Minimum effective profit rate, actual rate will be confirmed once you submit your application.</Text>
                        </View>
                        <View style={styles.buttoncon}>
                            <View style={{alignItems:"center"}}>
                                <OutlineButton text={'Recalculate'} />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <RequestButton text={'Start application'} onPress={NavigateToBefore} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Checknote

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 10,


    },
    header: {
        borderBottomWidth: 0.5,
        ...Theme.gray_border_Color,
        paddingVertical: 2
    },
    headerText: {
        textAlign: "center",
        ...Theme.black_color_h,
        fontWeight: "700",
        fontSize: 20,
    },
    YourDesireCon: {
        flex: 1,
        padding: 10,

    },
    Desireheader: {
        paddingVertical: 10,
    },
    Desireheadertext: {
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontSize: 16,
        fontWeight: "700",


    },
    InsertAmount: {
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: 10,

    },
    Input: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontSize: 16,
    },
    HeadingInput: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    InsertAmountHeadingText: {
        ...Theme.gray_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
        fontSize: 12,
    },
    HeadingInputText: {
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        fontSize: 16,


    },
    YourFinanceCon: {
        flex: 1,
        padding: 10
    },
    YourBtnCon: {
        height: 150,
        justifyContent: "space-between",
        flexDirection: "column",
    },
    flatlistrow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        marginTop: 10,
    },
    icon2: {
        fontSize: 20,
        ...Theme.Green_color_f
    },
    name: {
        fontSize: 12,
        ...Theme.gray_color_h,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    Select: {
        marginTop: 30,
        padding: 5,

    },
    Notify: {
        backgroundColor: "#DCF2FC",
        padding: 16,
    },
    iconInfo: {
        ...Theme.Green_color_h,
        fontSize: 12,
    },
    btn: {
        alignItems: "center",
    },
    ModelHead:{
        fontWeight: "600",
        fontSize: 20,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        textAlign: "center",
        
    },
    RatesBoxes:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    RatesBox:{
         ...Theme.bg_light_gray,
         borderRadius:15,
         width:150,
        //  borderWidth:1,
         padding:16,
         margin:10
    },
    textbox:{
        ...Theme.Font_family,
        ...Theme.gray_color_h,
        fontWeight: '500',
        fontSize: 12, 
    },
    textrate:{
        ...Theme.Font_family,
        ...Theme.Green_color_h,
        fontWeight: '500',
        fontSize: 16, 
    },
    RatesBoxes2:{
     marginTop:10,

    },
    RatesBox2:{
        padding:16,
        ...Theme.bg_light_gray,
        borderRadius: 15,

    },
    Notes:{
        ...Theme.bg_light_green_color,
        padding:16,
        marginTop:10,
    },
    NotesText:{
        marginTop:10,
        ...Theme.Green_color_h,
        ...Theme.Font_family,
        fontWeight: "400",
        fontSize: 14,
    },
    buttoncon:{
        flex:1,
        flexDirection:"column",
        justifyContent: "flex-end",
    }

})