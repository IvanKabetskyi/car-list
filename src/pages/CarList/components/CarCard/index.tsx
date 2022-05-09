import React from 'react';
import {Button, Card} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core/src/types';

import {Car} from 'core/Entities/Car/types';

import ListItem from 'components/ui/ListItem';

import {routes} from 'constants/index';

import MainInfo from './components/MainInfo';

const styles = StyleSheet.create({
    wrapper: {
        margin: 16,
    },
});

const CarCard: React.FC<{car: Car}> = ({car}) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const linkToViewPage = (): void => {
        navigation.navigate(routes.carView, {carID: car.id, model: car.model, make: car.make});
    };

    return (
        <Card style={styles.wrapper}>
            <Card.Cover source={{uri: 'https://picsum.photos/200'}} />
            <Card.Content>
                <MainInfo car={car} />
                <ListItem label="Year Model" value={car.modelYear} />
                <ListItem label="VIN" value={car.vin} />
                <ListItem label="Color" value={car.color} />
                <Button mode="contained" onPress={linkToViewPage}>
                    View
                </Button>
            </Card.Content>
        </Card>
    );
};

export default CarCard;
