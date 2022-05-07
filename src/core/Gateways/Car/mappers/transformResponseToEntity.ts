import {Car as CarEntity} from 'core/Entities/Car/types';

type Car = {
    id: number;
    car: string;
    car_model: string;
    car_color: string;
    car_model_year: number;
    car_vin: string;
    price: string;
};

const calculatePrice = (price: string): number => {
    const dividerCount = 10;
    return Math.round(Number(price.slice(1)) / dividerCount);
};

export default function (car: Car): CarEntity {
    return {
        id: car.id,
        make: car.car,
        model: car.car_model,
        color: car.car_color,
        modelYear: car.car_model_year,
        vin: car.car_vin,
        price: calculatePrice(car.price),
    };
}
