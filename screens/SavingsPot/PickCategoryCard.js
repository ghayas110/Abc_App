import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native'
import Header from './components/Header' 
import Theme from '../../assets/styles/basic'
import React,{useState , useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const PickCategoryCard = () => {

    const navigation = useNavigation()
 


    const handleNavigate = () => {
        navigation.navigate('CreateSavingPots')
    }

    const Flatlist = [
        {
            name: 'House',
            subname:"Save for a new house or house renovations"
        },
        {
            name: 'Travel',
            subname: "Save for travel plans or adventures"
        },
        {
            name: 'Education',
            subname: "Save for your education or plan ahead for your child"
        },
            {
            name: 'Pilgrimage',
            subname:"Save for your pilgrimage trip"
        },
        {
            name: 'Others',
            subname: "Save for other future goals"
        },
         {
            name: 'Others',
            subname: "Save for other future goals"
        },



    ];
    const renderItem = ({ item }) => (
        <>
            <TouchableOpacity style={[styles.cards, styles.elevation]} onPress={handleNavigate}>
                <View >
                    <Text style={styles.cardText}>{item.name}</Text>
                    <Text style={styles.cardText1}>{item.subname}</Text>
               </View>
            </TouchableOpacity>

        </>
    );
  return (
    <View style={styles.container}>
        <View style={{ flex:1.5 }}>
          <Header 
          backtoPage={true} 
          backtoPage2={true} 
          backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')} />
          <Text style={styles.Heading}>
             Pick a category to start saving
          </Text>
        </View>
          <View style={{ flex: 5 }}>
              <ScrollView style={{ padding:10}} >
                  <FlatList
                      data={Flatlist}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                  />
        
          </ScrollView>
         </View>

    </View>
  )
}

export default PickCategoryCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:"#FFFFFF"
    },
    Heading:{
        ...Theme.Green_color_f,
        ...Theme.Font_family,
        fontWeight:"700",
        fontSize:28,
        padding: 5
    },
    cards:{
        borderRadius:16,
        borderWidth:1,
        borderColor: "#F9F9F9",
        shadowColor: '#52006A',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        // marginLeft:10,

        
    },
    elevation: {
        elevation: 5,
        shadowColor: '#CCCCCC',
    },
    

    cardText:{
        fontSize: 16,
        ...Theme.black_color_f,
        ...Theme.Font_family,
        fontWeight:"700"
    },
    cardText1:{
        fontSize: 14,
        ...Theme.gray_color_f,
        ...Theme.Font_family,
        fontWeight: "500"
    }
})



