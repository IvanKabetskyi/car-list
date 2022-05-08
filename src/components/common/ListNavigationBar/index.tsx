import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {Appbar} from 'react-native-paper';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FAFAFA',
    },
});

const ListNavigationBar: React.FC<DrawerHeaderProps> = (props) => {
    const openFilter = (): void => {
        props.navigation.openDrawer();
    };
    return (
        <Appbar.Header style={styles.wrapper}>
            <Appbar.Content title="Car List" />
            <Appbar.Action icon="magnify" onPress={openFilter} />
        </Appbar.Header>
    );
};

export default ListNavigationBar;
