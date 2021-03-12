import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../Router/HomeScreen";
import ProfileScreen from "../Router/ProfileScreen";
import SettingsScreen from "../Router/SettingsScreen";
import DifferenceTestingScreen from "../Router/DifferenceTestingScreen";
import ProvinceScreen from "../Router/ProvinceScreen";



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
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="DifferenceTesting"
                component={DifferenceTestingScreen}
                options={{
                    tabBarLabel: 'DifferenceTesting',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
            name="Province"
            component={ProvinceScreen}
            options={{
                tabBarLabel: 'Province',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="map-outline" color={color} size={26} />
                ),
            }}
        />

        </Tab.Navigator>
    );
}
