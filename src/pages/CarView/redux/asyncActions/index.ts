import {createAsyncThunk} from '@reduxjs/toolkit';

import * as carRequests from 'core/Gateways/Car/requests';
import * as carAdditionalInfoRequests from 'core/Gateways/CarAdditionalInfo/requests';

export const fetchCar = createAsyncThunk('carViewPage/fetchCar', async (carID: number) => {
    const car = await carRequests.fetchCar(carID);
    const carAdditionalInfo = await carAdditionalInfoRequests.fetchCarAdditionalInfo(car);

    return {
        car,
        carAdditionalInfo,
    };
});
