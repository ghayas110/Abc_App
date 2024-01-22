import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icons from '../../components/Icons';
import { Checkbox } from 'react-native-paper';
const Accordion = ({title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <View
          style={styles.acordion}>
          <Image
            style={styles.mapicon}
            source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
          />
          <Text style={styles.text}>{title}</Text>
          <Icons.AntDesign name={'down'} />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={{paddingHorizontal:5}}>{children}</Collapsible>
    </View>
  );
};

const Terms = ({onPress}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{padding: 20, backgroundColor: 'white'}}>
    <View>
   
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        Get more out of your banking
      </Text>
      <View style={{paddingVertical:20}}>
      <Text style={styles.text3 }>
      We're committed to protecting your security with our customer support
      team if you have any questions.
      </Text>
      </View>

      <Accordion title="Deposit and Transaction Limits">
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      </Accordion>
      <View
        style={styles.acordion}>
        <Image
          style={styles.mapicon}
          source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
        />
        <Text style={styles.text}>PDS Info Brochure</Text>
        <Text>.</Text>
      </View>
      <View
      style={styles.acordion}>
      <Image
        style={styles.mapicon}
        source={require('../../assets/SignUp/docgreen.png')} // replace with your image path
      />
      <Text style={styles.text}>Personal Data Protection</Text>
      <Text>.</Text>
    </View>
      <Accordion title="Product Disclosure Sheet">
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      </Accordion>
      <Accordion title="Terms & Conditions">
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      </Accordion>
      <Accordion title="General Disclaimer">
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      <View style={styles.acordion}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.text2}> Deposit Account-i and Debit Card-i Declaration and Authorisation</Text>
      </View>
      </Accordion>
      <View>
      <View style={{ flexDirection: 'row',paddingVertical:15 }}>
      <Checkbox
      status={ checked ? 'checked' : 'unchecked' }
      onPress={() => setChecked(!checked)}
    />
        <Text style={styles.text3}>I have read and accepted ALL the documents above. I understand this account is protected by PIDM up to RM 250,000 for each depositor and I have received a copy of the PIDM brochure.</Text>
      </View>
    </View>
    
      <View style={{paddingVertical:20}}>
      <Button title="Continue" color="green" onPress={onPress} />
      </View>
      </View>
    </View>
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
    height:50,
    borderBottomColor: 'whitesmoke',

  },
  text:{
    fontSize: 16,
    fontWeight:"500"
  },
  text2:{
    fontSize: 12,
    fontWeight:"700",color:'green'
  },
  text3:{
    fontSize: 16,
    lineHeight:24,
    fontWeight:"700",
  }
});
