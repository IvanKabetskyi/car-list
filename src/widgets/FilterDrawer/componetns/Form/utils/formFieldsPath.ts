import {FilterParams, Price} from 'store/slices/Filter/types';
import {ObjectPath} from 'types/utility';

type FilterParamsPath = Omit<FilterParams, 'price'> & {price: Price};

export default {
    getMakeFieldPath: (): ObjectPath<FilterParamsPath, 'make'> => 'make',
    getModelFieldPath: (): ObjectPath<FilterParamsPath, 'model'> => 'model',
    getModelYearFieldPath: (): ObjectPath<FilterParamsPath, 'modelYear'> => 'modelYear',
    getColorFieldPath: (): ObjectPath<FilterParamsPath, 'color'> => 'color',
    getPriceFieldPath: (): ObjectPath<FilterParamsPath, 'price'> => 'price',
    getPriceFromFieldPath: (): ObjectPath<FilterParamsPath, 'price.from'> => 'price.from',
    getPriceToFieldPath: (): ObjectPath<FilterParamsPath, 'price.to'> => 'price.to',
};
