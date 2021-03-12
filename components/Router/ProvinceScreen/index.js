import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProvinceScreen({navigation}){
    const ProvinceList =["Algemeen", "Groningen", "Friesland", "Drenthe", "Overijssel", "Flevoland", "Noord-Holland", "Zuid-Holland", "Gelderland", "Utrecht", "Noord-Brabant", "Limburg", "Zeeland"];
    return(
        <View>
            {ProvinceList.map((province, index) =>{
                return (
                    <View key={index}>
                        <Text style={styles.text}>
                        {province}

                        </Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    }
})