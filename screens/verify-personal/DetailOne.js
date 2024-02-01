import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import style from '../../assets/styles/basic';
import {List, SelectInput, SimpleInput} from '../../components/Inputs';
import {RequestButton} from '../../components/Buttons';
import {useNavigation} from '@react-navigation/native';
import Steps from '../../components/steps/Steps';
import FormInput from '../../components/FormInput';

const DetailOne = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  const nextPage = async () => {
    navigation.navigate('DetailTwo');
  };

  return (
    <>
      <View
        style={{
          ...style.basic_container,
          height: height,
          position: 'relative',
          backgroundColor: 'white',
        }}>
        <Steps
          backtoPage={false}
          totalSteps={'4'}
          activeStep={'1'}
          backIcon={require('./images/Icons.png')}
          leftIcon={require('./images/Profile.png')}
          rightIcon={require('./images/Setting.png')}
          ProgressBarIcon={require('./images/steps.png')}
        />
        {/* INPUT BOX ============================= */}
        <View
          style={{
            ...style.basic_container,

            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <Text
            style={{
              ...style.main_heading,
              textAlign: 'left',
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
            }}>
            Just a few more {`\n`}details from you
          </Text>

          <FormInput  
            placeholderTextColor="#808080"
            title={'Email'}
            type={'email'}
            placeholder={'Enter Email'}   
          />
        </View>
        <View
          style={{
            ...style.basic_container,
            marginTop: 20,
            paddingLeft: 9,
            
          }}>
          <SelectInput
            textStyle={{
              
              textAlign: 'left',
              fontSize: 16,
              marginBottom: 10,
              

            }}
            dropDownStyle={{
              fontFamily: 'Poppins-Regular',
              ...style.gray_color_f,
              
            }}
            label={'Marital status'}
            placeholder={'Select Marital status'}
            items={[
              {label: 'Option 1', value: 'option1'},
              {label: 'Option 2', value: 'option2'},
              {label: 'Option 3', value: 'option3'},
            ]}
          />
        </View>
        <View
          style={{
            ...style.basic_container,
            marginTop: 30,
            paddingLeft: 9,
          }}>
          <SelectInput
            textStyle={{
              textAlign: 'left',
              fontSize: 16,
              marginBottom: 10,
            }}
            dropDownStyle={{
              fontFamily: 'Poppins-Regular',
              ...style.gray_color_f,
            }}
            label={'Marital Ethnicity'}
            placeholder={'Select Ethnicity'}
            items={[
              {label: 'Option 1', value: 'option1'},
              {label: 'Option 2', value: 'option2'},
              {label: 'Option 3', value: 'option3'},
            ]}
          />
        </View>
        <RequestButton
          text={'Confirm'}
          onPress={() => nextPage()}
          btnStyle={{position: 'absolute', bottom: 50}}
        />
      </View>
    </>
  );
};

export default DetailOne;
