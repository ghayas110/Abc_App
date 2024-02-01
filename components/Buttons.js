import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import react, {useState} from 'react'
import ImageFiler from '../assets/HomeScreenImages/FilterIcon.png'
// import { RadioButton } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

function RequestButton({ text, onPress, btnStyle, buttonsty, textbtnsty }) {
    return (
        <>
            <View style={{ ...styles.btnContainer, ...btnStyle }}>
                <TouchableOpacity style={{...styles.btnStyleReq ,  ...buttonsty}} onPress={() => { onPress() }}>
                    <Text style={{ ...styles.textBtnReq, fontFamily: "Poppins-Regular", ...textbtnsty }}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function OutlineButton({ text, onPress, textoutbtnsty, outbuttonsty,...btnStyle }) {
    return (
        <>
            <View style={{ ...styles.btnContainer, ...btnStyle }}>
                <TouchableOpacity style={{ ...styles.btnStyleOutline, ...outbuttonsty }} onPress={() => { onPress() }}>
                    <Text style={{ ...styles.textBtnOutline, fontFamily: "Poppins-Regular", ...textoutbtnsty }}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function CancelButton({ text, onPress,btnStyle }) {
    return (
        <>
            <View  style={{...styles.btnContainer,...btnStyle}}>
                <TouchableOpacity style={styles.btnStyleCancel} onPress={() => { onPress() }}>
                    <Text style={{ ...styles.textBtnCancel, fontFamily: "Poppins-Regular" }}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const FilterButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
            <Image source={ImageFiler} style={{ marginLeft: 5 }} />
        </TouchableOpacity>
    );
};

// const RadioButtonCheck = () => {
//     const [value, setValue] = React.useState('first');
 

//     return (
//         <View>
//             <RadioButton value="first" />
//         </View>
//     );
// };



const styles = StyleSheet.create({
    // GLOBAL BUTTON STYLE ==================
    btnContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        width: width,
        marginTop: 5
    },
    // GREEN BUTTON =========================
    btnStyleReq: {
        backgroundColor: "#00a200",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    textBtnReq: {
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },
    // OUT-LINE BUTTON =========================
    btnStyleOutline: {
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderColor: "#00A200",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    textBtnOutline: {
        fontWeight: "600",
        color: "#00A200",
        textAlign: "center",
    },
    // CANCEL BUTTON =====================
    btnStyleCancel: {
        backgroundColor: "#ffff",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    textBtnCancel: {
        fontWeight: "600",
        color: "#007aff",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        width: 100,
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderColor: '#00A200',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#00A200', // Button text color
        fontWeight: 'bold',
        fontSize: 14,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionContainer: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3498db', // Unselected border color
        marginRight: 5,
    },
    selectedOption: {
        backgroundColor: '#3498db', // Selected background color
        borderColor: '#3498db', // Selected border color
    },
    optionText: {
        color: '#3498db', // Unselected text color
    },
    selectedOptionText: {
        color: '#fff', // Selected text color
    },
   

});


export { RequestButton, OutlineButton, CancelButton, FilterButton,  }