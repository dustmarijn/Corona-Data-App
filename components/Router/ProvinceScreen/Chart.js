import React from 'react';
import {Text, View} from "react-native";
import LineChart from "react-native-chart-kit";

export default function chart(){
    return(
            <View>
                <Text>Line charts</Text>
                <LineChart
                    data={{
                        labels:["January","February","March","April","May","June"],
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
                    }}
                />
            </View>
            )
}