import React,{useEffect, useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {LineChart} from "react-native-chart-kit";
import ApiData from "../../Api/ApiData";


export default function Chart({defaultProvince}){
    const [RegionData, setRegionData] = useState('');
    const [PositiveData, setPositiveData] = useState('');

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
            }
        ]
    }

    return(

            <View style={{ position: 'absolute', top: 1}}>
                {/*horizontal={true}*/}
                {/*showsHorizontalScrollIndicator={false}*/}
                <LineChart
                    data={data}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#facc00",
                        backgroundGradientTo: "#facc00",
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
                        margin: 5,
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                </View>
            )
}
// const styles = StyleSheet.create({
//
// })
