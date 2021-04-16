import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// All screens will be imported down here.
import HomeScreen from '../Router/HomeScreen';
import ProvinceScreen from '../Router/ProvinceScreen';
import LoginScreen from '../Router/LoginScreen';
import ProfileScreen from '../Router/ProfileScreen';
import SettingsScreen from '../Router/SettingsScreen';
import DashboardScreen from '../Router/DashboardScreen';
import DifferenceTestingScreen from '../Router/DifferenceTestingScreen';


const Title = () => {
    const title = ['Corona', 'Data', 'App'];

    return (
        <View style={styles.title}>
            {title.map((item, index) => {
                return (
                    <Text key={index} style={styles.item}>{item}</Text>
                );
            })}
        </View>
    );
};

export default function StackNavigation({defaultRoute}) {

    const options = {
        headerLayoutPreset: 'center',
        headerStyle: {backgroundColor: '#facc00'},
        headerTitleBackgroundColor: '#B9345E',
        headerTintColor: '#B9345E',
        headerTitle: <Title/>,
        headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
        headerTitleAlign: 'center',
        animationEnabled: true,
    };

    return (
        <Stack.Navigator initialRouteName={defaultRoute ? defaultRoute : 'Home'}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Province"
                component={ProvinceScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Difference Testing Screen"
                component={DifferenceTestingScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={options}>
            </Stack.Screen>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={options}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

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
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 'auto',
    },
    item: {
        position: 'relative',
        width: 'auto',
        padding: 5,
        backgroundColor: '#B9345E',
        color: '#fff',
        margin: 1.5,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
