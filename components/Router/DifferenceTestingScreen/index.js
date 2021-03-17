import React  from 'react';
import {Text, Button, View} from 'react-native';

export default async function DifferenceTestingScreen({navigation }) {

        const response = await fetch('https://data.rivm.nl/covid-19/COVID-19_uitgevoerde_testen.json');
        const data = await response.json();
        this.setState({ issues: data, loading: false });


    return (
        <View style={{padding: 20}}>
           <Text style={{color: '#00a7d0', fontSize: 30}} >Het vershil tussen vrij testen en particulier testen.</Text>
            renderItem={({ data, index }) => (
                <Text key={index}>{data.Tested_with_result}</Text>
            )}
        </View>

    )
}
