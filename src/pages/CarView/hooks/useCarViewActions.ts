import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {CarViewRouteParams, RouteParams} from 'types/Route';

import {AppDispatch} from 'store/types';

import {fetchCar, resetState} from '../redux';

interface Result {
    resetState(): void;
    fetchCar(): void;
}

export default function (): Result {
    const dispatch = useDispatch<AppDispatch>();
    const route = useRoute<RouteParams<CarViewRouteParams>>();

    return {
        resetState: () => dispatch(resetState()),
        fetchCar: () => dispatch(fetchCar(route.params.carID)),
    };
}
