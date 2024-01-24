import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    basic_container: {
        width: width,
    },
    main_heading: {
        fontSize: 25,
        color: "#00a200",
        textTransform: "capitalize",
        fontWeight: "600"
    },
    sub_heading: {
        fontSize: 18,
        color: "#00a200",
        textTransform: "capitalize"
    },
    basic_button: {
        backgroundColor: "#00a200"
    },
    basic_button_text: {
        color: "white",
        textTransform: "capitalize",
        textAlign: "center"
    },
    simple_txt: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: "#808080",
    },

    flex_space_between: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    // HEADINGS COLORS =================================
    blue_color_h: { color: "#309fed", },
    gray_color_h: { color: "#808080" },
    Green_color_h: { color: "#00a200" },
    orenge_color_h: { color: "#ff5800" },
    black_color_h: {color: "#000"},
    red_color_h: {color: "red"},

    // BG COLORS =================================
    bg_blue_color: { backgroundColor: "#309fed", },
    bg_gray_color: { backgroundColor: "#808080" },
    bg_green_color: { backgroundColor: "#00a200" },
    bg_orenge_color: { backgroundColor: "#ff5800" },
    bg_light_gray: {backgroundColor: "#f9f9f9"},
    bg_orenge_color: { backgroundColor: "#ff5800" }, 
    bg_light_green_color: { backgroundColor: "#DCF2FC" },

    // FONTS COLORS =================================
    blue_color_f: { color: "#309fed", },
    gray_color_f: { color: "#808080" },
    Green_color_f: { color: "#00a200" },
    orenge_color_f: { color: "#ff5800" },

    // BORDERS ========================
    borderBot_gray:{
        borderBottomColor: "#808080",
        borderBottomWidth: 2,
    },
    orenge_color_f: { color: "#ff5800" }, 
    Light_gray_color_f: { color: "#CCCCCC" },
    black_color_f: { color: "#333333" }, 

    //icon Color==========
    orenge_color_Icon: { color: "#0038A4" },  
    //Font Family ====================
    Font_family: { fontFamily:"Poppins-Regular"},
    Font_family_Bold: { fontFamily:"Poppins-Bold"},

    //Border Color =================
    gray_border_Color: { borderColor: "#808080" },
    ligth_gray_border_Color: { borderColor: "#CCCCCC" },
    green_border_Color: { borderColor: "#00a200" },

    green_out_line: {
        borderWidth: 2,
        borderColor: "#00a200"
    }
});

export default styles;
