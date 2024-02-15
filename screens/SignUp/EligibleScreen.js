import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import style from '../../assets/styles/basic';
import {CheckBoxInput, List, SimpleInput} from '../../components/Inputs';
import {OutlineButton, RequestButton} from '../../components/Buttons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {Checkbox} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
const EligibleScreen = ({onPress}) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [checkeddd, setCheckeddd] = React.useState(false);
  const navigation = useNavigation();
  const styless = {
    bottomSheetContainer: {
      backgroundColor: 'white',
      height: '50%',

      paddingBottom: 20,
      borderTopLeftRadius: 20, // Adjust the value based on your desired borderRadius
      borderTopRightRadius: 20, // Adjust the value based on your desired borderRadius
    },
  };
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  return (
    <>
      <View
        style={{
          ...style.basic_container,
          height: height * 0.75,
          position: 'relative',
          backgroundColor: 'white',
        }}>
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
              ...style.main_headings,
              textAlign: 'left',
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
            }}>
            Yes, I’m eligible!
          </Text>
          <View style={styles.acordion}>
            <Text style={styles.text4}>{'\u2022'} I’m 18 years old and above </Text>
          </View>
          <View style={styles.acordion1}>
              <Text>{'\u2022'}</Text> 
               <Text style={styles.text4}> I have an existing online banking account with another bank in UAE</Text>
          </View>
          <View style={styles.acordion3}></View>
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <Checkbox
              color="green"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.text4}>
              I’m a UAE citizen with a CNIC,{`\n`}living in UAE
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Checkbox
              color="green"
              status={checkedd ? 'checked' : 'unchecked'}
              onPress={() => setCheckedd(!checkedd)}
            />
            <Text style={styles.text4}>
              I‘m
              <Text style={{fontWeight: 'bold', color: 'black'}}> NOT</Text> a
              US person
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Checkbox
              color="green"
              style={{borderColor: '#006400'}}
              status={checkeddd ? 'checked' : 'unchecked'}
              onPress={() => setCheckeddd(!checkeddd)}
            />
            <Text style={styles.text4}>
              I don't pay income tax in any{`\n`}other country besides UAE
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: '#DCF2FC',
              padding: 16,
              marginTop: 20,
              borderRadius:3,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#006400',
                fontFamily: 'Poppins-Regular',
                lineHeight:21,
                
              }}>
              <Text style={{fontWeight: 'bold'}}>Note:</Text> You are a US
              person if you are either a US citizen, a US resident or a Green
              Card holder.
            </Text>
          </View>
        </View>
      </View>

      <OutlineButton text="I'm not eligible" onPress={toggleBottomSheet} />
      <View style={{padding: 10, alignItems: 'center'}}>
        <RequestButton text={'I am eligible'} onPress={onPress} />
      </View>
      <View>
        <Modal
          isVisible={isBottomSheetVisible}
          style={{margin: 0}}
          onBackdropPress={toggleBottomSheet}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                ...styless.bottomSheetContainer,
              }}>
              <View
                style={{
                  ...style.basic_container,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={toggleBottomSheet}
                  style={{
                    ...style.bg_light_gray,
                    padding: 15,
                    marginRight: 30,
                    borderRadius: 40,
                  }}>
                  <Image source={require('../../assets/SignUp/cross.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.containers}>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '60%',
                  }}>
                  <View style={{padding: 5}}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '900',
                        color: 'green',
                        marginBottom: 15,
                      }}>
                      Sorry! You don't meet our eligibility criteria
                    </Text>
                    <Text style={styles.text2}>
                      When our platform opens up to a wider group of customers,
                      how should we contact you?{' '}
                    </Text>
                  </View>
                </View>

                <View>
                  <Button
                    title="i'll exit now"
                    color="green"
                    onPress={() => navigation.navigate('Landing')}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default EligibleScreen;

const styles = StyleSheet.create({
  acordion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: width * 0.65,
    height: 50,
    borderBottomColor: 'whitesmoke',
  },
  acordion3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    width: width * 0.65,
    height: 10,
    borderBottomColor: 'whitesmoke',
  },
  acordion1: {
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: width * 0.8,
    height: height * 0.1,
    borderBottomColor: '#CCCCCC',
  },
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 30,
    height: height * 0.9,
    justifyContent: 'space-between',
  },
  containers: {
    flex: 1,
    paddingTop: 20,
    padding: 30,
    height: height * 0.9,
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 17,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },
  text4: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    // lineHeight: 24,
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
