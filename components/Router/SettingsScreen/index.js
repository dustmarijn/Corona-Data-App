import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function SettingsScreen({navigation}) {
    const [name, setName] = useState('Maarten');
    return (
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30, marginBottom: 10}}>{name}</Text>
            <Button
                color="#00a7d0"
                title={`Verander naam`}
                textColor={'red'}
                onPress={() =>
                    setName(name === 'Maarten' ? 'Wessel' : 'Maarten')
                }
            />
        </View>
    )
}
