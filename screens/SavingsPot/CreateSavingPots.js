import { StyleSheet, Text, View, Image } from 'react-native'
import Header from './components/Header2'
import Theme from '../../assets/styles/basic'
import React , {useState} from 'react'
import ThemeSty from '../../assets/styles/basic'
import { ScrollView } from 'react-native-gesture-handler'
import Image1 from '../../assets/SavingPotsImages/createSavingPot1.png'
import Image2 from '../../assets/SavingPotsImages/createSavingPot2.png'
import Image3 from '../../assets/SavingPotsImages/createSavingPot3.png'
import Image4 from '../../assets/SavingPotsImages/createSavingPot4.png'
import Image5 from '../../assets/SavingPotsImages/createSavingPot5.png'
import Image6 from '../../assets/SavingPotsImages/createSavingPot6.png'
import { ExampleInput } from '../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { RequestButton } from "../../components/Buttons"
import Modal from 'react-native-modal';
import Contribution from './Contribution'


const CreateSavingPots = () => {

    const navigation = useNavigation()
    const handleNavigate = () => {
        navigation.navigate('CreateSavingPots')
    }
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };


    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Header
                    title={"Create Savings Pots"}
                    backtoPage={true}
                    backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                />

            </View>
            <View style={{ flex: 4, padding: 10 }}>
                <Text style={styles.Heading}>Choose your Savings Pot picture.</Text>
                <View>
                    <View style={styles.ImageContianer}>
                        <Image source={Image1} style={styles.image} />
                        <Image source={Image2} style={styles.image} />
                        <Image source={Image3} style={styles.image} />
                        <Image source={Image4} style={styles.image} />
                        <Image source={Image5} style={styles.image} />
                        <Image source={Image6} style={styles.image} />
                    </View>
                </View>
                <View>
                    <Text style={styles.HeadingInput} >
                        Savings pot name
                    </Text>
                    <ExampleInput label={'Savings pot name'} placeholder="Give your Savings Pot a name" InStyle={styles.inputStyle} />
                </View>
            </View>
            <View style={{ flex: 3  , alignItems:"center" , justifyContent:"flex-end"}}>
                <RequestButton text={"continue"} onPress={toggleBottomSheet} />
            </View> 



            <Modal
                isVisible={isBottomSheetVisible}
                style={{ margin: 0 }}
                onBackdropPress={toggleBottomSheet}
            >
                
                   
                        <Contribution />
            
                
            </Modal>
        </View>
    )
}

export default CreateSavingPots

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    Heading: {
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        fontSize: 12,
        padding: 5
    },
    HeadingInput:{
        ...Theme.Light_gray_color_f,
        ...Theme.Font_family,
        fontWeight: "700",
        fontSize: 12,
        padding: 5
    },
    inputStyle:{
        
    },
    ImageContianer: {
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,
        marginBottom: 3,

    }




})



