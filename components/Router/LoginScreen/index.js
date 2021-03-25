import React, {useEffect} from 'react';
import UserApi from '../../Api/UserApi';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import ProvinceScreen from '../ProvinceScreen';

export default function LoginScreen({navigation}) {
    const {user} = UserApi();

    return (
        <>
            {user === null
            ?
                <View style={styles.form}>
                    <Text style={styles.title}>Aanmelden</Text>
                    <TextInput style={styles.input} type={'email'} placeholder={'E-mail adres'}/>
                    <TextInput style={styles.input} type={'password'} placeholder={'Wachtwoord'}/>
                </View>
            :
                <ProvinceScreen/>
            }
        </>
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
        marginTop: 50,
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: '#aaa',
        padding: 0,
        paddingVertical: 10,
        marginVertical: 10,
    }
})
