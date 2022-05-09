import {Car} from 'core/Entities/Car/types';
import {CarAdditionalInfo} from 'core/Entities/CarAdditialInfo/types';

import {AppState} from 'store/types';

export const getCar = (state: AppState): Car | undefined => state.carViewReducer.car;
export const getCarAdditionalInfo = (state: AppState): CarAdditionalInfo | undefined =>
    state.carViewReducer.carAdditionalInfo;

export const getIsLoading = (state: AppState): boolean => state.carViewReducer.isLoading;
