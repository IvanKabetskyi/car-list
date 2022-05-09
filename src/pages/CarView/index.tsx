import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {ActivityIndicator, Card, Colors, Paragraph, Title} from 'react-native-paper';

import ListItem from 'components/ui/ListItem';

import useCarViewActions from './hooks/useCarViewActions';
import useStateCarView from './hooks/useStateCarView';

import styles from './styles';

const CarView: React.FC = () => {
    const isFocused = useIsFocused();
    const {resetState, fetchCar} = useCarViewActions();
    const {car, carAdditionalInfo, isLoading} = useStateCarView();

    useEffect(() => {
        if (isFocused) {
            fetchCar();
            return;
        }

        resetState();
    }, [isFocused]);

    if (isLoading) {
        return <ActivityIndicator style={styles.wrapper} animating={true} color={Colors.red800} />;
    }

    if (!car) {
        return <Title style={styles.wrapper}>{`Something went wrong!\nPlease try open this scene again`}</Title>;
    }

    return (
        <Card style={styles.wrapper}>
            <Card.Cover source={{uri: 'https://picsum.photos/200'}} />
            <Card.Content>
                <Title>Price: ${car.price}/day</Title>
                <Title>
                    {car.make}, <Paragraph>{car.model}</Paragraph>
                </Title>
                <ListItem label="Make ID" value={carAdditionalInfo?.MakeID} />

                <ListItem label="Year Model" value={car.modelYear} />
                <ListItem label="VIN" value={car.vin} />
                <ListItem label="Color" value={car.color} />
                <ListItem label="Manufacturer" value={carAdditionalInfo?.Manufacturer} />
                <ListItem label="City of manufacture" value={carAdditionalInfo?.PlantCity} />
                <ListItem label="Country of Origin" value={carAdditionalInfo?.PlantCountry} />
                <ListItem label="State of production" value={carAdditionalInfo?.PlantState} />
                <ListItem label="Vehicle Type" value={carAdditionalInfo?.VehicleType} />
            </Card.Content>
        </Card>
    );
};

export default CarView;
