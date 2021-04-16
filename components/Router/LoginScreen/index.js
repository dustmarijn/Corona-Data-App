import React, {useEffect} from 'react';
import UserApi from '../../Api/UserApi';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Button from '../../Button';
import ProfileScreen from '../ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
    const {user, Login} = UserApi();

    return (
        <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {user === null
            ?
                <>
                    <View style={styles.View}>
                        <Text style={{marginTop: 10, color: '#B9345E', fontSize: 25, fontWeight: 'bold', textAlign: 'left', width: '95%'}}>Aanmelden</Text>
                        <Text style={{marginTop: 5, color: 'black', fontSize: 16, fontWeight: 'bold', textAlign: 'left', width: '95%'}}>E-mail adres:</Text>
                        <TextInput style={styles.input} type={'email'} placeholder={'E-mail adres'}/>
                        <Text style={{marginTop: 5, color: 'black', fontSize: 16, fontWeight: 'bold', textAlign: 'left', width: '95%'}}>Wachtwoord:</Text>
                        <TextInput style={styles.input} type={'password'} placeholder={'Wachtwoord'}/>
                        <View styles={styles.btns}>
                            <Button onPress={() => Login()} style={styles.btn} title={'Login'}/>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="alert" color={'#B9345E'} size={25} />
                    <Text style={{marginTop: 5, color: '#a5a5a5', fontSize: 14, textAlign: 'center', fontWeight: '100', width: '80%'}}>Op dit moment kan je nog niet inloggen. Wel kun je op de inlog knop klikken om te zien
                        hoe het profiel van een gebruiker er uit moet gaan zien.
                    </Text>
                </>
            :
                <ProfileScreen/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'left',
        marginTop: 50,
    },
    input: {
        width: '95%',
        backgroundColor: '#f6f5fb',
        borderColor: '#aaa',
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
    },
    btns: {
        marginTop: 25,
        width: Dimensions.get("window").width,
    },
    btn: {
        width: Dimensions.get("window").width - 60,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#00a7db',
        color: 'white',
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
    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
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
