/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import 'react-native-gesture-handler';


// Components
import TabNavigation from './components/TabNavigation';
import TopItem from './components/TopItem';
import UserProvider from './components/Providers/UserProvider';
import DataApiProvider from './components/Providers/DataApiProvider';
import HospitalApiProvider from './components/Providers/HospitalApiProvider';

const App: () => React$Node = () => {

    return (
        <HospitalApiProvider>
            <DataApiProvider>
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
            </DataApiProvider>
        </HospitalApiProvider>
    );
};

export default App;
