import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ScrollView} from "react-native-gesture-handler";

export default function ProvinceScreen({navigation}){
    const ProvinceList =["Algemeen", "Groningen", "Friesland", "Drenthe", "Overijssel", "Flevoland", "Noord-Holland", "Zuid-Holland", "Gelderland", "Utrecht", "Noord-Brabant", "Limburg", "Zeeland"];
    return(
        <ScrollView>
            {ProvinceList.map((province, index) =>{
                return (
                    <View key={index}>
                        <Text style={styles.text}>
                            {province}
                            <Text style={styles.Icon}><MaterialCommunityIcons name="arrow-right" size={26}/></Text>
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    Icon:{

    }
})