import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RivmData from '../../Api/ApiData';

export default function Stats({defaultProvince}) {

    const Infections = 10;
    const Hospitalized = 2;
    const Deaths = 0;
    const LastDate = '04-02-2019';
    //const Data = <RivmData/>;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    return (
        <View style={{marginTop: "70%"}}>
            {/*{Data}*/}
            <Text style={{marginTop: 0, color: '#B9345E', fontSize: 25, fontWeight: 'bold'}}>{defaultProvince}</Text>
            <Text style={{margin: 0,fontSize: 18, fontWeight: 'bold'}}> Gegevens van {defaultProvince}.</Text>
            <Text style={{fontSize: 16, marginLeft: 4}}>Besmettingen: {Infections}</Text>
            <Text style={{fontSize: 16, marginLeft: 4}}>Ziekenhuis opnames: {Hospitalized}</Text>
            <Text style={{fontSize: 16, marginLeft: 4}}>Overleden: {Deaths}</Text>
            <Text style={{fontSize: 16, marginLeft: 4}}>Datum laatste cijfers: {LastDate}</Text>
            <Text style={{fontSize: 16, marginLeft: 4}}>Datum: {date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});
