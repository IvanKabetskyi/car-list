import {useDispatch} from 'react-redux';

import {AppDispatch} from 'store/types';

import {fetchCars} from '../redux';

interface Result {
    fetchCars(): void;
}

export default function (): Result {
    const dispatch = useDispatch<AppDispatch>();

    return {
        fetchCars: () => dispatch(fetchCars()),
    };
}
