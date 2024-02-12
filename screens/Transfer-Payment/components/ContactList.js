import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'
import { RequestButton } from '../../../components/Buttons';
import * as Contacts from 'react-native-contacts';


const ContactList = () => {

    const openContactList = () => {
        Contacts.openContactForm()
            .then(contact => {
                console.log('Contact opened:', contact);
            })
            .catch(error => {
                console.error('Error opening contact:', error);
            });
    };
    
  return (
    <View>
      <RequestButton text="open" onPress={openContactList} />
    </View>
  )
}
export default ContactList

const styles = StyleSheet.create({})