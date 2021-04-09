import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import DataApi from '../../Api/DataApi';
import HospitalApi from '../../Api/HospitalApi';
import {set} from 'react-native-reanimated';

import ApiData from '../../Api/ApiData';
import ApiHospital from '../../Api/ApiHospital';



export default  function DifferenceTestingScreen({navigation }) {

    const [useTestData, setUseTestData] = useState('hallo');
    const [filteredData, setFilteredData] = useState('Hallo');
    const [usePositiveData, setUsePositiveData] = useState(0);
    const [useTestedResult, setUseTestedResult] = useState(0);
    const [useZiekenData, setUseZiekenData] = useState(0);
    const [useDeathData, setUseDeathData] = useState(0);

    const {data} = ApiData();

    const {hospitalData} = ApiHospital();

    function GetDataApi() {
        setUseTestedResult(0);
        setUsePositiveData(0);
        if (data !== null && hospitalData !== null) {

            let startDate = '2020-12-16'; // Start particuliere testen
            let endDate = '2021-01-06'; // Einde particuliere testen

            let filteredData = data.filter((obj) => {
                return obj.Date_of_statistics >= startDate && obj.Date_of_statistics <= endDate;
            });

            let hospitalFilteredData = hospitalData.filter((obj) => {
                return obj.Date_of_publication >= startDate && obj.Date_of_publication <= endDate;
            });

            let ziekenData = useZiekenData;
            let deathData = useDeathData;

            // filter 1 dag op deze manier: const filteredData = data.filter((item => item.Date_of_statistics === '2020-12-17'));
            let testedResult = useTestedResult;
            let positiveData = usePositiveData;

            for (const {Tested_with_result, Tested_positive} of filteredData) {
                testedResult += Tested_with_result;
                positiveData += Tested_positive;
            }

            for (const {Hospital_admission, Deceased} of hospitalFilteredData) {
                ziekenData += Hospital_admission;
                deathData += Deceased;
            }
            setUseZiekenData(ziekenData);
            setUseDeathData(deathData);
            setUseTestedResult(testedResult);
            setUsePositiveData(positiveData);
        }
    }

    useEffect(()=> {
        GetDataApi();
    }, [data]);




  return(
        <ScrollView style={{padding: 20}}>

            <Text style={{color: '#00a7d0', fontSize: 30}}>Het vershil tussen vrij testen en particulier testen.</Text>
            <Text>Grafiek postive testen van December/Januari</Text>
            <LineChart
                data={{
                    labels: ["16-23", "23-30", "30-06", "07-14", "14-21", "21-28"],
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
            <Text  style={{fontSize: 15}}> Datum van 16 December tot 06 Januari. </Text>
            <Text> Aantal testen: {useTestedResult ? useTestedResult : '0'} </Text>
            <Text> Postive testen: {usePositiveData ? usePositiveData : '0'} </Text>
            <Text> Ziekenhuis opnames: {useZiekenData ? useZiekenData : '0'} </Text>
            <Text> Overlden: {useDeathData ? useDeathData : '0'} </Text>

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