import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ScrollView} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ProvinceScreen({navigation}){
    const [defaultProvince, setDefaultProvince] = useState('Algemeen');
    return(
        <View>
            <DropDownPicker
                items={[ {value : "Algemeen", label : "Algemeen"},{value: "Groningen", label : "Groningen"}, {value:"Friesland", label : "Friesland"}, {value:"Drenthe", label : "Drenthe"}, {value:"Overijssel", label : "Overijssel"}, {value:"Flevoland", label : "Flevoland"}, {value:"Noord-Holland", label : "Noord-Holland"}, {value:"Zuid-Holland", label : "Zuid-Holland"}, {value:"Gelderland", label : "Gelderland"}, {value:"Utrecht", label : "Utrecht"}, {value:"Noord-Brabant", label : "Noord-Brabant"}, {value:"Limburg", label : "Limburg"}, {value:"Zeeland", label : "Zeeland"}]}
                multiple={false}
                min={0}
                max={13}
                defaultValue={defaultProvince}
                containerStyle={{height: 40}}
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

    }
})
