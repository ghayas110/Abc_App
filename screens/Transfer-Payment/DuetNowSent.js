import { StyleSheet, Text, View, FlatList, ScrollView , Image } from 'react-native'
import Theme from '../../assets/styles/basic'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import { SimpleInput, ExampleInput, CheckBoxInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import image from '../../assets/transferPaymentImages/duetNowOnWay.png'
import React from 'react'
import Header from './components/Header'

const DuetNowSent = () => {

    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('Recipt')
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
            value: "U000_SUCCESS"
        },


    ];


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


    return (
        <View style={styles.container}>
            
            <ScrollView>

                <View style={styles.subheaderstyle}>
                    <Image source={image} />
                    <Text style={styles.accountName}>Yay, DuitNow sent</Text>

                </View>

                <FlatList
                    data={Flatlist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={styles.more}>
                    <View style={styles.boxes}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="staro" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>Add as favourite</Text>
                    </View>
                    <View style={styles.boxes}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="staro" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>View receipt</Text>
                    </View>
                    <View style={styles.boxes}>
                        <View style={styles.box}>
                            <Icons.AntDesign name="staro" style={styles.Icons} />
                        </View>
                        <Text style={styles.boxText}>Another Transfer</Text>
                    </View>
                    
                </View>
                <View style={styles.transder}>
                    <View style={{ alignItems: "center" }}>
                        <RequestButton text={'Back to Home'} onPress={Navigate} />
                    </View>
                </View>

            </ScrollView>

        </View>
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
    }
  
  


 

})