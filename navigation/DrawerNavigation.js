// ./navigation/DrawerNavigator.js

import React,{useState,useEffect} from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Icons from "../components/Icons";
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {  const count = useSelector((state) => state.auth.user)

  const navigation =useNavigation()
  const [data, setdata] = useState()


  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginTop:-10, flex: 1, backgroundColor: 'orange', padding: 25 }}>
      <Icons.AntDesign name="user" size={70} />
        <View style={{paddingTop:15}}>
        <Text style={{color:"white",fontSize:20,fontWeight:'700'}}>{data?.name}</Text>
        <Text style={{color:'white'}}>{data?.email}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
        <Text style={{color:'white',marginTop:10,textDecorationLine:"underline",fontWeight:'bold'}}>Edit Profile</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: 'white' }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}


export default CustomDrawer;