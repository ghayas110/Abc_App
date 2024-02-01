import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import OnGoing from '../../../assets/SavingPotsImages/SavingsPotCard.png'
import SavingPotImage  from '../../../assets/SavingPotsImages/SavingsPotCard2.png'
import React from 'react'

const Ongoings = () => {
const navigation = useNavigation()

const handleNaviagte = () => {
  navigation.navigate('AddFundsHome')
}
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handleNaviagte}>
              <Image source={OnGoing} />
          </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handleNaviagte} >
              <Image source={SavingPotImage} />
          </TouchableOpacity>
    </View>
  )
}

export default Ongoings

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex: 1,
        backgroundColor:"#FFFFFF"
    },
})