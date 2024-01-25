import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../assets/styles/basic'
import { SearchInput } from '../../../components/Inputs'
import { useNavigation } from '@react-navigation/native'
// import { FilterButton, RequestButton } from '../../components/Buttons';
import Icons from '../../../components/Icons';
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const Favourite = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const navigation = useNavigation()

  const ForWordnavigation = () => {
    navigation.navigate('TransferTO')
  }

  const Flatlist = [
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank:"Saudi Bank",
      number:"•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} /> 
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank:"Saudi Bank",
      number:"•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} /> 
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
    {
      name: 'Adli Ahmad ',
      type: 'Casa Account',
      bank: "Saudi Bank",
      number: "•••••••••5431",
      icon: <Icons.AntDesign name='edit' style={styles.penicon} />
    },
   
  ];



  const renderItem = ({ item }) => (
    <>
      <View>
        <View style={styles.flatlistrow}>
          <View style={styles.namerow}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </View>
          <View style={styles.bankrow}>
            <Text style={styles.Bank}>{item.bank}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </View>
          <Text style={styles.listIcon}>{item.icon}</Text>
        </View>

      </View>

    </>
  );

  return (
    <>

      <View style={styles.container}>
        
        <View style={{ marginTop: 15 }}>
          <SearchInput
            title="Account number"
            type="number"
            placeholder={"Search Recipient Bank"}
            styles={styles.Input}

          />
        </View>
        <ScrollView>
          <FlatList
            data={Flatlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

        </ScrollView>



      </View>
    </>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  Input: {
    ...Theme.Font_family,
    fontSize: 16,
    fontWeight: "500",
    ...Theme.Light_gray_color_f,
    marginTop: 15,

  },
  Notify: {
    padding: 20,
    // backgroundColor: "#DCF2FC",
  },

  flatlistrow: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    ...Theme.ligth_gray_border_Color,
    padding: 0.5,
    marginTop: 15,
  },
  penicon:{
    fontSize:24,
    ...Theme.Green_color_f
  },
  namerow:{
    flexDirection:"column",
    alignItems:"center"
  },
  bankrow:{
    flexDirection:"column",
    alignItems: "center",
    marginLeft:100
  },
  icon2: {
    fontSize: 16,
    ...Theme.Green_color_f
  },
  name: {
    fontSize: 16,
    // marginLeft: 10,
    ...Theme.black_color_f,
    ...Theme.Font_family,
    fontWeight: "700"
  },
  Bank:{
    fontSize: 16,
    // marginLeft: 10,
    ...Theme.black_color_f,
    ...Theme.Font_family,
    fontWeight: "700"
  },
   type:{
    fontSize:14,
    ...Theme.Light_gray_color_f,
    ...Theme.Font_family
   },

   number:{
     fontSize: 14,
     ...Theme.Light_gray_color_f,
     ...Theme.Font_family
   },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "500",
    ...Theme.Light_gray_color_f,
    ...Theme.Font_family,
  }


});