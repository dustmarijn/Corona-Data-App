import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { Provider} from 'react-redux';
import createStore from './createReduxStore';

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

    const [Date, Setdate] = useState([]);

    Setdate(data.item.Date_of_report);
    const store = createStore(Date)

    return (
        <Provider store={store}>
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
        </Provider>
    );
};
