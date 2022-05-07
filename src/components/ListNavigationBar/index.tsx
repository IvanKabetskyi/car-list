import React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {Appbar} from 'react-native-paper';

const ListNavigationBar: React.FC<DrawerHeaderProps> = (props) => {
    const openFilter = (): void => {
        props.navigation.openDrawer();
    };
    return (
        <Appbar.Header>
            <Appbar.Content title="Car List" />
            <Appbar.Action icon="magnify" onPress={openFilter} />
        </Appbar.Header>
    );
};

export default ListNavigationBar;
