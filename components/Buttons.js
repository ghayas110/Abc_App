import { StyleSheet, Text, View,TouchableOpacity,Dimensions  } from 'react-native'
const { width, height } = Dimensions.get('window');

function RequestButton({text}) {
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyleReq}>
                    <Text style={styles.textBtnReq}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function OutlineButton({text}) {
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyleOutline}>
                    <Text style={styles.textBtnOutline}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function CancelButton({text}) {
    return (
        <>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyleCancel}>
                    <Text style={styles.textBtnCancel}>{text}</Text>
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