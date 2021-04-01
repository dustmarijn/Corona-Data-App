import React  from 'react';
import {Text, ScrollView, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";

export default  function DifferenceTestingScreen({navigation }) {

  return(
        <ScrollView style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30}}>Het vershil tussen vrij testen en particulier testen.</Text>
            <Text>Grafiek postive testen van December/Januari</Text>
            <LineChart
                data={{
                    labels: ["17-24", "24-31", "31-07", "07-14", "14-21", "21-28"],
                    datasets: [
                        {
                            data: [20, 40, 50, 0, 0, 0],
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
                        },
                        {
                            data: [0, 0, 0, 40, 60, 50],
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(0,0,102, ${opacity})`, // optional
                        }
                    ],
                    legend: ['Particulier testen', 'Vrij testen']
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisSuffix="P"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <Text style={{color: '#00a7d0', fontSize: 30}}>Partucilier testen.  </Text>
            <Text  style={{fontSize: 15}}> Datum van 17 December tot 07 Januari. </Text>
            <Text> Aantal testen: DATA </Text>
            <Text> Postive testen: DATA </Text>
            <Text> Ziekenhuis opnames: DATA </Text>
            <Text> Overlden: DATA </Text>

            <Text>  </Text>

            <Text style={{color: '#00a7d0', fontSize: 30}}>Vrij testen.  </Text>
            <Text  style={{fontSize: 15}}> Datum van 07 Januari tot 28 Januari. </Text>
            <Text> Aantal testen: DATA </Text>
            <Text> Postive testen: DATA </Text>
            <Text> Ziekenhuis opnames: DATA </Text>
            <Text> Overlden: DATA </Text>
            <Text>  </Text>
            <Text>  </Text>
            <Text>  </Text>
        </ScrollView>
  )
}
// 1 juni iedereen mag testen
// 7 januari vrij testen