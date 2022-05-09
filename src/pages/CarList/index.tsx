import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ActivityIndicator, Colors, Title} from 'react-native-paper';

import {Car} from 'core/Entities/Car/types';

import useCarListActions from './hooks/useCarListActions';
import useFilterCars from './hooks/useFilterCars';

import CarCard from './components/CarCard';
import useStateCars from './hooks/useStateCarList';

import styles from './styles';

const CarList: React.FC = () => {
    const cars = useFilterCars();
    const {fetchCars} = useCarListActions();
    const isFocused = useIsFocused();
    const {isLoading} = useStateCars();

    useEffect(() => {
        if (isFocused) {
            fetchCars();
        }
    }, [isFocused]);

    if (!cars?.length && !isLoading) {
        return <Title style={styles.wrapper}>{`No cars fround!\nChange filter params`}</Title>;
    }

    return (
        <>
            {isLoading && <ActivityIndicator style={styles.wrapper} animating={true} color={Colors.red800} />}
            <FlatList
                data={cars}
                renderItem={({item}: ListRenderItemInfo<Car>) => <CarCard car={item} key={item.id} />}
            />
        </>
    );
};

export default CarList;
