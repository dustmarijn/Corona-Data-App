import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import DropDown from '../ProvinceScreen/DropDown';
import Chart from '../ProvinceScreen/Chart';
import Stats from '../ProvinceScreen/Stats';

export default function ProvinceScreen({navigation}){
    return(
        <ScrollView>
            <DropDown/>
            <Chart/>
            <Stats/>
        </ScrollView>
    )
}