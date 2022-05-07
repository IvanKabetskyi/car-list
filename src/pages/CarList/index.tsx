import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Car} from 'core/Entities/Car/types';

import useCarListActions from './hooks/useCarListActions';
import useStateCars from './hooks/useStateCars';

import CarCard from './components/CarCard';

const CarList: React.FC = () => {
    const cars = useStateCars();
    const {fetchCars} = useCarListActions();
    const isFocused = useIsFocused();

    useEffect(() => {
        fetchCars();
    }, [isFocused]);
    return (
        <FlatList data={cars} renderItem={({item}: ListRenderItemInfo<Car>) => <CarCard car={item} key={item.id} />} />
    );
};

export default CarList;
