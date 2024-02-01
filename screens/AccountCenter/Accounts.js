import { StyleSheet, Text, View , ScrollView } from 'react-native'
import Theme from "../../assets/styles/basic"
import Icons from '../../components/Icons'
import React from 'react'

const Accounts = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
              <Text style={styles.headerText}>Account Centre</Text>
        </View>
          <ScrollView style={styles.cardContainer}>
            <View style={styles.balanceCard}>
                  <Text style={styles.balanceText}>Total Balance</Text>
                  <Text style={styles.balanceText2}>AED 42,140.00</Text>
            </View>
            <View style={styles.AccountBalance}>
                <View style={styles.accountCardHeader}>
                    <View>
                          <Text>Deposit Account</Text>
                          <Text>View all  <Icons.MaterialIcons name="arrow-forward-ios" /></Text>
                    </View>
                      <Text><Icons.MaterialCommunityIcons name="link" /></Text>
                </View>

            </View>
          </ScrollView>
          
    
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        flex:1,
        padding:10
    },
    header:{
        flex:0.1,
        // backgroundColor:"red",
        borderBottomWidth:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        textAlign:"center",
        ...Theme.black_color_h,
        fontWeight: "700",
        fontSize: 20,
        },
    balanceCard:{
        height:90,
        borderRadius:15,
        borderWidth:0.5,
        padding:15,
        backgroundColor: "#E6E6E6",
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    },
    accountCardHeader:{
        borderBottomWidth:0.5,
    },
    balanceText:{
        fontSize: 14,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "500",
    },
    balanceText2:{
        fontSize: 20,
        ...Theme.black_color_h,
        ...Theme.Font_family,
        fontWeight: "700",
    },
    cardContainer:{
        padding:10
    },

    AccountBalance:{
        height: 90,
        borderRadius: 15,
        borderWidth: 0.5,
        // padding: 15,
        backgroundColor: "#FFFFFF",
        ...Theme.ligth_gray_border_Color,
        shadowColor: '#000000',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 4
    }
})