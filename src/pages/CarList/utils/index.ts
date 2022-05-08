import {Car} from 'core/Entities/Car/types';
import {FilterParams, Price} from 'store/slices/Filter/types';
import {isNumber} from 'lodash';

const isInclude = (initialValue: string, includesValue: string): boolean =>
    initialValue.toLowerCase().includes(includesValue.toLowerCase());

const getIsPriceInRange = (price: number, priceParams?: Price): boolean => {
    if (!priceParams) {
        return true;
    }
    const {from, to} = priceParams;

    if (!isNumber(from) && !isNumber(to)) {
        return true;
    }

    if (!from && isNumber(to)) {
        return price < to;
    }

    if (!to && isNumber(from)) {
        return price > from;
    }

    return price < (to as number) && price > (from as number);
};

export const filterCars = (data: {cars: Car[]; filterParams: FilterParams}): Car[] => {
    const {cars, filterParams} = data;
    return cars.filter((car): boolean => {
        const isPriceInRange = getIsPriceInRange(car.price, filterParams.price);
        let isMakeInclude = true;
        let isModelInclude = true;
        let isColorEqual = true;
        let isYearEqual = true;

        if (filterParams.make) {
            isMakeInclude = isInclude(car.make, filterParams.make);
        }

        if (filterParams.model) {
            isModelInclude = isInclude(car.model, filterParams.model);
        }

        if (filterParams.color) {
            isColorEqual = car.color.toLowerCase() === filterParams.color.toLowerCase();
        }

        if (filterParams.modelYear) {
            isYearEqual = car.modelYear === filterParams.modelYear;
        }

        return isMakeInclude && isModelInclude && isColorEqual && isYearEqual && isPriceInRange;
    });
};
