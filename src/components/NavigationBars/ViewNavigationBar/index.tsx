import React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {Appbar} from 'react-native-paper';

const ViewNavigationBar: React.FC<DrawerHeaderProps> = (props) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={props.navigation.goBack} />
            <Appbar.Content title="Car" />
        </Appbar.Header>
    );
};

export default ViewNavigationBar;
