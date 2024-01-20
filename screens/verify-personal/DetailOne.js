import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import style from "../../assets/styles/basic"
import { SimpleInput } from '../../components/Inputs';



const DetailOne = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <>
            <View style={{
                ...style.basic_container,
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
                marginTop: 30
            }}>
                <Text style={{ ...style.main_heading,textAlign: "left", }}>Just a few more details from you</Text>
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
        </>
    )
}

export default DetailOne