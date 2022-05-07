import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';

import Router from './router';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const App: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <Router />
        </View>
    );
};

export default App;
