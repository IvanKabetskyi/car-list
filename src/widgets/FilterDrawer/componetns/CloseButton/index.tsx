import React from 'react';
import {Colors, IconButton} from 'react-native-paper';
import {View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import styles from './styles';

const CloseButton: React.FC = () => {
    const navigation = useNavigation();

    const close = (): void => {
        navigation.dispatch(DrawerActions.closeDrawer());
    };
    return (
        <View style={styles.wrapper}>
            <IconButton style={styles.icon} icon="close" color={Colors.black} size={20} onPress={close} />
        </View>
    );
};

export default CloseButton;
