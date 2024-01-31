import { StyleSheet, Text, View  , Dimensions } from 'react-native'
import Icons from '../../components/Icons';
import Header from './components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Theme from '../../assets/styles/basic';
import React from 'react'
import Ongoings from './components/Ongoings';
const Tab = createMaterialTopTabNavigator();


const SavingPots = () => {
    const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
        <View style={{flex:1.5,}}>
              <Header
                  backtoPage={true}
                  backtoPage2={true}
                  title="Saving Pots"
                  backIcon={require('../../assets/SavingPotsImages/ArrowLeft.png')}
                  backIcon2={require('../../assets/SavingPotsImages/Plus.png')}
              />
         <View style={styles.Header}>
                  <Text style={styles.HeaderText}>Savings pot balance</Text>
                  <Text style={styles.HeaderText2}>AED 3,500.00</Text>    
         </View>     
        </View>
          <View style={{ backgroundColor: "blue", flex: 4, }}>
              <Tab.Navigator
                  screenOptions={{
                      tabBarLabelStyle: {
                          fontSize: 16,
                          fontWeight: "900",
                          textTransform: "capitalize",
                          fontFamily: "Poppins-Regular",
                        //   marginTop: 30,
                      },
                      tabStyle: {
                          backgroundColor: "white",
                          elevation: 0
                      },
                      tabBarIndicatorStyle: {
                          borderBottomWidth: 2,
                          borderBottomColor: 'green',
                      },
                  }}>
                  <Tab.Screen name="Ongoing" component={Ongoings} />
                  <Tab.Screen name="Completed" component={Ongoings} />
              </Tab.Navigator>
          </View>
          
    </View>
  )
}

export default SavingPots

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex: 1,
        backgroundColor:"#FFFFFF",
    },
    Header:{
        flex: 1,
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    HeaderText:{
        ...Theme.Light_gray_color_f,
        fontSize: 16,
        fontWeight:"500",
        ...Theme.Font_family        
    },
    HeaderText2:{
        ...Theme.black_color_f,
        fontSize: 24,
        fontWeight: "700",
        ...Theme.Font_family     
    }
})