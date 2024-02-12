import React, { useState } from 'react'
import { StyleSheet, Image,Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Checkbox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../assets/styles/basic'
import Icons from './Icons';
import DocumentPicker from 'react-native-document-picker';

const { width, height } = Dimensions.get('window');
const SimpleInput = ({
    placeholderTextColor,
    inputstyle,
    label,
    value,
    defaultValue,
    type,
    placeholder,
    viewStyle,
    pass,
    onChangeText
}) => {
    return (
        <>
            <View style={{
                paddingLeft: 5,
                paddingRight: 5,
                width: width,
                marginTop: 10,
                ...viewStyle
            }}>
                <Text style={{
                    fontSize: 12,
                    color: "#808080",
                    fontFamily: "Poppins-Regular"
                }}>{label}</Text>
                <TextInput
                    style={{ ...inputstyle }}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={pass}
                    value={value}
                    defaultValue={defaultValue}
                    placeholderTextColor={"grey"}
                    onChangeText={onChangeText}
                />
            </View>
        </>
    )
}

const OtpInput = () => {
    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-around'
            }}>
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
                <TextInput
                    style={{ ...styles.otpInput, fontFamily: "Poppins-Regular" }}
                    type={"number"}
                    maxLength={1}
                />
            </View>
        </>
    )
}

const CheckBoxInput = ({
    text,
    textStyle,
    color,
    status,
    others
}) => {
    const [isChecked, setChecked] = useState(false);
    const handleCheckBoxClick = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop:10,
             
                padding: 0,
            }}>
                <Checkbox
                    isChecked={isChecked}
                    onClick={handleCheckBoxClick}  // or use onChange
                    checkBoxColor={color}
                />
                <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{text}</Text>
            </View>
        </>
    )
}

const List = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value,
    viewStyle
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()


    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 15,
                ...viewStyle
            }}>
                <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{label}</Text>
                <DropDownPicker
                    placeholder={placeholder}
                    items={items}
                    defaultValue={defaultValue}
                    value={currentValue}
                    setOpen={() => setOpen(!isOpen)}
                    open={isOpen}
                    textStyle={dropDownStyle}
                    style={{
                        zIndex: 1000,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        fontFamily: "Poppins-Regular",
                        // color: "green"
                    }}
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}
const SelectInput = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()


    return (
        <>
            <View style={{
                paddingLeft: 15,
                paddingRight: 15,
                width: width,
                marginTop: 15
            }}>
                <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{label}</Text>
                <DropDownPicker
                    placeholder={placeholder}
                    items={items}
                    defaultValue={defaultValue}
                    value={currentValue}
                    setOpen={() => setOpen(!isOpen)}
                    open={isOpen}
                    textStyle={dropDownStyle}
                    style={{
                        zIndex: 1000,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        fontFamily: "Poppins-Regular",
                        
                        // color: "green"
                    }}
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}

const DropDown = ({
    defaultValue,
    label,
    textStyle,
    dropDownStyle,
    placeholder,
    items,
    value
}) => {
    const [isOpen, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState()
    


    return (
        <>
            <View style={{}}>
                {/* <Text style={{ ...textStyle, fontFamily: "Poppins-Regular" }}>{label}</Text> */}
                <DropDownPicker
                    placeholder={placeholder}
                    items={items}
                    defaultValue={defaultValue}
                    value={currentValue}
                    setOpen={() => setOpen(!isOpen)}
                    open={isOpen}
                    textStyle={dropDownStyle}
                    style={{
                        zIndex: 1000,
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        fontFamily: "Poppins-Regular",
                    }}                    
                    setValue={(val) => setCurrentValue(val)}
                />
            </View>
        </>
    )
}

const SearchInput = ({placeholder , label, type}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#CCCCCC"
                placeholderStyle={{ fontSize:24}}
                value={searchText}
                onChangeText={handleSearchChange}
                type={type}
            />
            <Icons.AntDesign name="search1" size={20} color="gray" style={styles.icon} />
        </View>
    );
};

const ExampleInput = ({ placeholder, label, type, InStyle, keyboardType , value }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.Examcontainer}>
            <TextInput
                style={{...styles.input , ...InStyle }}
                placeholder={placeholder}
                placeholderTextColor="#CCCCCC"
                placeholderStyle={styles.placeholderstyle}
                value={value}
                onChangeText={handleSearchChange}
                type={type}
                keyboardType={keyboardType}
            />
        </View>
    );
};

const FilePicker = ({text,fileStyleView,fileStyle,icon,textStyle}) => {
    const [pickedDocument, setPickedDocument] = useState(null);
    const pickDocument = async () => {
        try {
          const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
          });
          console.log(result[0].name);
          
          setPickedDocument(result[0]?.name);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker
            console.log('User cancelled the picker');
          } else {
            throw err;
          }
        }
    };
    return (
        <>
        <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...fileStyleView
        }}>
            {pickedDocument?
            <View style={{padding:20,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
            <Image source={require('../assets/Finance/Document.png')} style={{marginRight: 10,height:20,width:30,resizeMode:'contain'}}/>
            <Text style={{color:'black'}}>{pickedDocument}</Text>
            </View>:null}
          
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#00A200",
                borderRadius: 20,
                padding: 10,
                width: 250,
                ...fileStyle
            }} onPress={pickDocument}>
                <Image source={icon} style={{marginRight: 10,height:30,width:30}}/>
                <Text style={{...Theme.Font_family_Bold,...Theme.Green_color_h,fontSize: 20,...textStyle}}>{text}</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};





const styles = StyleSheet.create({
    otpInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    container: {
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center', // Center items vertically
        paddingHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderBottomWidth:0.5,
        borderBlockColor: "#CCCCCC"
    },
    Examcontainer:{
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center', // Center items vertically
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.5,
        borderBlockColor: "#CCCCCC"
    },
    icon: {
        marginRight: 10,
        color:"#00a200"
    },
    input: {
        flex: 1, // Take up all available space
        height: 40,
        ...Theme.gray_color_h,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    inputPlaceholder:{
        fontSize: 16,
        fontWeight:"600",
        ...Theme.Font_family
        
    }, 
    placeholder:{
        fontSize:24,
        ...Theme.black_color_f
    }
});

export { SimpleInput, OtpInput, CheckBoxInput, List, SearchInput, ExampleInput, DropDown,SelectInput,FilePicker }
