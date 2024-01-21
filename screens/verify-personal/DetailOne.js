import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';




const DetailOne = () => {
    const navigation = useNavigation()
    const { width, height } = Dimensions.get('window');
    const nextPage = async () => {
        navigation.navigate('DetailTwo')
    }


    return (
        <>
            <View style={{
                ...style.basic_container,
                height: height,
                position: "relative",
                backgroundColor: "white"
            }}>
                <View style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {/* STEPS =========================== */}
                    <View style={{
                        width: width * 0.5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Image
                            source={require('./images/Profile.png')}
                        />
                        <View>
                            <Text style={{ ...style.simple_txt, marginBottom: 5 }}>Step 1 of 4</Text>
                            <Image
                                source={require('./images/steps.png')}
                            />
                        </View>
                        <Image
                            source={require('./images/Setting.png')}
                        />
                    </View>
                </View>
                {/* INPUT BOX ============================= */}
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <Text style={{ ...style.main_heading, textAlign: "center", paddingLeft: 10, fontSize: 20 }}>Just a few more details from you</Text>
                    <SimpleInput
                        inputstyle={{
                            fontSize: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                        }}
                        placeholderTextColor="#808080"
                        label={"Email"}
                        type={"email"}
                        placeholder={"Email"}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Marital status"}
                        placeholder={"Select Marital status"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 30,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Marital Ethnicity"}
                        placeholder={"Select Ethnicity"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <RequestButton text={"Next"} onPress={() => nextPage()}
                    btnStyle={{ position: "absolute", bottom: 50 }}
                />
            </View>
        </>
    )
}

export default DetailOne