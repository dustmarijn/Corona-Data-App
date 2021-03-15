import React from 'react';
import {Text, Button, StyleSheet, View, Image} from 'react-native';

export default function ProfileScreen({navigation}) {
    return(
        <View>
            <Text style={styles.PageTitle}>Mijn Profiel</Text>
            <View style={styles.ImgContainer}>
                             <Image
                                 style={styles.UserImg}
                                 source={require('./user.png')}>
                             </Image>
            </View>
                <View style={styles.UserData}>
                    <Text style={styles.UserName}>John Doe</Text>
                    <Text style={styles.UserEmail}>JohnDoe@mail.com</Text>
                        <View style={styles.ButtonGroup}>
                            <Button title="Profiel Bewerken" color="#841584"></Button>
                            <Button title="Uitloggen" color="#000"></Button>
                        </View>
                    <View style={styles.Line}/>
                </View>

                <View style={styles.UserDashboard}>
                    <Text style={styles.UserDashboardText}>Bekijk hier jouw eigen corona overzicht:</Text>
                        <View style={styles.DashboardButten}>
                            <Button title="Jouw corona overzicht"  color="#841584"/>
                        </View>
                </View>
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

    ButtonGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 0,
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

    },


})


