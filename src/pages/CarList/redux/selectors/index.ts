import {Car} from 'core/Entities/Car/types';

import {AppState} from 'store/types';

import {selectAllCarsState} from '../index';

export const getCars = (state: AppState): Car[] => selectAllCarsState(state.carListReducer);

export const getIsLoading = (state: AppState): boolean => state.carListReducer.isLoading;
