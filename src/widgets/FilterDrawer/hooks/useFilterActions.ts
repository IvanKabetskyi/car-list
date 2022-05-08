import {useDispatch} from 'react-redux';

import {clearFilter, setFilterParams} from 'store/slices/Filter';
import {FilterParams} from 'store/slices/Filter/types';

interface Result {
    setFilterParams(params: FilterParams): void;
    clearFilter(): void;
}

export default function (): Result {
    const dispatch = useDispatch();

    return {
        setFilterParams: (params) => dispatch(setFilterParams(params)),
        clearFilter: () => dispatch(clearFilter()),
    };
}
