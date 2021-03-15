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

const Title = (navigation) => {
    const title = ['Corona', 'Data', 'App'];

    return (
        <View style={styles.title}>
            {title.map((item, index) => {
                return (
                    <Text key={index} style={styles.item}>{item}</Text>
                )
            })}
        </View>
    )
};

export default function HomeScreen({defaultScreen}) {
    const options = {headerLayoutPreset: 'center', headerStyle: {backgroundColor: '#facc00'}, headerTitleBackgroundColor: '#B9345E', headerTintColor: '#B9345E', headerTitle: <Title/>, headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold',} ,}
    return (
        <Stack.Navigator initialRouteName={defaultScreen} screenOptions={{headerTitleAlign: 'center', animationEnabled: false,}}>
            <Stack.Screen options={options} name="Home" component={Home}/>
            <Stack.Screen options={options} name="Province" component={ProvinceScreen}/>
            <Stack.Screen options={options} name="Profile" component={ProfileScreen}/>
            <Stack.Screen options={options} name="Difference Testing Screen" component={DifferenceTestingScreen}/>
            <Stack.Screen options={options} name="Province Statics Screen" component={ProvinceStatisticScreen}/>
            <Stack.Screen options={options} name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    title: {
        position: 'relative',
        top: 0,
        width: 100 + '%',
        backgroundColor: '#facc00',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 'auto',
        zIndex: 1000,
        marginLeft: 0,
    },
    item: {
        position: 'relative',
        width: 'auto',
        padding: 5,
        backgroundColor: '#B9345E',
        color: '#fff',
        margin: 1.5,
        borderRadius: 4,
        fontSize: 18,
        fontWeight: 'bold',
    },
})
