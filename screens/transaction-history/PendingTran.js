import React from 'react'
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './components/Header'
import style from "../../assets/styles/basic"
const { width, height } = Dimensions.get('window');
const PendingTran = () => {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                height: height
            }}>
                <Header
                    backtoPage={true}
                    title={"Pending Transactions"}
                    backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    marginVertical: 10,
                }} />

                <View style={{
                    paddingLeft: 15,
                    marginTop: 40
                }}>
                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            width: width,
                        }}>
                            <Text style={styless.textOne}>MyDebit Purchase - Adidas</Text>
                            <Text style={{ ...styless.textTwo }}>-RM 78.450</Text>
                        </View>
                        <Text style={styless.bottomDate}>5 FEB 2022</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            width: width,
                        }}>
                            <Text style={styless.textOne}>MyDebit Purchase - GRAB</Text>
                            <Text style={{ ...styless.textTwo }}>-RM 13.50</Text>
                        </View>
                        <Text style={styless.bottomDate}>5 FEB 2022</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            width: width,
                        }}>
                            <Text style={styless.textOne}>MyDebit Purchase - Nike</Text>
                            <Text style={{ ...styless.textTwo }}>-RM 75.00</Text>
                        </View>
                        <Text style={styless.bottomDate}>4 FEB 2022</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styless = StyleSheet.create({
    textOne: {
        ...style.black_color_f,
        ...style.Font_family,
        width: width * 0.5,
        fontSize: 15
    },
    textTwo: {
        ...style.gray_color_h,
        ...style.Font_family,
        textAlign: "right",
        width: width * 0.5,
        marginRight: 30,
        fontSize: 15,
        paddingRight: 30
    },
    bottomDate: {
        ...style.Font_family_Bold,
        ...style.gray_color_h,
        marginTop: 12,
        fontSize: 16,
    }

});
export default PendingTran