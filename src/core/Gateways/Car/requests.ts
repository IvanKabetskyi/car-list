import {Car} from 'core/Entities/Car/types';

import restApi from 'services/api';

import transformResponseToEntity from './mappers/transformResponseToEntity';

const baseURL = 'https://myfakeapi.com/api';

export const fetchCars = (): Promise<Car[]> => {
    const url = `${baseURL}/cars`;
    return restApi.get(url).then((response) => response.data.cars.map(transformResponseToEntity));
};

export const fetchCar = (id: number): Promise<Car> => {
    const url = `${baseURL}/cars/${id}`;

    return restApi.get(url).then((response) => transformResponseToEntity(response.data.Car));
};
