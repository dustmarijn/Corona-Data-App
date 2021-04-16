import React from 'react';
import {Text, StyleSheet, View, Image, Alert} from 'react-native';

import Button from '../../Button/';
import UserApi from '../../Api/UserApi';
import LoginScreen from '../LoginScreen';

export default function ProfileScreen({navigation}) {
    const {user, Logout} = UserApi();

    return(
        <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <>
                {user !== null ?
                    <>
                        <View style={styles.View}>
                            <Text style={{marginTop: 10, color: '#B9345E', fontSize: 25, fontWeight: 'bold', textAlign: 'left', width: '95%'}}>Mijn Profiel</Text>
                            <View style={styles.ImgContainer}>
                                <Image
                                    style={styles.UserImg}
                                    source={require('./user.png')}>
                                </Image>
                                <View style={styles.UserData}>
                                    <Text style={styles.UserName}>{user ? user.name : 'Not found'}</Text>
                                    <Text style={styles.UserEmail}>{user ? user.email : 'Not found'}</Text>
                                </View>
                            </View>

                            <Text style={styles.UserDashboardText}>Kies een van de volgende opties bij je profiel:</Text>
                            <View style={{width: '95%'}}>
                                <Button title="Ga naar jouw corona overzicht"
                                        style={{
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
                                            paddingHorizontal: 20,
                                            paddingVertical: 10,
                                            marginRight: 5,
                                            marginTop: 15,
                                            width: 'auto',
                                        }}
                                        onPress={() => navigation.navigate('Dashboard')}
                                />
                            </View>
                        </View>
                        <View style={[styles.View, {marginTop: 0,}]}>
                            <Text style={{marginTop: 10, marginBottom: 10, color: '#B9345E', fontSize: 25, fontWeight: 'bold', textAlign: 'left', width: '95%'}}>Overig</Text>
                            <View style={styles.ButtonGroup}>
                                <Button title={'Profiel bewerken'} style={{
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
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    marginRight: 5,
                                }} onPress={() => Alert.alert('Niet beschikbaar!')}/>
                                <Button title={'Uitloggen'} style={{
                                    backgroundColor: '#e5e5e5',
                                    color: '#424242',
                                    borderRadius: 4,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    marginLeft: 5,
                                }} onPress={() => Logout()}/>
                            </View>
                        </View>
                    </>
                    :
                    <LoginScreen/>
                }
            </>
        </View>
    )
};



const styles = StyleSheet.create({
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
    },

    ImgContainer: {
        width: 95 + '%',
        marginTop: 15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row',
    },

    UserImg: {
        width: 75,
        height: 75,
    },

    UserName: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    UserEmail: {
        fontSize: 16,
    },

    UserData: {
        top: 0,
        marginLeft: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'center',
        flexDirection: 'column',
        height: 75,
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
        justifyContent: 'flex-start',
        width: 95 + '%',
    },

    UserDashboard: {
        padding: 20,
    },

    UserDashboardText: {
        width: '95%',
        fontSize: 16,
    },

    DashboardButten: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 5,
    },


})
