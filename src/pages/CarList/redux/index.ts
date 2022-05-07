import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {Car} from 'core/Entities/Car/types';

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
        console.warn('builder');
    },
});

export const {selectAll: selectAllStudentsState, selectById: selectedStudentByIdState} = carListAdapter.getSelectors();

export default carListSlice.reducer;
