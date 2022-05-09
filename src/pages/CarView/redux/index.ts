import {createSlice} from '@reduxjs/toolkit';

import {Car} from 'core/Entities/Car/types';
import {CarAdditionalInfo} from 'core/Entities/CarAdditialInfo/types';

import {fetchCar} from './asyncActions';

export type PageState = {
    car?: Car;
    carAdditionalInfo?: CarAdditionalInfo;
};

const catViewPageState: PageState = {};

const carViewSlice = createSlice({
    name: 'carViewPage',
    initialState: catViewPageState,
    reducers: {
        resetState: (state) => {
            state.car = undefined;
            state.carAdditionalInfo = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCar.fulfilled, (state, action) => {
            const {car, carAdditionalInfo} = action.payload;

            state.car = car;
            state.carAdditionalInfo = carAdditionalInfo;
        });
    },
});

const {resetState} = carViewSlice.actions;

export {fetchCar, resetState};

export default carViewSlice.reducer;
