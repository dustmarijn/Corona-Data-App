import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RivmData from '../../Api/DataApi';

export default function Stats() {

    const Province = 'Overijssel';
    const Infections = 10;
    const Hospitalized = 2;
    const Deaths = 0;
    const LastDate = '04-02-2019';
    const Data = <RivmData/>;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    return (
        <View style={{padding: 20}}>
            {Data}
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>{Province}</Text>
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