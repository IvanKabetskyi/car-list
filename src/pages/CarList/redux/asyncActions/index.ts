import {createAsyncThunk} from '@reduxjs/toolkit';
import * as requests from 'core/Gateways/Car/requests';

export const fetchCars = createAsyncThunk('carListPage/fetchCars', () => {
    return requests.fetchCars();
});
