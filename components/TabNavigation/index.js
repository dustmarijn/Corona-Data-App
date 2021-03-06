import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from '../StackNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                activeColor="#B9345E"
                inactiveColor="#fff"
                barStyle={{ backgroundColor: '#facc00' }}
            >
                <Tab.Screen name="Home"
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={25} />
                                ),
                            }}
                >{props => <StackNavigation defaultRoute={'Home'}/>}</Tab.Screen>
                <Tab.Screen name="Province"
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="map-outline" color={color} size={25} />
                                ),
                            }}
                >{props => <StackNavigation defaultRoute={'Province'}/>}</Tab.Screen>
                <Tab.Screen name="Profile"
                            options={{
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={25} />
                                ),
                            }}
                >{props => <StackNavigation defaultRoute={'Profile'}/>}</Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
