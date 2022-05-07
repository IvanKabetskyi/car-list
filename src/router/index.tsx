import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import {routes} from 'constants/index';

import CarView from 'pages/CarView';
import CarList from 'pages/CarList';

import FilterDrawer from 'widgets/FilterDrawer';

import ListNavigationBar from 'components/NavigationBars/ListNavigationBar';
import ViewNavigationBar from 'components/NavigationBars/ViewNavigationBar';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    drawerStyle: {
        width: '100%',
    },
});

const viewOptions = {
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
                <Drawer.Screen options={viewOptions} name={routes.carView} component={CarView} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Router;
