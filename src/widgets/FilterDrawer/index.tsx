import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';

import Form from './componetns/Form';
import CloseButton from './componetns/CloseButton';

import styles from './styles';

const FilterDrawer: React.FC<DrawerContentComponentProps> = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar />
            <CloseButton />
            <Form />
        </SafeAreaView>
    );
};

export default FilterDrawer;
