import {useSelector} from 'react-redux';

import {Car} from 'core/Entities/Car/types';

import {getCars} from '../redux/selectors';

export default function (): Car[] {
    return useSelector(getCars);
}
