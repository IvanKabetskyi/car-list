import React from 'react';
import {Text, View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

const FilterDrawer: React.FC<DrawerContentComponentProps> = () => {
    return (
        <View>
            <Text>Filter Drawer</Text>
        </View>
    );
};

export default FilterDrawer;
