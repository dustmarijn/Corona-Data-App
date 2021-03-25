/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';


// Components
import TabNavigation from './components/TabNavigation';
import TopItem from './components/TopItem';
import UserProvider from './components/Providers/UserProvider';

const App: () => React$Node = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <StatusBar translucent backgroundColor={'#facc00'}/>
                <TopItem/>
                <SafeAreaView>
                    <ScrollView style={styles.scrollView}>

                    </ScrollView>
                </SafeAreaView>
                <TabNavigation/>
            </NavigationContainer>
        </UserProvider>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        position: 'relative',
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
