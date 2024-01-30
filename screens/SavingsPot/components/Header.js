import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Icons from '../../../components/Icons';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

const Header = ({
    backtoPage,
    backtoPage2,
    title,
    backIcon2,
    backIcon
}) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack("Home");
    };
    const goforward= () => {
        navigation.navigate("PickCategoryCard");
    };
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                paddingLeft:20,
                paddingRight: 20,
                
            }}>
                {
                    backtoPage ?
                        <TouchableOpacity onPress={goBack} style={{}}>
                            <Image name="plus"  source={backIcon} />
                        </TouchableOpacity> : null
                }
                <Text style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 20,
                    color: "black"
                }}>{title}</Text>
                {
                    backtoPage2 ?
                        <TouchableOpacity onPress={goforward} style={{}}>
                            <Image  source={backIcon2} />
                        </TouchableOpacity> : null
                }
            </View>
        </>


    )
}

export default Header