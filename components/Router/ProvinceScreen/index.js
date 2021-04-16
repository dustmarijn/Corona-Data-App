import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import DropDown from '../ProvinceScreen/DropDown';
import Chart from '../ProvinceScreen/Chart';
import Stats from '../ProvinceScreen/Stats';
import {ScrollView} from "react-native-gesture-handler";

export default function ProvinceScreen(){
    const [defaultProvince, setDefaultProvince] = useState('Groningen');
    return(
        <ScrollView>
            <Chart defaultProvince={defaultProvince} setDefaultProvince={ setDefaultProvince}/>
            <DropDown defaultProvince={defaultProvince} setDefaultProvince={ setDefaultProvince}/>
            <Stats defaultProvince={defaultProvince} setDefaultProvince={ setDefaultProvince}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

})
