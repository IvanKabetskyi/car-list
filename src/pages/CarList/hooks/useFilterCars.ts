import {useMemo} from 'react';
import {isEmpty} from 'lodash';

import {Car} from 'core/Entities/Car/types';

import useStateFilterParams from 'hooks/useStateFilterParams';

import {filterCars} from '../utils';

import useStateCars from './useStateCars';

export default function (): Car[] {
    const cars = useStateCars();
    const filterParams = useStateFilterParams();

    return useMemo((): Car[] => {
        if (isEmpty(filterParams)) {
            return cars;
        }
        return filterCars({cars, filterParams});
    }, [cars, filterParams]);
}
