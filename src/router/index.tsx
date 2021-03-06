import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import {routes} from 'constants/index';

import CarList from 'pages/CarList';
import CarView from 'pages/CarView';

import FilterDrawer from 'widgets/FilterDrawer';

import ListNavigationBar from 'components/common/ListNavigationBar';
import ViewNavigationBar from 'components/common/ViewNavigationBar';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    drawerStyle: {
        width: '100%',
    },
});

const viewNavigationBarOptions = {
    header: ViewNavigationBar,
    gestureEnabled: false,
};

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: styles.drawerStyle,
                    drawerType: 'slide',
                }}
                drawerContent={FilterDrawer}
                initialRouteName={routes.carList}
            >
                <Drawer.Screen
                    options={{
                        header: ListNavigationBar,
                    }}
                    name={routes.carList}
                    component={CarList}
                />
                <Drawer.Screen options={viewNavigationBarOptions} name={routes.carView} component={CarView} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Router;
