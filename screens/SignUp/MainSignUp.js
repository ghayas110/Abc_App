import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ButtonInput from '../../components/ButtonInput'
import { useNavigation } from '@react-navigation/native'


const MainSignUp = () => {
    const navigation = useNavigation()
  return (
   
    <View style={styles.container}>
    {/* You can replace this with your own illustration */}
   <View style ={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around',height:"40%"}}>
   <Image
   style={styles.mapicon}
   source={require('../../assets/SignUp/signupimage1.png')} // replace with your image path
   />
   
   <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Great! You’re one step closer</Text>
   <Text style={{textAlign:'center'}}>This won’t take long. Please have your MyKad ready</Text>
   </View>
   
    <View style={styles.bottomView}>
    <ButtonInput onPress={()=>navigation.navigate('SignUpScreen')}/>
    </View>
      </View>
      
  
  )
}

export default MainSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
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