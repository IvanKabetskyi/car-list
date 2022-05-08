import React from 'react';
import {Button, Headline} from 'react-native-paper';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import styles from './styles';

const Header: React.FC = () => {
    const {resetForm} = useFormikContext();

    const reset = (): void => {
        resetForm();
    };

    return (
        <View style={styles.wrapper}>
            <Headline style={styles.title}>Search Car</Headline>
            <Button onPress={reset} mode="text">
                RESET
            </Button>
        </View>
    );
};

export default Header;
