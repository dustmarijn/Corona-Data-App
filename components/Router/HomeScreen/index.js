import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, RefreshControl} from 'react-native';
import Button from '../../Button';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeScreen({navigation}) {
    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    size={'large'}
                    title={''}
                    tintColor={'#000'}
                    progressViewOffset={15}
                    progressBackgroundColor={'#facc00'}
                    colors={['#B9345E', '#fff']}
                />
            }>
            <View style={styles.View}>
                <Image style={styles.Img} source={require('./img.png')} />
                <View style={styles.OverlayImg}/>
                <View style={styles.ImgTitle}>
                    <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>Corona</Text>
                    <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>Data</Text>
                    <Text style={{width: 'auto', padding: 5, backgroundColor: '#B9345E', color: '#fff', fontSize: 30, borderRadius: 4, marginHorizontal: 3}}>App</Text>
                    <Text style={{position: 'absolute', bottom: -65, color: '#fff', fontSize: 20, width: 300, textAlign: 'center'}}>De app voor het overzicht van alle besmettingen</Text>
                </View>
                <View style={styles.Box}>
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
                    <Button onPress={() => navigation.navigate('Province')} style={styles.Link}>
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
                            <MaterialCommunityIcons onPress={() => navigation.navigate('Province')} name="map-outline" size={30} color="#fff"/>
                        </Button>
                        <Text style={{fontSize: 16, width: '95%'}}>Ga naar het overzicht van de Corona data in de provincies</Text>
                    </Button>
                </View>
                <View style={styles.Box}>
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
                    <Button onPress={() => navigation.navigate('Difference Testing Screen')} style={styles.Link}>
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
                            <MaterialCommunityIcons onPress={() => navigation.navigate('Difference Testing Screen')}  name="vector-difference" size={30} color="#fff"/>
                        </Button>
                        <Text style={{fontSize: 16, width: '95%'}}>Ga naar het overzicht van de verschillen.</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    View: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    Img: {
        width: '100%',
        height: 200,
        position: 'relative',
    },
    OverlayImg: {
        width: '100%',
        height: 200,
        position: 'absolute',
        tintColor: 'gray',
        backgroundColor: 'rgba(71,167,238, 0.5)'
    },
    ImgTitle: {
        position: 'absolute',
        top: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Box: {
        position: 'relative',
        marginVertical: 10,
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
    },
    Link: {
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
    }
});
