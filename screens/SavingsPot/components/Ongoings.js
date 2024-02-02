import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, ProgressBarAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Theme from '../../../assets/styles/basic'

const Ongoings = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('AddFundsHome');
  };

  const [progress, setProgress] = useState(0.5)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.1;
        return newProgress < 1 ? newProgress : 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.savingpotcard}>
          <ImageBackground
            resizeMode="cover"
           imageStyle={{ borderRadius: 15 }} 
           source={require('../../../assets/SavingPotsImages/SavingsPotCard.png')} >
          <View style={{padding:15}}>
            <Text style={styles.HeadText}>My Umrah</Text>
          </View>
            <View style={{ padding: 15 }}>
            <Text style={styles.RupeeText}>AED 9,000.00</Text>
            <View>
              <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} color="#00a200" />
            </View>
            <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
              <Text style={styles.percenText}>30%</Text>
                <Text style={styles.percenText}>RM 30,000.00</Text>
            </View>
          </View>
        </ImageBackground>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.savingpotcard}>
          <ImageBackground
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={require('../../../assets/SavingPotsImages/SavingsPotCard2.png')} >
            <View style={{ padding: 15 }}>
              <Text style={styles.HeadText}>My Umrah</Text>
            </View>
            <View style={{ padding: 15 }}>
              <Text style={styles.RupeeText}>AED 9,000.00</Text>
              <View>
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} color="#00a200" style={styles.progessBar} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.percenText}>30%</Text>
                <Text style={styles.percenText}>RM 30,000.00</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity> */}

    </View>
  );
};

export default Ongoings;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  savingpotcard: {
    resizeMode: 'cover',
    width: 330,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  HeadText:{
    fontSize: 16,
    ...Theme.White_color_h,
    ...Theme.Font_family,
    fontWeight: '600',
    
  },
  RupeeText:{
    fontSize: 24,
    ...Theme.White_color_h,
    ...Theme.Font_family,
    fontWeight: '600',
  },
  percenText:{
    fontSize: 16,
    ...Theme.White_color_h,
    ...Theme.Font_family,
    fontWeight: '600', 
  },

});