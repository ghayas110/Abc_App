import { Button, StyleSheet, Text, View,TouchableOpacity,Dimensions  } from 'react-native'
const { width, height } = Dimensions.get('window');

function RequestButton({text,onPress,btnStyle}) {
    return (
        <>
            <View style={{...styles.btnContainer,...btnStyle}}>
                <TouchableOpacity style={styles.btnStyleReq} onPress={() => { onPress() }}>
                    <Text style={{...styles.textBtnReq,fontFamily: "Poppins-Regular"}}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function OutlineButton({text,onPress}) {
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyleOutline} onPress={() => { onPress() }}>
                    <Text style={{...styles.textBtnOutline, fontFamily: "Poppins-Regular"}}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function CancelButton({text,onPress}) {
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyleCancel} onPress={() => { onPress() }}>
                    <Text style={{...styles.textBtnCancel,fontFamily: "Poppins-Regular"}}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


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
        paddingTop : 10,
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

});

  
export {RequestButton,OutlineButton,CancelButton}