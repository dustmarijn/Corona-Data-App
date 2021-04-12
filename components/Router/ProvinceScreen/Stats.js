import {React, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DataApi from '../../Api/DataApi';

export default function Stats({defaultProvince}) {

    const Infections = 10;
    const Hospitalized = 2;
    const Deaths = 0;
    const LastDate = '04-02-2019';
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const [CityDataApi, setCityDataApi] = useState('');
    useEffect(
        ()=> {
            DataApi((data) =>
                setDataApi(data));
        }
    );
    return (
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>{defaultProvince}</Text>
            <Text style={styles.text}>Besmettingen: {Infections}</Text>
            <Text style={styles.text}>Ziekenhuis opnames: {Hospitalized}</Text>
            <Text style={styles.text}>Overleden: {Deaths}</Text>
            <Text style={styles.text}>Datum laatste cijfers: {LastDate}</Text>
            <Text style={styles.text}>Datum: {date}</Text>
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
