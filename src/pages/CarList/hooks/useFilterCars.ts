import {useMemo} from 'react';
import {isEmpty} from 'lodash';

import {Car} from 'core/Entities/Car/types';

import useStateFilterParams from 'hooks/useStateFilterParams';

import {filterCars} from '../utils';

import useStateCarList from './useStateCarList';

export default function (): Car[] {
    const {cars} = useStateCarList();
    const filterParams = useStateFilterParams();

    return useMemo((): Car[] => {
        if (isEmpty(filterParams)) {
            return cars;
        }
        return filterCars({cars, filterParams});
    }, [cars, filterParams]);
}
