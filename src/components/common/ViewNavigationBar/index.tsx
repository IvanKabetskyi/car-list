import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {Appbar} from 'react-native-paper';

import {CarViewRouteParams} from 'types/Route';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FAFAFA',
    },
});

const ViewNavigationBar: React.FC<DrawerHeaderProps> = (props) => {
    const {params} = props.route as {params: CarViewRouteParams};
    const title = `${params.make}, ${params.model}`;
    return (
        <Appbar.Header style={styles.wrapper}>
            <Appbar.BackAction onPress={props.navigation.goBack} />
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default ViewNavigationBar;
