import { StyleSheet, Text, View, ScrollView, Switch, ProgressBarAndroid } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../assets/styles/basic'
import { ExampleInput, DropDown , SimpleInput } from '../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import Icons from '../../components/Icons'
import Header from './components/Header2'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import {RequestButton} from '../../components/Buttons'
 

const Contribution = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const navigation = useNavigation()

    const handleNavigate = () => {
        navigation.navigate('ReviewDetails')
    }


    return (
        <ScrollView >
        <View style={styles.Container}>
            <View style={styles.header}>
                <Header
                    title={"Contribution"}
                    backtoPage={true}
                    backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                />
            </View>
            <View style={styles.InsertAmount}>
                <Text style={styles.HeadingText} > Targeted savings goal </Text>
                <View style={styles.HeadingInput}>
                    <Text style={styles.HeadingInputText}>AED</Text>
                        <SimpleInput inputstyle={styles.Input} placeholder='Enter amount' keyboardType="numeric" />
                </View>
            </View>
            <View style={styles.switcher}>
                <Text style={styles.AutoCorrect}>Auto contribution</Text>
                <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={'white'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} style={{ alignItems: "flex-end" }} value={isEnabled} />

            </View>
            <View style={styles.targetAmount}>
                <Text style={styles.HeadingText} > Targeted Monthly Contribution  </Text>
                <View style={styles.HeadingInput}>
                    <Text style={styles.HeadingInputText}>AED</Text>
                    
                        <SimpleInput inputstyle={styles.Input}  placeholder='Enter amount' keyboardType="numeric" />
                </View>
            </View>
            <View style={styles.ProgessBar}>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={1}   color={"#00a200"} />
                <View style={styles.ProgressAmout}>
                    <Text style={styles.progresstext}>AED 1.00</Text>
                    <Text style={styles.progresstext}>Targeted amount</Text>
                </View>
            </View>
            <View style={styles.Frequency}>
                <View style={styles.FrequencySelect}>
                    <Text style={styles.Frequencytext}>Frequency</Text>
                    <DropDown
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...Theme.gray_color_f }}
                        placeholder={"Monthly"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={styles.FrequencySelect}>
                        <Text style={styles.Frequencytext}>Contribution day <Icons.AntDesign name="infocirlceo" style={{...Theme.Green_color_f}} /></Text>
                    <DropDown
                        dropDownStyle={{ fontFamily: "Poppins-Regular", ...Theme.gray_color_f }}
                        placeholder={"Select Contribution Days"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
            </View>
            <View style={styles.notify}>
                <Text style={styles.AutoCorrect}>Notification</Text>
                <Switch trackColor={{ false: '#808080', true: '#00A200' }} thumbColor={'white'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2} style={{ alignItems: "flex-end" }} value={isEnabled2} />
            </View>
            <View style={styles.button}>
                    <RequestButton text={'Create Saving pots'} onPress={handleNavigate} />
            </View>
        </View>
        </ScrollView>
    )
}

export default Contribution

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 40,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
    },
    header: {
        flex: 0.5,
        // backgroundColor:"red"   
    },
    InsertAmount: {
        flex: 0.5,
        flexDirection:"column",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
        
        // padding: 10,
        // backgroundColor: "black",
    },
    Input:{
      borderColor: 'gray',
       borderBottomWidth: 1,
    //    height: 30,   
       ...Theme.Light_gray_color_f,
       ...Theme.Font_family,
       fontSize:16,
    },
    HeadingInput: {
        flexDirection: "row",
        alignItems:"center"
    },
    HeadingText: {
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontWeight: "500",
        fontSize: 14,
    },
    HeadingInputText: {
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        fontSize: 16,
        marginLeft: 5,
        
    },
    HeadingAmount: {
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        fontSize: 16,
        padding: 5
    },
    switcher: {
        flex: 0.2,
        // backgroundColor: "blue",
        marginTop:5,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    AutoCorrect:{
        ...Theme.Font_family,
        ...Theme.black_color_h,
        fontSize:16

    },

    targetAmount: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
    },
    ProgessBar: {
        flex: 0.7,
        padding:15,
    },
    ProgressAmout:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    progresstext:{
    fontSize: 14,
    ...Theme.Font_family,
    fontWeight:"500",
    ...Theme.black_color_f
    
    },
    Frequency: {
        // height:100,
        flex: 1,
        alignItems:"center",
    },
    notify: {
        flex: 0.2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
        height:160
    },
    FrequencySelect:{
        padding: 10,
    },
    Frequencytext:{
        fontSize: 12,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight: '500',
        

        
    }

})

