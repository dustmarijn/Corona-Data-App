import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TopBar() {
    const title = ['Corona', 'Data', 'App'];
    return (
        <View style={styles.title}>
            {title.map((item, index) => {
                return (
                    <Text key={index} style={styles.item}>{item}</Text>
                )
            })}
        </View>
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
    }
})
