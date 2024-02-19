import { StyleSheet, Text, View, FlatList, ScrollView , Image, TouchableOpacity } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import Logos from '../../assets/TransferPayment/SssscoLandingLgo-01.png'
import image from '../../assets/transferPaymentImages/duetNowOnWay.png'
import React, {useState} from 'react'
import Modal from 'react-native-modal';
import Header from './components/Header'
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import LottieView from 'lottie-react-native'

const DuetNowSent = () => {
    const [addfav , setAddFav] = useState(false)
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };

 
    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('HomeScreen')
    }
    const Flatlist = [
        {
            name: 'Reference ID',
            key:"1",
            value: "12345678"

        },
        {
            name: 'Transfer amount',
            key: "2",
            value: "AED 3,500.00"
        },
        {
            name: 'New total balance',
            key: "3",
            value: "AED 76,500.00"
        },
        {
            name: 'Date & time',
            key: "4",
            value: "3 Dec 2021, 02:45 PM"
        },
        {
            name: 'Status code',
            key: "5",
            value: "Successfully"
        },


    ];

    const data = [
        {
            name: 'Recipient ID',
            value: "12345678",
            key: "1"

        },
    ];
    const downloadPDF = async () => {
        try {
            const { config, fs } = RNFetchBlob;
            const { DocumentDir } = fs.dirs;

            const pdfUrl = 'https://example.com/path/to/your/pdf.pdf';
            const pdfName = 'downloaded_pdf.pdf';

            const path = `${DocumentDir}/${pdfName}`;

            const res = await config({
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path,
                },
            }).fetch('GET', pdfUrl);

            console.log('PDF Downloaded Successfully:', res.path());
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };


    const renderItem = ({ item }) => (
        <>
            <View>
                <View style={styles.flatlistrow}>
                    <View>
                        <Text style={styles.nameHead}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.nameValue}>{item.value}</Text>
                    </View>
                </View>

            </View>

        </>
    );


    const handlefav = () =>{
        setAddFav(!addfav);
    } 

    return ( 
        <>
        <View style={styles.container}>
            
            <ScrollView>

                <View style={styles.subheaderstyle}>
                <LottieView source={require('../../assets/lotiefiles/transfer_inprogress_animation.json')} autoPlay style={{width:"100%",height:200}} />
                    <Text style={styles.accountName}>Yay, DuitNow sent</Text>

                </View>

                <FlatList
                    data={Flatlist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={styles.more}>
                    {addfav ? <TouchableOpacity style={styles.boxes} onPress={handlefav}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="staro" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>Add as favourite</Text>
                    </TouchableOpacity> : 
                        <TouchableOpacity style={styles.boxes} onPress={handlefav}>
                            <View style={styles.box}>
                                <Icons.AntDesign name="star" style={styles.Icons} />
                            </View>
                            <Text style={styles.boxText}>Add as favourite</Text>
                        </TouchableOpacity>}
                    <TouchableOpacity style={styles.boxes} onPress={toggleBottomSheet}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="staro" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>View receipt</Text>
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.boxes} onPress={downloadPDF}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="upload" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>Another Transfer</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.transder}>
                    <View style={{ alignItems: "center" }}>
                        <RequestButton text={'Back to Home'} onPress={Navigate} />
                    </View>
                </View>

            </ScrollView>

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
                        <View style={styles.containerModal}>

                            {/* <View style={styles.header}>
                                <Icons.Entypo name="chevron-thin-left" style={styles.headericon}  />
                                <Image source={Logos} style={styles.Images} />
                                <Icons.Entypo name="upload" style={styles.headericon} />
                            </View> */}

                            <ScrollView>
                                <View style={styles.subheaderstyle}>
                                    <Text style={styles.accountName}>Hussien Lee</Text>
                                    <Text style={styles.accountDetaik}>Dubai Islamic Bank - •••••••••••5431
                                        Savings Account-i</Text>
                                    <FlatList
                                        data={data}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}

                                    />

                                    <View style={styles.successtag}>
                                        <View style={styles.sucesstxt}>
                                            <Text style={styles.Suctext}>Successful</Text>
                                            <Icons.Ionicons name="shield-checkmark-outline" style={{ marginLeft: 5, }} />
                                        </View>
                                    </View>


                                </View>
                                <View style={styles.FlatlistCon} >
                                    <FlatList
                                        data={Flatlist}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}

                                    />
                                    <View style={styles.Amountss}>
                                        <Text style={styles.headType}>Transfer amount</Text>
                                        <Text style={styles.price}>AED 3,400.00</Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        {/* <RequestButton text={'Continue'} onPress={Navigate} /> */}
                                    </View>
                                </View>





                            </ScrollView>

                        </View>

                        
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default DuetNowSent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
         padding:15,
    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        marginTop: 15,
    },
    nameHead: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    nameValue: {
        fontSize: 14,
        marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "500"
    },

  
    subheaderstyle: {
        flex: 1,
        padding: 15,
        marginTop: 10,
    },
    accountName: {
        fontSize: 28,
        ...Theme.Green_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },

    transder: {
        // flex: 1,
        marginBottom:10,
        padding: 15,
        paddingLeft: 15,

    },
    more:{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20

    },
    box:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:50,
        height:50,
        borderRadius:10,
        borderWidth:0.5,
        ...Theme.green_border_Color
    },
    boxText:{
        ...Theme.black_color_f,
        textAlign:"center",
        ...Theme.Font_family,
        fontWeight: "700",
        marginTop:5,
        
    },
    Icons:{
        ...Theme.Green_color_h,
        fontSize: 24,
        
    },
    boxes:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    containerModal: {
        // flex: 1,
        // backgroundColor:"#CCC",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },
    Images: {
        width: 150,
        height: 50,
        resizeMode: "center",
    },
    successtag: {
        padding: 10,
    },
    Suctext: {
        ...Theme.White_color_h,
        ...Theme.Font_family,
        fontSize: 12
    },
    sucesstxt: {
        flexDirection: "row",
        alignItems: "center",
        ...Theme.bg_green_color,
        width: 100,
        padding: 5,
        ...Theme.White_color_h,
        ...Theme.Font_family,
        borderRadius: 5,
    },
    headericon: {
        ...Theme.Green_color_f,
        fontSize: 24,
        // ...Theme.White_color_h

    },
    flatlistrow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    nameHead: {
        fontSize: 16,
        // marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    nameValue: {
        fontSize: 14,
        marginLeft: 10,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "500"
    },
    tranferInstruc: {
        ...Theme.Light_gray_color_f,
        fontSize: 12,
        padding: 5

    },
    headType: {
        fontSize: 16,
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family
    },
    subheaderstyle: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingLeft: 15,
        paddingRight: 15,
    },
    accountName: {
        fontSize: 24,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700"
    },
    accountDetaik: {
        ...Theme.gray_color_f,
        ...Theme.Font_family,
        marginTop: 10,

    },
    ammouncontianer: {
        padding: 10,
        flex: 1,
    },
    amount: {
        marginTop: 0,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputstyle: {
        borderBottomWidth: 0.5,
        fontSize: 12,
        ...Theme.black_color_f,
    },
    amounttext: {
        fontWeight: "700",
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontSize: 16,
        marginTop: 35
    },

    headinput: {
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_f

    },
    transder: {
        flex: 1,
        padding: 15,
        paddingLeft: 15,

    },
    transfertext: {
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_f,
        ...Theme.Font_family
    },
    savingAccountcheckbox: {
        borderWidth: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        ...Theme.gray_border_Color,
        borderRadius: 10,
    },
    checkedbox: {
        ...Theme.bg_green_color,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    transferNum: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: "500",
        ...Theme.gray_color_f,
        ...Theme.Font_family
    },
    Amountss: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20
    },
    price: {
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontSize: 24,
        fontWeight: "700",

    },
    tranferInstruc2: {
        flexDirection: "row"
    },
    FlatlistCon: {
        backgroundColor: "#FFFFFF",
        bordeTop: 'none',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    }

  
  


 

})