import {Car} from 'core/Entities/Car/types';

import restApi from 'services/api';

import transformResponseToEntity from './mappers/transformResponseToEntity';

export const fetchCars = (): Promise<Car[]> => {
    const url = '/cars';
    return restApi.get(url).then((response) => response.data.cars.map(transformResponseToEntity));
};
