import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacisions,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import Icon from 'react-native-vector-icons/AntDesign';
  import Icons from './Icons';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const FormInput = ({
    
    placeholder,
    placeholderColor,
    setValues,
    icon,
    pass,
    currentvalue,
    edit,
    title,
    keyboardType,
    charecter,
    characterLimit,
    fontsize
  }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => {
      // Validate and limit input to the specified character limit (10 characters)
      if (text.length <= 10) {
        setInputValue(text);
      }
    };
    return (
    
  
      <View style={{ marginTop: 5 }}>
      <Text style={{ color: placeholderColor, fontSize: fontsize }}>{title}</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          value={inputValue}
          onChangeText={handleInputChange}
          style={styles.input}
          keyboardType={keyboardType}
          secureTextEntry={pass}
          editable={edit}
        />
        <Icon name={icon} size={20} color="grey" />
      </View>
      <Text>10 characters remaining</Text>
    </View>
  );
};

{/* <Text>{`${characterLimit - inputValue.length }10 characters remaining`}</Text> */}

  //     <View style={{marginTop: 5}}>
  //       <Text style={{color: placeholderColor,fontSize:fontsize}}>{title}</Text>
  //       <View style={styles.searchContainer}>
  //         <TextInput
  //           style={styles.input}
  //           placeholder={placeholder}
  //           placeholderTextColor={placeholderColor}
  //           onChangeText={setValues}
  //           value={currentvalue}
  //           keyboardType={keyboardType}
  //           secureTextEntry={pass}
  //           editable={edit}
  //         />
  //         <Icon name={icon} size={20} color="grey" />
  //       </View>
  //       <Text>{charecter}</Text>
  //     </View>
  //   );
  // };
  
  export default FormInput;
  
  const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottomWidth: 1, // This adds a bottom border
      borderBottomColor: 'green', // This sets the bottom border color to black
      paddingHorizontal: 6,
      width:280,
      
  
      
    },
    input: {
      flex: 1,
      color: 'black',
      fontWeight: '700',
    },
  });
  

