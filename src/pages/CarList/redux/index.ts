import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {Car} from 'core/Entities/Car/types';
import {fetchCars} from './asyncActions';

export type PageState = {
    cars: Car[];
};

const catListPageState: PageState = {
    cars: [],
};

const carListAdapter = createEntityAdapter<Car>();

const carListSlice = createSlice({
    name: 'carListPage',
    initialState: carListAdapter.getInitialState(catListPageState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            carListAdapter.upsertMany(state, action.payload);
        });
    },
});

export const {selectAll: selectAllCarsState, selectById: selectedCarByIdState} = carListAdapter.getSelectors();

export {fetchCars};

export default carListSlice.reducer;
