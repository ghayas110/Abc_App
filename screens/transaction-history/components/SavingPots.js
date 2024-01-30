import { StyleSheet, Text, View , Button} from 'react-native'
import React, {useState} from 'react'
import Theme from '../../../assets/styles/basic'
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
// import { RadioButtonCheck } from 'react-native-paper';
import { FilterButton, RequestButton    } from '../../../components/Buttons';
import { CheckBoxInput } from '../../../components/Inputs';

const SavingPots = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const data = [
        { name: 'Trip to Kyoto - Single Transfer', price: '+AED10485', date: "Feb 2022" },
    ];
    const data2 = [
        { name: 'My Umrah - Profit Earned', price: '+AED10485', date: "Feb 2022" },
        { name: 'My Umrah - Profit Earned', price: '+AED10485', date: "Feb 2022" },
        { name: 'My Umrah - Profit Earned', price: '+AED10485', date: "Feb 2022" },
        { name: 'My Umrah - Profit Earned', price: '+AED10485', date: "Feb 2022" },
        { name: 'My Umrah - Profit Earned', price: '+AED10485', date: "Feb 2022" },
    ];
    return (
        <ScrollView style={{padding:5, backgroundColor:"#FFFFFF"}}>
            <View style={styles.filterbtn}>
                <FilterButton text={'Filter'} onPress={toggleBottomSheet} />
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Text style={styles.headerCell}>Feb 2022</Text>
                </View>
                {data.map(item => (
                    <>
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.cell}>{item.name}</Text>
                            <Text style={styles.cell}></Text>
                            <Text style={styles.cell2}>{item.price}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.Datetb}>{item.date}</Text>
                        </View>
                    </>
                ))}

            </View>
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Text style={styles.headerCell}>March 2023</Text>
                </View>
                {data2.map(item => (
                    <>
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.cell}>{item.name}</Text>
                            <Text style={styles.cell}></Text>
                            <Text style={{ ...styles.cell2, ...Theme.Green_color_f }}>{item.price}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.Datetb}>{item.date}</Text>
                        </View>
                    </>
                ))}
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Text style={styles.headerCell}>Feb 2022</Text>
                </View>
                {data.map(item => (
                    <>
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.cell}>{item.name}</Text>
                            <Text style={styles.cell}></Text>
                            <Text style={styles.cell2}>{item.price}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.Datetb}>{item.date}</Text>
                        </View>
                    </>
                ))}

            </View>
            <Modal
                isVisible={isBottomSheetVisible}
                style={{ margin: 0 }}
                onBackdropPress={toggleBottomSheet}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'white', padding: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: '700', ...Theme.black_color_f, ...Theme.Font_family }} >Filter By</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center" ,  }}>
                            <CheckBoxInput />
                            <Text style={{   marginLeft:10, fontSize:16 , fontWeight:'500', ...Theme.Font_family , ...Theme.black_color_f }}>All transactions</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <CheckBoxInput />
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '500', ...Theme.Font_family, ...Theme.black_color_f }}>All transactions</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center" ,  }}>
                            <CheckBoxInput  />
                            <Text style={{   marginLeft:10, fontSize:16 , fontWeight:'500', ...Theme.Font_family , ...Theme.black_color_f }}>All transactions</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <CheckBoxInput />
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '500', ...Theme.Font_family, ...Theme.black_color_f }}>All transactions</Text>
                        </View>
                      
                        <View>
                            <Text style={{ ...Theme.gray_color_f ,...Theme.Font_family ,...styles.textcheck }}>Restore to default</Text>
                        </View>
                        <View style={{ alignItems: "center",  }}>
                            <RequestButton text='Apply' />
                        </View>
                     

                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default SavingPots

const styles = StyleSheet.create({
    tableContainer: {
        borderBottomWidth: 0.5,
        ...Theme.ligth_gray_border_Color,
        padding: 10,
        margin:0,
        marginRight:-45
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:0
    },
    headerCell: {
        flex: 1,
        fontWeight: '700',
        fontSize: 16,
        ...Theme.Font_family,
        ...Theme.black_color_h


    },
    cell: {
        flex: 1,
        fontWeight: "500",
        ...Theme.Font_family,
        fontSize: 14,
        ...Theme.black_color_h
    },
    cell2: {
        flex: 1,
        fontWeight: "500",
        ...Theme.Font_family,
        fontSize: 14,
        ...Theme.Light_gray_color_f,
    },
    Datetb: {
        flex: 1,
        fontWeight: "500",
        ...Theme.Font_family,
        fontSize: 12,
        ...Theme.Light_gray_color_f
    },
    filterbtn:{
        paddingLeft: 7,
        marginTop:10
    },
    textcheck:{
      textAlign:"center"  
    }
});