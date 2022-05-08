import {createSlice} from '@reduxjs/toolkit';

import {FilterParams} from './types';

type FilterState = {
    filterParams: FilterParams;
};

const filterState: FilterState = {
    filterParams: {},
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
        clearFilter: (state) => {
            state.filterParams = {};
        },

        setFilterParams: (state, action) => {
            state.filterParams = action.payload;
        },
    },
});

const {clearFilter, setFilterParams} = filterSlice.actions;

export {clearFilter, setFilterParams};

export default filterSlice.reducer;
