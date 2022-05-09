import {useSelector} from 'react-redux';

import {CarAdditionalInfo} from 'core/Entities/CarAdditialInfo/types';
import {Car} from 'core/Entities/Car/types';

import {getCar, getCarAdditionalInfo} from '../redux/selectors';

interface Result {
    car?: Car;
    carAdditionalInfo?: CarAdditionalInfo;
}

export default function (): Result {
    return {
        car: useSelector(getCar),
        carAdditionalInfo: useSelector(getCarAdditionalInfo),
    };
}
