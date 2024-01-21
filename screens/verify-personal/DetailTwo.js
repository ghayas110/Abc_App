import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { List, SimpleInput } from '../../components/Inputs';
import { RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';



const DetailTwo = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const nextPage = async () => {
        navigation.navigate('DetailThree')
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
                    justifyContent: "center",
                    position: "relative",
                }}>
                    <Image style={{
                            position: "absolute",
                            left: width * 0.10
                        }}
                            source={require('./images/Icons.png')}
                        />
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
                            <Text style={{ ...style.simple_txt, marginBottom: 5 }}>Step 2 of 4</Text>
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
                    marginTop: 10,
                }}>
                    <Text style={{ ...style.main_heading, textAlign: "center", paddingLeft: 10, fontSize: 20 }}>What do you do for a living?</Text>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Employment type"}
                        placeholder={"Select Employment type"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <SimpleInput
                        inputstyle={{
                            fontSize: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: '#808080',
                        }}
                        placeholderTextColor="#808080"
                        label={"Name of employer"}
                        type={"text"}
                        placeholder={"Enter Name of employer"}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Occupation"}
                        placeholder={"Select Occupation"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Employment sector"}
                        placeholder={"Select Employment sector"}
                        items={[
                            { label: 'Option 1', value: 'option1' },
                            { label: 'Option 2', value: 'option2' },
                            { label: 'Option 3', value: 'option3' },
                        ]}
                    />
                </View>
                <View style={{
                    ...style.basic_container,
                    marginTop: 5,
                }}>
                    <List
                        textStyle={{ ...style.main_heading, textAlign: "left", fontSize: 20, marginBottom: 10 }}
                        label={"Annual income bracket"}
                        placeholder={"Select Annual income bracket"}
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

export default DetailTwo