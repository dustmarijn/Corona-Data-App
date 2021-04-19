import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDown from '../ProvinceScreen/DropDown';
import Chart from '../ProvinceScreen/Chart';
import Stats from '../ProvinceScreen/Stats';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProvinceScreen() {
    const [defaultProvince, setDefaultProvince] = useState('Algemeen');
    return (
        <ScrollView>
            <View style={{
                marginTop: -15,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-start',
            }}>
                <View style={styles.View}>
                    <Text style={{color: '#B9345E', fontSize: 25, fontWeight: 'bold'}}>De corona gegevens per province</Text>
                    <Text style={{marginBottom: 10, fontSize: 16, fontWeight: 'bold', left: 0, textAlign: 'left'}}>Grafiek corona gegevens per provincie.</Text>
                    <View style={{
                        borderTopWidth: 2,
                         paddingTop: 10,
                         borderTopColor: '#e5e5e5',
                         color: '#B9345E',}}
                    />
                    <Chart defaultProvince={defaultProvince} setDefaultProvince={setDefaultProvince}/>
                    <DropDown defaultProvince={defaultProvince} setDefaultProvince={setDefaultProvince}/>
                    <Stats defaultProvince={defaultProvince} setDefaultProvince={setDefaultProvince}/>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    View: {
        marginVertical: 25,
        width: 95 + '%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
