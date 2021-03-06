import {useSelector} from 'react-redux';

import {getCar, getCarAdditionalInfo, getIsLoading} from '../redux/selectors';
import {PageState} from '../redux';

export default function (): PageState {
    return {
        car: useSelector(getCar),
        carAdditionalInfo: useSelector(getCarAdditionalInfo),
        isLoading: useSelector(getIsLoading),
    };
}
