import { StyleSheet, Text, View } from 'react-native'
import React,{useState , useEffect} from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import ProgressBar from 'react-native-progress/Bar';

const CreateSecureWord = () => {
    const navigation = useNavigation()
    const [progress, setProgress] = useState(0);


    const ForWordnavigation = () =>{
        navigation.navigate('CreatePassword')
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.Progress}>
                    <View></View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons.AntDesign name='setting' style={{ fontSize: 24, marginRight: 5, color: "#0038A4" }} />
                        <View>
                            <Text>step 2 to 6 </Text>
                            <ProgressBar progress={progress} width={80} />
                        </View>
                        <Icons.Entypo name='wallet' style={{ fontSize: 24, marginLeft: 5, }} />
                    </View>
                    <View></View>
                </View>
                <View style={{
                    padding: 5, marginTop: 25,
                }}>
                    <Text style={{ fontSize: 28, color: "#00A200", fontWeight: "700" , fontFamily:"Poppins"}}>Create your Secure Word</Text>
                </View>
                
                <View style={styles.inputContainer}>
                    <SimpleInput placeholder={'Enter Your Secure Word'} inputstyle={{ fontSize: 20, color: "#808080", fontWeight: "600", fontFamily:"Poppins" }} />
                </View>
                <View style={styles.ListContainer}>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={styles.textInstruct}>Must not be the same as username</Text>
                    </View>

                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={styles.textInstruct}>Must be between 5 - 15 characters</Text>
                    </View>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={styles.textInstruct}>Only letters and numbers allowed</Text>
                    </View>
                 
                </View>

                {/* <View style={{ alignItems: "center",  }}>
                <RequestButton text='next' />
            </View> */}
            </View>
            <View style={{ alignItems: "center", marginBottom: 20, }}>
                <RequestButton text='Next' onPress={ForWordnavigation} />
            </View>
        </>

    )
}

export default CreateSecureWord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "space-evently",
    },
    Progress: {
        justifyContent: 'center',
        flexDirection: "row",
        marginTop:5,
    },
    TopHeader: {
        marginTop: 5,
        justifyContent: 'space-evently',
        flexDirection: 'row',
        alignContent: 'center',
    },
    inputContainer: {
        borderBottomWidth: 2,
        borderColor: "#00A200",
        marginTop: 10,
    },
    Instruction: {
        fontFamily: "Poppins",
        fontSize: 16,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,

    },
    ListContainer: {
        padding: 10,
    },
    CheckIcon: {
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Poppins',
        fontWeight: "500"
    },
    textInstruct: {
        marginLeft: 3,
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Poppins',
        fontWeight: "500"
    }

})