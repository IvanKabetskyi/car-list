import React from 'react';
import {View} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';

import {Car} from 'core/Entities/Car/types';

import styles from './styles';

const MainInfo: React.FC<{car: Car}> = ({car}) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Title>
                    {car.make}, <Paragraph>{car.model}</Paragraph>
                </Title>
            </View>

            <View>
                <Title>${car.price}/day</Title>
            </View>
        </View>
    );
};

export default MainInfo;
