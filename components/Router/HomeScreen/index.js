import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from '../../Button';

import DifferenceTestingScreen from '../DifferenceTestingScreen';
import ProvinceScreen from '../ProvinceScreen';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';
import ProvinceStatisticScreen from '../ProvinceStatisticScreen';
import DashboardScreen from '../DashboardScreen';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
    const [data, setData] = useState([]);

    return (
        <View style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'flex-start',
        }}>
            <Image style={{width: '100%', height: 200, position: 'absolute'}} source={require('./img.png')} />
            <View style={{width: '100%', height: 200, position: 'absolute', tintColor: 'gray', backgroundColor: 'rgba(71,167,238, 0.5)'}}/>
            <View style={{position: 'absolute', top: 50, width: '100%', display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>Corona</Text>
                <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>Data</Text>
                <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>App</Text>
            </View>
            <View style={{
                position: 'relative',
                marginTop: 150,
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: 'auto',
                width: '95%',
                paddingHorizontal: 15,
                backgroundColor: '#fff',
                borderRadius: 4,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    width: '100%',
                    marginTop: 30,
                    color: '#B9345E',
                }}>Overzicht provincies</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    width: '100%',
                    marginTop: 0,
                    color: '#000',
                }}>Bekijk het overzicht over de Corona data binnen de Nederlandse provincies.</Text>
                <Button onPress={() => navigation.navigate('Province')} style={{
                    width: '90%',
                    paddingHorizontal: 30,
                    height: 75,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderTopWidth: 2,
                    borderBottomColor: '#e5e5e5',
                    borderTopColor: '#e5e5e5',
                    marginTop: 15,
                    marginBottom: 15,
                }}>
                    <Button style={{
                        borderRadius: 50,
                        backgroundColor: '#00a7db',
                        height: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        marginRight: 10,
                    }}>
                        <MaterialCommunityIcons name="map-outline" size={30} color="#fff"/>
                    </Button>
                    <Text style={{fontSize: 16, width: '95%'}}>Ga naar het overzicht van de Corona data in de provincies</Text>
                </Button>
            </View>
            <View style={{
                position: 'relative',
                marginTop: 25,
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: 'auto',
                width: '95%',
                paddingHorizontal: 15,
                backgroundColor: '#fff',
                borderRadius: 4,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    width: '100%',
                    marginTop: 30,
                    color: '#B9345E',
                }}>Verschil testen</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    width: '100%',
                    marginTop: 0,
                    color: '#000',
                }}>Bekijk het verschil tussen testen bij klachten en de invoering van het vrije testen.</Text>
                <Button onPress={() => navigation.navigate('Difference Testing Screen')} style={{
                    width: '90%',
                    paddingHorizontal: 30,
                    height: 75,
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderTopWidth: 2,
                    borderBottomColor: '#e5e5e5',
                    borderTopColor: '#e5e5e5',
                    marginTop: 15,
                    marginBottom: 15,
                }}>
                    <Button style={{
                        borderRadius: 50,
                        backgroundColor: '#00db50',
                        height: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        marginRight: 10,
                    }}>
                        <MaterialCommunityIcons name="vector-difference" size={30} color="#fff"/>
                    </Button>
                    <Text style={{fontSize: 16, width: '95%'}}>Ga naar het overzicht van de verschillen.</Text>
                </Button>
            </View>
        </View>
    );
};

const Title = () => {
    const title = ['Corona', 'Data', 'App'];

    return (
        <View style={styles.title}>
            {title.map((item, index) => {
                return (
                    <Text key={index} style={styles.item}>{item}</Text>
                );
            })}
        </View>
    );
};

export default function HomeScreen({defaultScreen}) {
    const options = {
        headerLayoutPreset: 'center',
        headerStyle: {backgroundColor: '#facc00'},
        headerTitleBackgroundColor: '#B9345E',
        headerTintColor: '#B9345E',
        headerTitle: <Title/>,
        headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
    };
    return (
        <Stack.Navigator initialRouteName={defaultScreen}
                         screenOptions={{headerTitleAlign: 'center', animationEnabled: false}}>
            <Stack.Screen options={options} name="Home" component={Home}/>
            <Stack.Screen options={options} name="Province" component={ProvinceScreen}/>
            <Stack.Screen options={options} name="Profile" component={ProfileScreen}/>
            <Stack.Screen options={options} name="Difference Testing Screen" component={DifferenceTestingScreen}/>
            <Stack.Screen options={options} name="Province Statics Screen" component={ProvinceStatisticScreen}/>
            <Stack.Screen options={options} name="Settings" component={SettingsScreen}/>
            <Stack.Screen options={options} name="Dashboard" component={DashboardScreen}/>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    title: {
        position: 'relative',
        top: 0,
        width: 100 + '%',
        backgroundColor: '#facc00',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 'auto',
        zIndex: 1000,
        marginLeft: 0,
    },
    item: {
        position: 'relative',
        width: 'auto',
        padding: 5,
        backgroundColor: '#B9345E',
        color: '#fff',
        margin: 1.5,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        position: 'relative',
        backgroundColor: '#00a7db',
        color: '#fff',
        fontSize: 16,
        width: 'auto',
        borderRadius: 4,
        padding: 10,
        margin: 10,
    },
});