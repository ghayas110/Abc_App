import { StyleSheet, Text, View } from 'react-native'
import React, {useState , useEffect} from 'react'
import Icons from '../../components/Icons'
import { useNavigation } from '@react-navigation/native'
import { SimpleInput } from '../../components/Inputs'
import { RequestButton } from '../../components/Buttons'
import ProgressBar from 'react-native-progress/Bar';
import ThemeSty from '../../assets/styles/basic'


const CreatePassword = () => {
    const navigation = useNavigation()
    const [progress, setProgress] = useState(0);

    const ForWordnavigation = () => {
        navigation.navigate('BioActivation')
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 1) {
                setProgress(progress + 0.1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [progress]);

    const handleBackNavigation = () => {
        navigation.navigate('CreateSecureWord');
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.Progress}>
                    <View style={styles.BackArrow}>
                        <Icons.MaterialIcons name="arrow-back-ios-new" style={styles.BackArrowIcon} onPress={handleBackNavigation} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons.AntDesign name='setting' style={{ fontSize: 24, marginRight: 5, color: "#0038A4" }} />
                        <View>
                            <Text>step 3 to 6 </Text>
                            <ProgressBar progress={progress} width={80} />
                        </View>
                        <Icons.Entypo name='wallet' style={{ fontSize: 24, marginLeft: 5, }} />
                    </View>
                    <View></View>
                </View>
                <View style={{
                    padding: 5, marginTop: 35,
                }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", ...ThemeSty.Green_color_f,...ThemeSty.Font_family }}>Create your Password</Text>
                </View>

                <View style={styles.InputContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <SimpleInput
                            placeholder={'Enter Your Password'}
                            placeholderTextColor={"black"}
                            type={'password'}
                            name="password"
                            inputstyle={{ fontSize: 20, fontWeight: "600",color: "black" , ...ThemeSty.Font_family  }}
                        />
                        <Icons.Entypo name="eye-with-line" style={styles.hideapassword} />
                    </View>
                </View>
                <View style={styles.InputContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <SimpleInput
                            type={'password'}
                            placeholderTextColor={"black"}
                            placeholder={'Confirm Your Password'}
                            inputstyle={{ fontSize: 20, fontWeight: "600",color: "black" , ...ThemeSty.Font_family  }}/>
                        <Icons.Entypo name="eye-with-line" style={styles.hideapassword} />
                    </View>
                </View>
                <View style={styles.ListContainer}>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{...styles.textInstruct , ...ThemeSty.Font_family ,...ThemeSty.gray_color_f}}>Must not be the same as username or secure word </Text>
                    </View>

                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{ ...styles.textInstruct, ...ThemeSty.Font_family, ...ThemeSty.gray_color_f }}>Must be between 8 and 20 characters</Text>
                    </View>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{ ...styles.textInstruct, ...ThemeSty.Font_family, ...ThemeSty.gray_color_f }}>Must contain a lowercase letter</Text>
                    </View>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{ ...styles.textInstruct, ...ThemeSty.Font_family, ...ThemeSty.gray_color_f }}>Must contain an uppercase letter</Text>
                    </View>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{ ...styles.textInstruct, ...ThemeSty.Font_family, ...ThemeSty.gray_color_f }}>Must contain a number</Text>
                    </View>
                    <View style={styles.Instruction}>
                        <Icons.AntDesign name='check' style={styles.CheckIcon} />
                        <Text style={{ ...styles.textInstruct, ...ThemeSty.Font_family, ...ThemeSty.gray_color_f }}>Must contain one of the following special character:{`! @ # $ ^ & _ + = ( ) <>`}</Text>
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

export default CreatePassword


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        justifyContent: "space-evently",
    },
     Progress: {
            justifyContent: 'center',
            flexDirection: "row",
            marginTop: 5,
            alignItems:"center"
        },
    TopHeader: {
        marginTop: 5,
        justifyContent: 'space-evently',
        flexDirection: 'row',
        alignItems: 'center',
    },

    InputContainer: {
        borderBottomWidth: 2,
        borderColor: "#CCCCCC",
        marginTop: 5,

    },
    hideapassword: {
        color: "#00A200",
        fontSize: 16,
        // alignItems: "end",
        position: "absolute",
        top: 60,
        right: 0,

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
        fontWeight: "500",
    },
    BackArrow: {
        // width: "100%",
        // padding: 10,
    },
    BackArrowIcon: {
        color: "#00A200",
        fontSize: 16,
        position: 'relative',
        right: 80,
    },

})