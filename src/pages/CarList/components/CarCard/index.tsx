import React from 'react';
import {Card} from 'react-native-paper';

import {Car} from 'core/Entities/Car/types';

import MainInfo from './components/MainInfo';
import ListItem from './components/ListItem';

const CarCard: React.FC<{car: Car}> = ({car}) => {
    return (
        <Card style={{margin: 16}}>
            <Card.Cover source={{uri: 'https://picsum.photos/200'}} />
            <Card.Content>
                <MainInfo car={car} />
                <ListItem label="Year Model" value={car.modelYear} />
                <ListItem label="VIN" value={car.vin} />
                <ListItem label="Color" value={car.color} />
            </Card.Content>
        </Card>
    );
};

export default CarCard;
