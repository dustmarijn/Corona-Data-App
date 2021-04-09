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

import 'react-native-gesture-handler';


// Components
import TabNavigation from './components/TabNavigation';
import TopItem from './components/TopItem';
import UserProvider from './components/Providers/UserProvider';

const App: () => React$Node = () => {

    return (
        <>
            <StatusBar translucent backgroundColor={'#facc00'}/>
            <TopItem/>
            <UserProvider>
                <SafeAreaView>
                    <ScrollView>

                    </ScrollView>
                </SafeAreaView>
                <TabNavigation/>
            </UserProvider>
        </>
    );
};

export default App;
