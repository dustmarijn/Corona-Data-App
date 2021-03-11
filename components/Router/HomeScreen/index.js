import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default function HomeScreen({navigation, route}) {
    return (
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>Welkom</Text>
            <Button
                color="#00a7d0"
                title="Ga naar je profiel"
                onPress={() =>
                    navigation.jumpTo('Profile')
                }
            />
        </View>
    )
}
