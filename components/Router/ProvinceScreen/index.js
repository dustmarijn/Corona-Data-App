import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDown from '../ProvinceScreen/DropDown';
import Chart from '../ProvinceScreen/Chart';

export default function ProvinceScreen({navigation}){
    return(
        <View>
            <DropDown/>
            <Chart/>
        </View>
    )
}
const styles = StyleSheet.create({

})