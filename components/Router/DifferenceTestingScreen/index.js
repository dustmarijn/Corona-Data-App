import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Dimensions, View, StyleSheet} from 'react-native';
import {LineChart} from "react-native-chart-kit";

import ApiData from '../../Api/ApiData';
import ApiHospital from '../../Api/ApiHospital';

export default function DifferenceTestingScreen({navigation}) {
    const [useTestData, setUseTestData] = useState('hallo');
    const [filteredData, setFilteredData] = useState('Hallo');
    const [usePositiveData, setUsePositiveData] = useState(0);
    const [useTestedResult, setUseTestedResult] = useState(0);
    const [useSickData, setUseSickData] = useState(0);
    const [useDeathData, setUseDeathData] = useState(0);
    const [usePPositiveData, setUsePPositiveData] = useState(0);
    const [useTTestedResult, setUseTTestedResult] = useState(0);
    const [useSSickData, setUseSSickData] = useState(0);
    const [useDDeathData, setUseDDeathData] = useState(0);

    const {data} = ApiData();

   const {hospitalData} = ApiHospital();

    function GetDataApi() {
        if (data !== null && hospitalData !== null) {
            // filter 1 dag op deze manier: const filteredData = data.filter((item => item.Date_of_statistics === '2020-12-17'));

            let startDate = '2020-12-16'; // Start particuliere testen
            let endDate = '2021-01-06'; // Einde particuliere testen


            let filteredData = data.filter((obj) => {
                return obj.Date_of_statistics >= startDate && obj.Date_of_statistics <= endDate;
            });

             let hospitalFilteredData = hospitalData.filter((obj) => {
                return obj.Date_of_publication >= startDate && obj.Date_of_publication <= endDate;
             });

             let SickData = useSickData;
             let deathData = useDeathData;
            let testedResult = useTestedResult;
            let positiveData = usePositiveData;

            for (const {Tested_with_result, Tested_positive} of filteredData) {
                testedResult += Tested_with_result;
                positiveData += Tested_positive;
            }

            for (const {Hospital_admission, Deceased} of hospitalFilteredData) {
                 SickData += Hospital_admission;
                 deathData += Deceased;
             }
             setUseSickData(SickData);
             setUseDeathData(deathData);
            setUseTestedResult(testedResult);
            setUsePositiveData(positiveData);

                // vrij test data
            let beginDate = '2020-01-07'; // Start vrij testen
            let eindDate = '2021-01-28'; // Einde eind testen

            let VrijTestData = data.filter((obj) => {
                return obj.Date_of_statistics >= beginDate && obj.Date_of_statistics <= eindDate;
            });

            let hospitalVrijTestData = hospitalData.filter((obj) => {
                return obj.Date_of_publication >= beginDate && obj.Date_of_publication <= eindDate;
            });

            let ssickData = useSSickData;
            let ddeathData = useDDeathData;
            let ttestedResult = useTTestedResult;
            let ppositiveData = usePPositiveData;

            for (const {Tested_with_result, Tested_positive} of VrijTestData) {
                ttestedResult += Tested_with_result;
                ppositiveData += Tested_positive;
            }

            for (const {Hospital_admission, Deceased} of hospitalVrijTestData) {
                ssickData += Hospital_admission;
                ddeathData += Deceased;
            }
            setUseSSickData(ssickData);
            setUseDDeathData(ddeathData);
            setUseTTestedResult(ttestedResult);
            setUsePPositiveData(ppositiveData);
        }
    }


    useEffect(()=> {
        GetDataApi();
    }, [data && hospitalData]);

    // && hospitalData

    return(



        <ScrollView>
            <View style={{marginTop: -15,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-start', }}>
                <View style={styles.View}>
                    <Text style={{color: '#B9345E', fontSize: 25, fontWeight: 'bold'}}>Het vershil tussen vrij testen en particulier testen.</Text>
                    <Text style={{marginBottom: 10, fontSize: 16, fontWeight: 'bold', left: 0, textAlign: 'left'}}>Grafiek postive testen van December/Januari</Text>
                    <LineChart
                        data={{
                            labels: ["16-23", "23-30", "30-06", "07-14", "14-21", "21-28"],
                            datasets: [
                                {
                                    data: [20, 40, 50, 0, 0, 0],
                                    strokeWidth: 2,
                                    color: (opacity = 1) => `#B9345E`, // optional
                                },
                                {
                                    data: [0, 0, 0, 40, 60, 50],
                                    strokeWidth: 2,
                                    color: (opacity = 1) => `white`, // optional
                                }
                            ],
                            legend: ['Particulier testen', 'Vrij testen']
                        }}
                        width={Dimensions.get("window").width - 40} // from react-native
                        height={220}
                        yAxisSuffix="P"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#facc00",
                            backgroundGradientFrom: "#facc00",
                            backgroundGradientTo: "#facc00",
                            decimalPlaces: 3, // optional, defaults to 2dp
                            color: (opacity = 1) => `black`,
                            labelColor: (opacity = 1) => `black`,
                            style: {
                                borderRadius: 4
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "3",
                                stroke: "#B9345E"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 5,
                            borderRadius: 4,
                            borderTopWidth: 2,
                            paddingTop: 10,
                            borderTopColor: '#e5e5e5',
                            color: '#B9345E',

                        }}
                    />
                    <Text style={{marginTop: 10, color: '#B9345E', fontSize: 25, fontWeight: 'bold'}}>Partucilier testen</Text>
                    <Text style={{margin: 0,fontSize: 18, fontWeight: 'bold'}}> Datum van 16 December tot 06 Januari. </Text>
                    <Text style={{fontSize: 16}}> Aantal testen: {useTestedResult ? useTestedResult : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Postive testen: {usePositiveData ? usePositiveData : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Ziekenhuis opnames: {useSickData ? useSickData : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Overlden: {useDeathData ? useDeathData : 'Aan het laden...'} </Text>
                    <Text style={{marginTop: 20, borderTopWidth: 2, paddingTop: 5, borderTopColor: '#e5e5e5', color: '#B9345E', fontSize: 25, fontWeight: 'bold'}}>Vrij testen</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Datum van 07 Januari tot 28 Januari. </Text>
                    <Text style={{fontSize: 16}}> Aantal testen: {useTTestedResult ? useTTestedResult : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Postive testen: {usePPositiveData ? usePPositiveData : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Ziekenhuis opnames: {useSSickData ? useSSickData : 'Aan het laden...'} </Text>
                    <Text style={{fontSize: 16}}> Overleden: {useDDeathData ? useDDeathData : 'Aan het laden...'} </Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    View: {
        marginVertical: 25,
        width: 95 + '%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
// 1 juni iedereen mag testen
// 7 januari vrij testen
