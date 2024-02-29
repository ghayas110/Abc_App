import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Switch, ScrollView } from 'react-native'
import style from '../../assets/styles/basic';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../components/Icons';
import Collapsible from 'react-native-collapsible';
import Header from './components/Header';


const ImportantDocs = () => {
    const navigation = useNavigation();
    const Accordion = ({ title, children, leftIcon }) => {
        const [isCollapsed, setIsCollapsed] = useState(true);
        return (
            <View>
                <TouchableOpacity style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    paddingBottom: 5,
                    marginTop: 10
                }} onPress={() => setIsCollapsed(!isCollapsed)}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <Image style={{ marginRight: 8 }}
                            source={require('../../assets/SignUp/docgreen.png')}
                        />
                        <Text style={{
                            ...style.Font_family_Bold,
                            ...style.black_color_h
                        }}>{title}</Text>
                    </View>
                    {leftIcon ? <Icons.AntDesign name={'down'} style={{ ...style.Green_color_h }} /> : null}
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed} style={{ paddingHorizontal: 5 }}>
                    {children}
                </Collapsible>
            </View>
        );
    };
    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <Header
                    backtoPage={true}
                    title={"Important Documents"}
                    backIcon={require('../../assets/TransactionHistoryImages/ArrowLeft.png')}
                />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    marginVertical: 10,
                }} />
                <ScrollView>
                    <SafeAreaView style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 20
                    }}>
                        <View>
                            <Accordion leftIcon={true} title="Declaration and Authorisation">
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Deposit Account-i and Debit Card-i Declaration and Authorisation
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Personal Financing-i Declaration and Authorisation
                                    </Text>
                                </View>
                            </Accordion>
                            <Accordion leftIcon={false} title="PIDM DIS Brochure"></Accordion>
                            <Accordion leftIcon={false} title="Personal Data Protection"></Accordion>
                            <Accordion leftIcon={true} title="Product Disclosure Sheet">
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Commodity Murabahah Savings Account-i Product Disclosure Sheet
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Debit Card-i Product Disclosure Sheet
                                    </Text>
                                </View>
                            </Accordion>
                            <Accordion leftIcon={true} title="Terms & Conditions">
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>General Terms & Conditions</Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>Specific Terms & Conditions</Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>National Addressing Databases (NAD) Terms & Conditions</Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>Fund-Transfer Terms & Conditions</Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>Universal QR Terms & Conditions</Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>Internet and Mobile Banking Terms & Conditions</Text>
                                </View>
                            </Accordion>
                            <Accordion leftIcon={true} title="General">
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Client Charter
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Treating Customer Fairly
                                    </Text>
                                </View>
                            </Accordion>
                            <Accordion leftIcon={true} title="Financing Application">
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Product Disclossure Sheet
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Terms & Conditions
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Personal Data Protections
                                    </Text>
                                </View>
                                <View style={styles.acordion1}>
                                    <Text style={{ ...styles.text2, paddingRight: 10, ...style.black_color_h }}>{'\u2022'}</Text>
                                    <Text style={styles.text2}>
                                        Personal Financing-i Application Document
                                    </Text>
                                </View>
                            </Accordion>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    acordion1: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginTop: 5,
        marginBottom: 8,
        paddingBottom: 5
    },
    text: {
        ...style.Font_family,
        ...style.Green_color_h,
        fontSize: 17,
    },
    text2: {
        ...style.Font_family_Bold,
        ...style.Green_color_h,
        fontSize: 15,
    },
});
export default ImportantDocs