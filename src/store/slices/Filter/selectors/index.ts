import {AppState} from 'store/types';

import {FilterParams} from '../types';

export const getFilterParams = (state: AppState): FilterParams => state.filterReducer.filterParams;
