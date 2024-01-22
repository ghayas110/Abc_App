import { StyleSheet, Text, View,Dimensions,Button, KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import FormInput from '../../components/FormInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AlloeNIC = ({onPress}) => {
 
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
    <View style={styles.container}>
    <View>
    <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>Scan your CNIC</Text>
    <View style={styles.acordion}>
    <Text >{'\u2022'}</Text>
    <Text style={styles.text2}> Remove the IC cover, if you have one </Text>
    </View>
    <View style={styles.acordion}>
    <Text >{'\u2022'}</Text>
    <Text style={styles.text2}> Remove the IC cover, if you have one </Text>
    </View>
    <View style={styles.acordion}>
    <Text >{'\u2022'}</Text>
    <Text style={styles.text2}> Find a suitable surface (avoid digital </Text>
    </View>
    <View style={styles.acordion}>
    <Text >{'\u2022'}</Text>
    <Text style={styles.text2}> screens/bright or dark surfaces) </Text>
    </View>
    <View style={styles.acordion}>
    <Text >{'\u2022'}</Text>
    <Text style={styles.text2}> Align your MyKad until all 4 black/white lines appear </Text>
    </View>
    </View>

<View style={styles.container2}>
<View >
<Image source={require('../../assets/SignUp/cnicfront.png')}/>
</View>
<View style={styles.cardView}>
<Image source={require('../../assets/SignUp/cnicback.png')}/>

</View>
</View>
<View style={{width:"100%",backgroundColor:'#DCF2FC',padding:20}}>
<Text>Note: Unclear images may prevent account opening..</Text>
</View>
<View>
<Button
title="Continue"
color="green"
onPress={onPress}
/>
</View>
</View>
</KeyboardAvoidingView>
)
}

export default AlloeNIC

const styles = StyleSheet.create({
    acordion: {
        display: 'flex',
        alignItems: 'center',
        width:windowWidth*0.9,
        flexDirection: 'row',
 
    
      },
    container: {
        flex: 1,
        padding:20,
        height:windowHeight*0.9,
        
       justifyContent:'space-between'
      },
      numberText:{
        fontSize:28,color:"green",fontWeight:"700",lineHeight:33.6
      },
      container1: {
    display:'flex',
    alignItems:'center',justifyContent:'space-between',
    flexDirection:'row'
      },
      container2: {
        display:'flex',
        alignItems:'center',justifyContent:'space-between',
        flexDirection:'column',
        width:windowWidth*0.8,
        backgroundColor:'whitesmoke',
        padding:20
          },
      cardText:{
        padding:30
      },
      cardView:{
        display:'flex',
        alignItems:'center',justifyContent:'center',
        padding:10
      },
      text2:{
        fontSize: 16,
        fontWeight:"500",
        padding:3,
       
        lineHeight:22,
      },
      bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
})