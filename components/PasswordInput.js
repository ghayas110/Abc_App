import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import Icon from 'react-native-vector-icons/AntDesign';
import Icons from './Icons';

const PasswordInput = ({placeholder,placeholderColor,setValues,icon,pass,value,defaultValue}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
<>
<Text> Password</Text>
    <View style={styles.searchContainer}>
    
    <Icon name={icon} size={20} color="orange" />

    <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={placeholderColor}
    onChangeText={setValues}
    secureTextEntry={!isPasswordVisible}
    value={value}
    defaultValue={defaultValue}
    
    
  />
  <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
  <Icons.MaterialCommunityIcons name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="#00A200" />
</TouchableOpacity>
  </View>
  </>
  )
}

export default PasswordInput

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:"100%",
      },
      input: {
        flex: 1,
        color:'black'
      },
})