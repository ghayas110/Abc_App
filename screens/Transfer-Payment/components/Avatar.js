import React from 'react'
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import style from "../../../assets/styles/basic"


const { width, height } = Dimensions.get('window');
const Avatar = ({
    fullName,
    shortName
}) => {
    return (
        <>
            <View style={{ 
                display: "flex",
                alignItems: "center",
                marginTop: 30
            }}>
                <View style={{
                    backgroundColor: "#00a200",
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"center",
                }}>
                    <Text style={{color: "white",...style.Font_family_Bold,fontSize:30}}>{shortName}</Text>
                </View>
                <Text style={{...style.black_color_h,...style.Font_family_Bold,fontSize:25,marginTop: 15}}>{fullName}</Text>
            </View>
        </>
    )
}

export default Avatar