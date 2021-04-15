import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function TopItem() {
    return (
        <View style={styles.title}/>
    )
}

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
        height: 50,
        zIndex: 1000,
    },
    item: {
        position: 'relative',
        width: 'auto',
        padding: 5,
        backgroundColor: '#B9345E',
        color: '#fff',
        margin: 1.5,
        borderRadius: 4,
        fontSize: 18,
        fontWeight: 'bold',
    },
})
