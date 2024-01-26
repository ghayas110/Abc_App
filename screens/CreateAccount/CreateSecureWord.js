import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from '../../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {SimpleInput} from '../../components/Inputs';
import {RequestButton} from '../../components/Buttons';
import ProgressBar from 'react-native-progress/Bar';
import ThemeSty from '../../assets/styles/basic';
import Steps from '../../components/steps/Steps';

const CreateSecureWord = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  const ForWordnavigation = () => {
    navigation.navigate('CreatePassword');
  };
  const handleBackNavigation = () => {
    navigation.navigate('CreateUserName');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <>
      <View style={styles.container}>
        <Steps
          backtoPage={false}
          totalSteps={'6'}
          activeStep={'2'}
          backIcon={require('../../assets/CreateAccoutImages/back.png')}
          leftIcon={require('../../assets/CreateAccoutImages/settings.png')}
          rightIcon={require('../../assets/CreateAccoutImages/profile.png')}
          ProgressBarIcon={require('../../assets/CreateAccoutImages/progress.png')}
        />
        <View
          style={{
            padding: 5,
            marginTop: 25,
          }}>
          <Text
            style={{
              fontSize: 28,
              ...ThemeSty.Green_color_f,
              fontWeight: '700',
              ...ThemeSty.Font_family,
            }}>
            Create your Secure Word
          </Text>
        </View>

        <View style={{...styles.inputContainer, ...ThemeSty.gray_border_Color}}>
          <SimpleInput
            placeholder={'Enter Your Secure Word'}
            inputstyle={{
              fontSize: 20,
              color: 'black',
              fontWeight: '600',
              ...ThemeSty.Font_family,
            }}
            placeholderTextColor={"grey"}
            pass={true}
          />
        </View>
        <View style={styles.ListContainer}>
          <View style={styles.Instruction}>
            <Icons.AntDesign name="check" style={styles.CheckIcon} />
            <Text
              style={{
                ...styles.textInstruct,
                ...ThemeSty.gray_color_f,
                ...ThemeSty.Font_family,
              }}>
              Must not be the same as username
            </Text>
          </View>

          <View style={styles.Instruction}>
            <Icons.AntDesign name="check" style={styles.CheckIcon} />
            <Text
              style={{
                ...styles.textInstruct,
                ...ThemeSty.gray_color_f,
                ...ThemeSty.Font_family,
              }}>
              Must be between 5 - 15 characters
            </Text>
          </View>
          <View style={styles.Instruction}>
            <Icons.AntDesign name="check" style={styles.CheckIcon} />
            <Text
              style={{
                ...styles.textInstruct,
                ...ThemeSty.gray_color_f,
                ...ThemeSty.Font_family,
              }}>
              Only letters and numbers allowed
            </Text>
          </View>
        </View>

        {/* <View style={{ alignItems: "center",  }}>
                <RequestButton text='next' />
            </View> */}
      </View>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <RequestButton text="Next" onPress={ForWordnavigation} />
      </View>
    </>
  );
};

export default CreateSecureWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-evently',
  },
  Progress: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  TopHeader: {
    marginTop: 5,
    justifyContent: 'space-evently',
    flexDirection: 'row',
    alignContent: 'center',
  },
  inputContainer: {
    borderBottomWidth: 2,
    // borderColor: "#00A200",
    marginTop: 10,
  },
  Instruction: {
    fontFamily: 'Poppins',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ListContainer: {
    padding: 10,
  },
  CheckIcon: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  textInstruct: {
    marginLeft: 3,
    fontSize: 14,
    // color: "#808080",
    // fontFamily: 'Poppins',
    fontWeight: '500',
  },
  BackArrow: {
    // width: "100%",
    // padding: 10,
  },
  BackArrowIcon: {
    color: '#00A200',
    fontSize: 16,
    position: 'relative',
    right: 80,
  },
});
