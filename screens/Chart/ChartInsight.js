import { BarChart } from "react-native-gifted-charts";
import { View , Text} from "react-native";
import React from 'react';
import Theme from '../../assets/styles/basic'


const ChartInsight = () => {
    const barData = [
        { value: 250,  frontColor: '#12B76A' },
        // { value: 500, label: 'T', frontColor: '#12B76A' },
        // { value: 745, label: 'W', frontColor: '#177AD5' },
        // { value: 320, label: 'T' },
        // { value: 600, label: 'F', frontColor: '#177AD5' },
        // { value: 256, label: 'S' },
        // { value: 300, label: 'S' },
    ];
    return (
        <View style={{ width: 150 }}>
            <BarChart
                barWidth={40}
                noOfSections={3}
                barBorderRadius={10}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideAxesAndRules
                // showReferenceLine1
                // referenceLine1Position={4}
                // referenceLine1Config={{
                //     color: '#12B76A',
                //     dashWidth: 1,
                //     dashGap: 1,
                // }}
            />
            <Text style={{ ...Theme.chart_green_color, ...Theme.Font_family, fontSize: 10, fontWeight: '500', textAlign: "center" }}>Total MoneyOut</Text>
            <Text style={{ ...Theme.black_color_h, ...Theme.Font_family, fontSize: 14, fontWeight: '700', textAlign: "center" }}>AED 1,5556.00</Text>
        </View>
    );
};

export default ChartInsight