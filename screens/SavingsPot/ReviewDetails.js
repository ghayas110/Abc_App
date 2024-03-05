import { StyleSheet, Text, View, ScrollView, FlatList, ProgressBarAndroid , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../assets/styles/basic'
import { ExampleInput, DropDown } from '../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import Header from './components/Header2'
import { RequestButton } from '../../components/Buttons'


const ReviewDetails = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const navigation = useNavigation()

    const handleNavigate = () => {
        navigation.navigate('SuccessfullyCreated')
    }
    const Flatlist = [
        {
            name: 'Targeted savings goal',
            subname: "AED 30,000.00",
        },
        {
            name: 'Contribution preference',
            subname: "Auto contribution",
        },
        {
            name: 'Targeted contribution per transfer',
            subname: "AED 30,000.00"
        },
        {
            name: 'Frequency',
            subname: "Save for your pilgrimage trip"
        },
        {
            name: 'Contribution day',
            subname: "1st of every month    `   "
        },
        {
            name: 'Expected completion date',
            subname: "1 Apr 2024"
        },
        {
            name: 'Expected completion date',
            subname: "1 Apr 2024"
        },
        {
            name: 'Expected completion date',
            subname: "1 Apr 2024"
        },



    ];
    const renderItem = ({ item }) => (
        <>
           <ScrollView style={{padding:10}}>
            <TouchableOpacity style={styles.List} >
                <View >
                    <Text style={styles.cardText1}>{item.subname}</Text>
                    <Text style={styles.cardText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
           </ScrollView>

        </>
    );

    return (
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Header
                        backtoPage={true}
                        backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                    />
                </View>
                <View style={styles.InsertAmount}>
                    <View style={styles.Inserted}>
                        <View style={{alignContent:"center", flexDirection:'row'}}>
                          <Icons.MaterialIcons name="keyboard-arrow-up" style={styles.headingWidthIcn} />
                          <Text style={styles.headingText}>Savings Pot details</Text>
                        </View>
                       <Icons.AntDesign name="edit" style={styles.headingWidthIcn} />
                    </View>
                </View>
                <View style={styles.switcher}>
                    <Text style={styles.switcherText}>Savings Pot name</Text>
                     <Text style={styles.switcherText2}>My Umrah </Text>
                </View>
               <View style={styles.InsertAmount}>
                    <View style={styles.Inserted}>
                        <View style={{alignContent:"center", flexDirection:'row'}}>
                          <Icons.MaterialIcons name="keyboard-arrow-up" style={styles.headingWidthIcn} />
                          <Text style={styles.headingText}>Savings Pot details</Text>
                        </View>
                       <Icons.AntDesign name="edit" style={styles.headingWidthIcn} />
                    </View>
                </View>

                 <View style={styles.FlatList}>
                
                    <FlatList
                        data={Flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                 </View>
             
           
                <View style={styles.button}>
                    <RequestButton text={'Create Saving pots'} onPress={handleNavigate} />
                </View>
            </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
    },
    header: {
        flex: 0.2,
        // backgroundColor:"red"   
    },
    InsertAmount: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,

        // padding: 10,
        // backgroundColor: "black",
    },
    Inserted:{
     flexDirection:"row",
     justifyContent:"space-between", 
     alignItems:"center",
     borderBottomWidth:0.5
    
      },
    headingText:{
        ...Theme.black_color_f,
        marginRight:5,
     fontSize: 16,


    },
    headingWidthIcn:{
     ...Theme.Green_color_h,
     fontWeight: '700',
     fontSize: 24,
     justifyContent:"center",
     
     
    },
    HeadingText: {
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontWeight: "500",
        fontSize: 14,
    },
    switcher: {
        flex: 0.2,
        padding:10,
    },
    switcherText:{
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontWeight: '500',
        fontSize:12,
    },
    switcherText2:{
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: '700',
        fontSize:16,
    },
    button: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    FlatList:{
        flex: 2.5,
    },

    cardText: {
        fontSize: 16,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        marginVertical: 3

    },
    cardText1: {
        fontSize: 12,
        ...Theme.gray_color_f,
        ...Theme.Font_family,
        fontWeight: "500",
        marginVertical:3,
    }


})

