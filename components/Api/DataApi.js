import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function RivmData() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://data.rivm.nl/covid-19/COVID-19_uitgevoerde_testen.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item, index }) => (
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
