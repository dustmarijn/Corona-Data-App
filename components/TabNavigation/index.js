import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../Router/HomeScreen";
import ProfileScreen from "../Router/ProfileScreen";
import SettingsScreen from "../Router/SettingsScreen";
import ProvinceStatisticScreen from "../Router/ProvinceStatisticScreen";
import ProvinceScreen from "../Router/ProvinceScreen";
import DifferenceTestingScreen from "../Router/DifferenceTestingScreen";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            activeColor="#B9345E"
            inactiveColor="#fff"
            barStyle={{ backgroundColor: '#facc00' }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}
            >{props => <HomeScreen {...props} defaultScreen={'Home'}/> }</Tab.Screen>
            <Tab.Screen
            name="Province"
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="map-outline" color={color} size={25} />
                ),
            }}
            >{props => <HomeScreen {...props} defaultScreen={'Province'}/> }</Tab.Screen>
            <Tab.Screen
                name="Profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={25} />
                    ),
                }}
            >{props => <HomeScreen {...props} defaultScreen={'Profile'}/> }</Tab.Screen>
        </Tab.Navigator>
    );
}
