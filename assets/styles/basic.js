import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  basic_container: {
    paddingLeft: 15,
    paddingRight: 15,
    width: width,
  },
  main_heading: {
    fontSize: 25,
    color: "#00a200"
  },
  sub_heading: {
    fontSize: 18,
    color: "#00a200"
  },
  basic_button: {
    backgroundColor: "#00a200"
  },
  basic_button_text:{
    color: "white",
    textAlign: "center"
  }
});

export default styles;
