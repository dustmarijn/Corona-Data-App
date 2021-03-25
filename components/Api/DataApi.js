import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function RivmData() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://data.rivm.nl/covid-19/COVID-19_uitgevoerde_testen.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [data]);

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View key={index}>
                            <Text>{item.Date_of_report}</Text>
                            <Text>{item.Tested_positive}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};
