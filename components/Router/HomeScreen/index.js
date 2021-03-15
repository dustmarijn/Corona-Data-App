import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import DifferenceTestingScreen from '../DifferenceTestingScreen';
import ProvinceScreen from '../ProvinceScreen';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';
import ProvinceStatisticScreen from '../ProvinceStatisticScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Home = ({navigation}) => {
    return (
        <View>
            <Button title={'Ga naar difference testing screen'} onPress={() => navigation.navigate('Difference Testing Screen')}/>
            <Button title={'Ga naar province statics screen'} onPress={() => navigation.navigate('Province Statics Screen')}/>
        </View>
    )
}

export default function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Province" component={ProvinceScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Difference Testing Screen" component={DifferenceTestingScreen}/>
            <Stack.Screen name="Province Statics Screen" component={ProvinceStatisticScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}
