import { Button, StyleSheet, Text, View,TouchableOpacity,Dimensions  } from 'react-native'
const { width, height } = Dimensions.get('window');

function TextH1({text}) {
    return (
        <>
            <Text style={styles.H1}>{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    // H1:{
    //     fontFamily:
    // }
});

  
export {RequestButton,OutlineButton,CancelButton}