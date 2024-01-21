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

    // BG COLORS =================================
    bg_blue_color: { backgroundColor: "#309fed", },
    bg_gray_color: { backgroundColor: "#808080" },
    bg_green_color: { backgroundColor: "#00a200" },
    bg_orenge_color: { backgroundColor: "#ff5800" },
    bg_light_gray: {backgroundColor: "#f9f9f9"},

    // FONTS COLORS =================================
    blue_color_f: { color: "#309fed", },
    gray_color_f: { color: "#808080" },
    Green_color_f: { color: "#00a200" },
    orenge_color_f: { color: "#ff5800" },

    // BORDERS ========================
    borderBot_gray:{
        borderBottomColor: "#808080",
        borderBottomWidth: 2,
    }
});

export default styles;
