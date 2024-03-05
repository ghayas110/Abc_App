import { View , Text } from "react-native";
import React from 'react';
import { BarChart } from "react-native-gifted-charts";
import Theme from '../../assets/styles/basic'

const Chart = () => {
    const barData = [
        { value: 30,  frontColor: '#F04438' },
        // { value: 500, label: 'T', frontColor: '#177AD5' },
        // { value: 745, label: 'W', frontColor: '#177AD5' },
        // { value: 320, label: 'T' },
        // { value: 600, label: 'F', frontColor: '#177AD5' },
        // { value: 256, label: 'S' },
        // { value: 300, label: 'S' },
    ];
    return (
        <View style={{width:150 , alignItems:"center" }}>
            <BarChart
                barWidth={40}
                noOfSections={3}
                barBorderRadius={10}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideRules
                hideAxesAndRules
                // showReferenceLine1
                // referenceLine1Position={420}
                // referenceLine1Config={{
                //     color: 'gray',
                //     dashWidth: 2,
                //     dashGap: 3,
                // }}
            />
            <Text style={{ ...Theme.chart_red_color, ...Theme.Font_family, fontSize: 10, fontWeight: '500', textAlign: "center" }}>Total MoneyOut</Text>
            <Text style={{...Theme.black_color_h , ...Theme.Font_family  , fontSize: 14, fontWeight: '700', textAlign:"center" }}>AED 1,1156.00</Text>
        </View>
    );
};


export default Chart;