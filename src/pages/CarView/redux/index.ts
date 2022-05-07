import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {Car} from 'core/Entities/Car/types';

export type PageState = {
    car?: Car;
};

const catViewPageState: PageState = {};

const carViewAdapter = createEntityAdapter();

const carViewSlice = createSlice({
    name: 'carViewPage',
    initialState: carViewAdapter.getInitialState(catViewPageState),
    reducers: {},
    extraReducers: (builder) => {
        console.warn('builder');
    },
});

export default carViewSlice.reducer;
