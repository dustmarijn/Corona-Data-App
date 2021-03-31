import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
=======
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
>>>>>>> 94d5918903870167b17da71fca03e48cd2e81cd7
import DropDown from '../ProvinceScreen/DropDown';
import Chart from '../ProvinceScreen/Chart';
import Stats from '../ProvinceScreen/Stats';
import {ScrollView} from "react-native-gesture-handler";

export default function ProvinceScreen(){
    const [defaultProvince, setDefaultProvince] = useState('Algemeen');
    return(
        <ScrollView>
            <DropDown defaultProvince={defaultProvince} setDefaultProvince={ setDefaultProvince}/>
            <Chart defaultProvince={defaultProvince} setDefaultProvince={() => setDefaultProvince()}/>
            <Stats defaultProvince={defaultProvince} setDefaultProvince={() => setDefaultProvince()}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

})