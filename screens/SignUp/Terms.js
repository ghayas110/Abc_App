import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, Linking } from 'react-native';
import style from '../../assets/styles/basic';
import { CheckBoxInput, List, SimpleInput } from '../../components/Inputs';
import { OutlineButton, RequestButton } from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from '../../components/Icons';
import Collapsible from 'react-native-collapsible';
import { Checkbox } from 'react-native-paper';
import Modal from 'react-native-modal';
import ThemeSty from '../../assets/styles/basic';
const { width, height } = Dimensions.get('window');
const Terms = ({ onPress }) => {
  const navigation = useNavigation();

  const Accordion = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
      <View>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
          <View style={styles.acordion}>
            <Image
              style={styles.mapicon}
              source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
            />
            <Text style={styles.text3}>{title}</Text>
            <Icons.AntDesign name={'down'} style={{ color: 'black' }} />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed} style={{ paddingHorizontal: 5 }}>
          {children}
        </Collapsible>
      </View>
    );
  };
  const [checked, setChecked] = React.useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const toggleBottomSheet2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
  };
  return (
    <>
      <View
        style={{
          ...style.basic_container,

          position: 'relative',
          backgroundColor: 'white',
        }}>
        {/* INPUT BOX ============================= */}
        <View
          style={{
            ...style.basic_container,
            marginTop: 30,
          }}>
          <Text
            style={{
              ...style.main_heading,
              textAlign: 'left',
              paddingLeft: 10,
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
            }}>
            {' '}
            Get more out of your {'\n'} banking
          </Text>
          <Text
            style={{
              fontSize: 17,
              padding: 20,
              paddingTop: 10,
              color: '#808080',
              fontFamily: 'Poppins-Regular',
            }}>
            We’re committed to protecting your data. Reach out to our customer
            support team if you have any queries
          </Text>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <Accordion title="Declaration and Authorisation">
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Deposit Account-i and Debit Card-i Declaration and
                  Authorisation
                </Text>
              </View>
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Personal Financing-i Declaration and Authorisation
                </Text>
              </View>
            </Accordion>
          </View>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <View style={styles.acordion}>
              <Image
                style={styles.mapicon}
                source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
              />
              <Text style={styles.text3}>PIDM DIS Brochure</Text>
              <View></View>
            </View>
          </View>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <View style={styles.acordion}>
              <Image
                style={styles.mapicon}
                source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
              />
              <Text style={styles.text3}>Personal Data Protection</Text>
              <View></View>
            </View>
          </View>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <Accordion title="Product Disclosure Sheet">
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Commodity Murabahah Savings Account-i Product Disclosure Sheet
                </Text>
              </View>
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Debit Card-i Product Disclosure Sheet
                </Text>
              </View>
            </Accordion>
          </View>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <Accordion title="Terms & Conditions">
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Deposit Account-i and Debit Card-i Declaration and
                  Authorisation
                </Text>
              </View>
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}>
                  {' '}
                  Deposit Account-i and Debit Card-i Declaration and
                  Authorisation
                </Text>
              </View>
            </Accordion>
          </View>
          <View
            style={{
              ...style.basic_container,
              paddingHorizontal: 10,
            }}>
            <Accordion title="General">
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}> General Terms & Conditions</Text>
              </View>
              <View style={styles.acordion1}>
                <Text style={styles.text2}>{'\u2022'}</Text>
                <Text style={styles.text2}> Specific Terms & Conditions</Text>
              </View>
            </Accordion>
          </View>
          <View style={{ flexDirection: 'row', width: width * 0.9, padding: 5 }}>
            <View style={{ marginTop: -5 }}>
              <Checkbox

                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',

                color: 'black',
                fontFamily: 'Poppins-Regular',
              }}>
              I have read and accepted ALL the documents above. I understand
              this account is protected by PIDM up to AED 250,000 for each
              depositor and I have received a copy of the PIDM brochure.
            </Text>
          </View>
        </View>

        <OutlineButton
          text="Contact Customer Support"
          onPress={toggleBottomSheet}
        />
        <RequestButton btnStyle={{paddingBottom:20}} text={'Confirm'} onPress={onPress} />
      </View>
      <Modal
        isVisible={isBottomSheetVisible}
        style={{ margin: 0 }}
        onBackdropPress={toggleBottomSheet}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 24,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  ...ThemeSty.Green_color_f,
                  ...ThemeSty.Font_family,
                }}>
                How can we help?
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  ...ThemeSty.gray_color_f,
                  ...ThemeSty.Font_family,
                  fontSize: 16,
                }}>
                Please reach out to our 24 hours Customer Support team 1800 81
                9149 (local) or +8423242345325 (overseas). Alternatively you may
                email us at: Bank@ssssco.com We’ll get this sorted!
              </Text>
            </View>
            <View style={{ padding: 20, ...ThemeSty.bg_light_green_color }}>
              <Text
                style={{
                  ...ThemeSty.Green_color_f,
                  fontSize: 14,
                  ...ThemeSty.Font_family,
                  fontWeight: '500',
                }}>
                Customer Support: +423432534564 (fraud support line 24/7) or
                email to us at:ssssco.com
              </Text>
            </View>
            <View style={{ padding: 10, alignItems: 'center' }}>
              <OutlineButton text="Report Fraud" onPress={toggleBottomSheet2} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <RequestButton text="Give us call" onPress={toggleBottomSheet2} />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={isBottomSheetVisible2}
        style={{ margin: 0 }}
        onBackdropPress={toggleBottomSheet2}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              backgroundColor: 'transparent',
              padding: 24,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <View style={{ padding: 10, alignItems: 'center' }}>
              <OutlineButton
                onPress={() => Linking.openURL(`tel:${'+73365596220'}`)}
                text="call +7336 559 6220"
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <RequestButton text="Cancel" onPress={toggleBottomSheet2} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Terms;

const styles = StyleSheet.create({
  acordion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 50,

    borderBottomColor: 'whitesmoke',
  },
  acordion1: {
    display: 'flex',

    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 50,
    width: width * 0.9,
    borderBottomColor: 'whitesmoke',
  },
  text: {
    fontSize: 17,
    color: '#808080',
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 15,
    fontWeight: '700',
    color: 'green',
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  text3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: 'black',
  },
});
