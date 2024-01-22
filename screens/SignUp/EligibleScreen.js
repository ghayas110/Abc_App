import React, { useState } from 'react';
import { View, Text, Button,StyleSheet,Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const EligibilityScreen = ({onPress}) => {
    const [checked, setChecked] = React.useState(false);
    const [checkedd, setCheckedd] = React.useState(false);
    const [checkeddd, setCheckeddd] = React.useState(false);

  return (
    <View style={{flex:1,padding: 20}}>
 <View >
 <Text style={{fontSize: 24, fontWeight: '900',color:'green',marginBottom:15}}>Yes, I'm eligible!</Text>
 <View>
 <View style={styles.acordion}>
 <Text >{'\u2022'}</Text>
 <Text style={styles.text2}> I’m 18 years old and above </Text>
 </View>
 <View style={styles.acordion}>
 <Text >{'\u2022'}</Text>
 <Text style={styles.text2}>I have an existing online banking account with another bank in Dubai </Text>
 </View>
 <View style={{ flexDirection: 'row',paddingVertical:15 }}>
 <Checkbox
 status={ checked ? 'checked' : 'unchecked' }
 onPress={() => setChecked(!checked)}
 />
 <Text style={styles.text2}>
 I’m a Dubai citizen with a CNIC, living in Dubai        </Text>
 </View>
 <View style={{display:'flex', flexDirection: 'row' }}>
 <Checkbox
 status={ checkedd ? 'checked' : 'unchecked' }
 onPress={() => setCheckedd(!checkedd)}
 />
 <Text style={styles.text2}>
 I‘m NOT a US person
 </Text>
 </View>
 <View style={{ flexDirection: 'row',paddingVertical:15 }}>
 <Checkbox
 status={ checkeddd ? 'checked' : 'unchecked' }
 onPress={() => setCheckeddd(!checkeddd)}
 />
 <Text style={styles.text2}>
 I don't pay income tax in any other country besides Dubai      </Text>
 </View>
 </View>
 {/* Repeat the checkbox component for other criteria */}
 <View style={{width:"100%",backgroundColor:'#DCF2FC',padding:20}}>
 <Text>Note: You are a US person if you are either a US citizen, a US resident or a Green Card holder.</Text>
 </View>
 </View>
 <View>
 <Button
 title="I'm not eligible"
 
 onPress={onPress}
 />
 <Button
 title="Yes, I'm eligible"
 color="#0f0"
 onPress={onPress}
 />
 </View>
     
    </View>
  );
};

export default EligibilityScreen;

const styles = StyleSheet.create({
    acordion: {
      display: 'flex',
      alignItems: 'center',

      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'whitesmoke',
  
    },
       container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
      },
    text:{
      fontSize: 16,
      fontWeight:"500"
    },
    text2:{
      fontSize: 16,
      fontWeight:"500",
      paddingLeft:10,
      lineHeight:24,
    },
    text3:{
      fontSize: 16,
      lineHeight:24,
      fontWeight:"700",
      
    },
    bottomView: {
        width: windowWidth,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
  });
