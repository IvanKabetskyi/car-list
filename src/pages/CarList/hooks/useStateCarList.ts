import {useSelector} from 'react-redux';

import {getCars, getIsLoading} from '../redux/selectors';
import {PageState} from '../redux';

export default function (): PageState {
    return {
        cars: useSelector(getCars),
        isLoading: useSelector(getIsLoading),
    };
}
