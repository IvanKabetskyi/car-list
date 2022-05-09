import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'react-native-gesture-handler';

import {persistedStore, store} from './src/store';

import Router from './src/router';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <View style={styles.wrapper}>
                    <Router />
                </View>
            </PersistGate>
        </Provider>
    );
};

export default App;
