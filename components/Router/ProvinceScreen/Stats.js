import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ApiData from '../../Api/ApiData';
import ApiHospital from '../../Api/ApiHospital';

export default function Stats({defaultProvince}) {

    const Infections = 10;
    const Hospitalized = 2;
    const Deaths = 0;
    const LastDate = '04-02-2019';
    var today = new Date();
    var currdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var befdate = today.getDate() + '-' + (today.getMonth()) + '-' + today.getFullYear();

    const [useContaminationData, setUseContaminationData] = useState(0);
    const [useHospitalAdmisionData, setUseHospitalAdmisionData] = useState(0);
    const [useDeceasedData, setUseDeceasedData] = useState(0);
    const [useLastDateData, setUseLastDateData] = useState(0);
    const [filteredRegionData, setFilteredRegionData] = useState([]);

    const {data} = ApiData(); // Uitgevoerde testen met resultaten data
    const {hospitalData} = ApiHospital(); // Data over de ziekenhuizen

    function SetApiData(){
        const filteredData = data.filter((obj) => {
            return obj.Date_of_statistics >= befdate && obj.Date_of_statistics <= currdate;
        });
        const hospitalFilteredData = hospitalData.filter((obj) => {
            return obj.Date_of_publication >= befdate && obj.Date_of_publication <= currdate;
        });



        useEffect(() => {
            setFilteredRegionData([]);
            data.map((obj) => {
                if(obj.Security_region_name === defaultProvince !== 'Friesland' ? defaultProvince : 'Fryslân') {
                    filteredRegionData.push(obj);
                }
            });
        }, [defaultProvince]);


        if (filteredRegionData){
            if (data && hospitalData) {


                let ContaminationData = useContaminationData;
                let HospitalAdmisionData = useHospitalAdmisionData;
                let DeceasedData = useDeceasedData;
                let LastDateData = useLastDateData;

                for (const {Tested_with_result, Tested_positive} of filteredData) {
                    testedResult += Tested_with_result;
                    positiveData += Tested_positive;
                }

                for (const {Hospital_admission, Deceased} of hospitalFilteredData) {
                    SickData += Hospital_admission;
                    deathData += Deceased;
                }
                useContaminationData(SickData);
                useDeceasedData(deathData);
                setUseTestedResult(testedResult);
                setUsePositiveData(positiveData);

            }
        }
    }

    return (
        <View style={{padding: 20, marginTop: "100%"}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>{defaultProvince}</Text>
            <Text style={styles.text}>Besmettingen: {useContaminationData ? useContaminationData : 'Aan het laden...'}</Text>
            <Text style={styles.text}>Ziekenhuis opnames: {useHospitalAdmisionData ? useHospitalAdmisionData : 'Aan het laden...'}</Text>
            <Text style={styles.text}>Overleden: {useDeceasedData ? useDeceasedData : 'Aan het laden...'}</Text>
            <Text style={styles.text}>Datum laatste cijfers: {useLastDateData ? useLastDateData : 'Aan het laden...'}</Text>
            <Text style={styles.text}>Datum: {currdate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: '#00a7d0',
        marginBottom: 10,
    },
});