import {useSelector} from 'react-redux';

import {FilterParams} from 'store/slices/Filter/types';
import {getFilterParams} from 'store/slices/Filter/selectors';

export default function (): FilterParams {
    return useSelector(getFilterParams);
}
