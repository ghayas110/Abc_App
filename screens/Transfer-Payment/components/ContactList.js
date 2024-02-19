import { StyleSheet, Text, View, PermissionsAndroid, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RequestButton } from '../../../components/Buttons';
import Contacts from 'react-native-contacts';
import Theme from '../../../assets/styles/basic'

const ContactList = () => {
  const [isContacts, SetContacts] = useState([])

  const openContactList = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then((res) => {
        console.log('Permission: ', res);
        if (res === PermissionsAndroid.RESULTS.GRANTED) {
          Contacts.getAll()
            .then((contacts) => {
              // Work with contacts
              console.log(contacts);
              SetContacts(contacts)
            })
            .catch((e) => {
              console.log(e);
            });
        } else if (res === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          console.log('Contacts permission denied permanently');
          // about the need to enable the permission manually in the device settings
          // and provide instructions on how to do so.
        } else {
          console.log('Contacts permission denied');
          // Handle permission denial
        }
      })
      .catch((error) => {
        console.error('Permission error: ', error);
      });
  };

  useEffect(() => {
    openContactList()
  }, [])

  console.log(isContacts, "dasds")

  const renderItem = ({ item }) => (
    <>
        <TouchableOpacity style={styles.flatlistrow}>
          <View style={styles.selection}>
          <Text style={styles.Select}>{item.displayName}</Text>
          </View>
        </TouchableOpacity>
      


    </>
  );

  return (
    <View >
      <FlatList
        data={isContacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  flatlistrow: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    ...Theme.ligth_gray_border_Color,
    padding: 10,
  },
  name: {
    fontSize: 12,
    ...Theme.gray_color_h,
    ...Theme.Font_family,
    fontWeight: "500"
  },
  Select: {
    fontSize: 16,
    ...Theme.black_color_h,
    ...Theme.Font_family,
    fontWeight: "700"
  },
});
