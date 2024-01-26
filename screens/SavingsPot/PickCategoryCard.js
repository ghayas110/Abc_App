import { StyleSheet, Text, View , FlatList } from 'react-native'
import Header from './components/Header' 
import Theme from '../../assets/styles/basic'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const PickCategoryCard = () => {
    const Flatlist = [
        {
            name: 'House',
            subname:"Save for a new house or house renovations"
        },


    ];
    const renderItem = ({ item }) => (
        <>
            
                <View style={styles.cards}>
                    <Text style={styles.cardText}>{item.name}</Text>
                    <Text style={styles.cardText1}>{item.subname}</Text>
                </View>


        </>
    );
  return (
    <View style={styles.container}>
        <View style={{ flex:1.5 }}>
          <Header backtoPage={true} backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')} />
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
        padding:16,
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
        
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



