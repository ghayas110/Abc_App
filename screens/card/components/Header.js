import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

const Header = ({
    backtoPage,
    title,
    backIcon
}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack("Home");
    };
  return (
    <>
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            position: "relative"
        }}>
            {
                backtoPage ? 
                <TouchableOpacity  onPress={goBack} style={{
                    position: "absolute",
                    left: width * 0.10,
                }}>
                    <Image source={backIcon} />
                </TouchableOpacity> : null
            }
            <Text style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                color: "black"
            }}>{title}</Text>
        </View>
    </>


  )
}

export default Header