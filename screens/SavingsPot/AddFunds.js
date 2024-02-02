import { StyleSheet, Text, View , ScrollView } from 'react-native'
import Header from './components/Header2';
import { ExampleInput , CheckBoxInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../components/Icons';
import Theme from '../../assets/styles/basic'
import React from 'react'

const AddFunds = () => {
    const navigation = useNavigation()
    const Navigate = () => {
        navigation.navigate('AddFundReviewDetails')
    }
  return (
    <View style={styles.container}>
          <View style={styles.Header}>
              <Header
              title={"Add"}
                  backtoPage={true}
                  backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
              />
          </View>
          <View style={styles.Middle}>
              
                  <View style={styles.amount}>
                      <Text style={styles.amounttext}>AED</Text>
                      <View style={{ ...styles.viewStyle, flex: 1 }}>
                           <Text></Text>
                            <ExampleInput placeholder={'Enter Amount'} inputstyle={styles.inputamount} keyboardType="numeric" />
                            <View style={styles.ammountexampleboxs}>
                                <View style={styles.ExampleAmount}>
                                    <Text style={styles.ExampleAmounttext}>AED</Text>
                                    <Text style={styles.ExampleAmounttext}>100</Text>
                                </View>
                                <View style={styles.ExampleAmount}>
                                    <Text style={styles.ExampleAmounttext}>AED</Text>
                                    <Text style={styles.ExampleAmounttext}>200</Text>
                                </View>
                                <View style={styles.ExampleAmount}>
                                    <Text style={styles.ExampleAmounttext}>AED</Text>
                                    <Text style={styles.ExampleAmounttext}>300</Text>
                                </View>
                            </View>
                      </View>
                  </View>

          </View>
          <View style={styles.Footer}>
                  <View>
                      <Text style={styles.headinput}>Transfer from <Icons.MaterialCommunityIcons name="information-outline" style={{ ...Theme.Green_color_f }} /></Text>
                  </View>
                  <View style={styles.savingAccountcheckbox}>
                      <View>
                          <Text style={styles.transfertext}>Rize Savings Account-i</Text>
                          <Text style={styles.transferNum}>700007123456789</Text>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                          <Text style={styles.transferCheck}>
                              {/* <CheckBoxInput style={styles.checkedbox} /> */}
                          </Text>
                          <Text style={styles.transferNum}>AED 80,000.00</Text>
                      </View>
                  </View>
                  <View style={{ alignItems: "center" , marginTop:15 }}>
                  <RequestButton text={'Continue'} onPress={Navigate} buttonsty={styles.RequestBtn} />
                  </View>
          </View>
    </View>
  )
}

export default AddFunds

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:"#FFFFFF",

    },
    Header:{
        flex: 0.2,
    },
    Middle: {
        paddingLeft: 10,
        // borderWidth:0.5,
        flex: 0.5,
    },
    Footer: {
        flex: 1,
        justifyContent:"flex-end",
        padding:10
    },
    
    amount: {
        
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
        // marginTop: 35
    },
    ExampleAmount: {
        width: 90,
        borderWidth: 0.5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 2,
        ...Theme.green_border_Color
    },
    ExampleAmounttext: {
        ...Theme.Font_family,
        ...Theme.Green_color_f,
        fontWeight: '700',
        fontSize: 14,
    },
    ammountexampleboxs: {
        flexDirection: "row",
        justifyContent: "center",
    },
    viewStyle: {
        padding: 20,
        margin: 0,
    },

    transfertext: {
        fontSize: 16,
        fontWeight: "700",
        ...Theme.black_color_h,
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
    headinput:{
        ...Theme.black_color_h,
        ...Theme.Font_family,

    },
    RequestBtn:{
        height: 50,
        justifyContent:"center",
        alignItems: "center",
    }
})