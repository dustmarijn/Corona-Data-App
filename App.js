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
import DataApiProvider from './components/Providers/DataApiProvider';
import HospitalApiProvider from './components/Providers/HospitalApiProvider';

const App: () => React$Node = () => {

    return (
        <>
            <DataApiProvider>
                <HospitalApiProvider>
                    <UserProvider>
                        <StatusBar translucent backgroundColor={'#facc00'}/>
                        <TopItem/>
                        <SafeAreaView>
                            <ScrollView>

                            </ScrollView>
                        </SafeAreaView>
                        <TabNavigation/>
                    </UserProvider>
                </HospitalApiProvider>
            </DataApiProvider>
        </>
    );
};

export default App;
