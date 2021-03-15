import React from 'react';
import {Text, Button, View} from 'react-native';

export default function DifferenceTestingScreen({navigation }) {
    return (
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>DifferenceTestingScreen</Text>
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
