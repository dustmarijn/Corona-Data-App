import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ScrollView} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import LineChart from "react-native-chart-kit";

export default function ProvinceScreen({navigation}){
    const [defaultProvince, setDefaultProvince] = useState('Algemeen');
    const BaseColor= "#B9345E";
    return(
        <View>
            <DropDownPicker
                items={[ {value : "Algemeen", label : "Algemeen"},{value: "Groningen", label : "Groningen"}, {value:"Friesland", label : "Friesland"}, {value:"Drenthe", label : "Drenthe"}, {value:"Overijssel", label : "Overijssel"}, {value:"Flevoland", label : "Flevoland"}, {value:"Noord-Holland", label : "Noord-Holland"}, {value:"Zuid-Holland", label : "Zuid-Holland"}, {value:"Gelderland", label : "Gelderland"}, {value:"Utrecht", label : "Utrecht"}, {value:"Noord-Brabant", label : "Noord-Brabant"}, {value:"Limburg", label : "Limburg"}, {value:"Zeeland", label : "Zeeland"}]}
                multiple={false}
                min={0}
                max={12}
                defaultValue={defaultProvince}
                containerStyle={styles.dropdown}
                dropDownStyle={{backgroundColor:BaseColor}}
                onChangeItem={item => setDefaultProvince(item.value)}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    dropdown:{
        width: 120,
        height: 40
    }
})
