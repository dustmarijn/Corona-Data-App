import React from 'react';
import {Text, StyleSheet, View, Image, Alert} from 'react-native';

import Button from '../../Button/';
import UserApi from '../../Api/UserApi';
import LoginScreen from '../LoginScreen';

export default function ProfileScreen({navigation}) {
    const {user, Logout} = UserApi();

    return(
        <View>
            {user !== null ?
                <>
                    <Text style={styles.PageTitle}>Mijn Profiel</Text>
                    <View style={styles.ImgContainer}>
                        <Image
                            style={styles.UserImg}
                            source={require('./user.png')}>
                        </Image>
                    </View>
                    <View style={styles.UserData}>
                        <Text style={styles.UserName}>{user ? user.name : 'Not found'}</Text>
                        <Text style={styles.UserEmail}>{user ? user.email : 'Not found'}</Text>
                        <View style={styles.ButtonGroup}>
                            <Button title={'Profiel bewerken'} style={styles.btnLogout} onPress={() => Alert.alert('Niet beschikbaar!')}/>
                            <Button title={'Uitloggen'} style={styles.btnLogout} onPress={() => Logout()}/>
                        </View>
                        <View style={styles.Line}/>
                    </View>

                    <View style={styles.UserDashboard}>
                        <Text style={styles.UserDashboardText}>Bekijk hier jouw eigen corona overzicht:</Text>
                        <View style={styles.DashboardButten}>
                            <Button title="Jouw corona overzicht"
                                    color="#841584"
                                    onPress={() => navigation.navigate('Dashboard')}
                            />
                        </View>
                    </View>
                </>
            :
                <LoginScreen/>
            }
        </View>
    )
};



const styles = StyleSheet.create({
    PageTitle: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 25,
    },

    ImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    UserImg: {
        width: 150,
        height: 150,
    },

    UserName: {
        fontWeight: 'bold',
        fontSize: 30,
    },

    UserEmail: {
        fontSize: 20,
    },

    UserData: {
        padding: 20,
    },

    btnLogout: {
        width: 'auto',
        padding: 10,
        backgroundColor: '#f00a7f',
        color: '#fff',
        borderRadius: 4,
        fontSize: 16,
    },

    ButtonGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 0,
        marginTop: 5,
        justifyContent: 'space-between',
        width: 250,
    },

    Line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 10,
    },

    UserDashboard: {
        padding: 20,
    },

    UserDashboardText: {
        fontSize: 20,
    },

    DashboardButten: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 5,
    },


})
