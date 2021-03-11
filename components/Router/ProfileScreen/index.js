import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

export default function ProfileScreen({navigation }) {
    return (
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>Profiel</Text>
            <Button
                color="#00a7d0"
                title={`Go back to Home`}
                textColor={'red'}
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});
