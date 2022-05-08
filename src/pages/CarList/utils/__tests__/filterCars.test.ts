import {filterCars} from '../index';
import cars from './__mocks__/cars.json';

describe('Test filterCars', () => {
    it('If filter params empty must return array again', () => {
        expect(filterCars({cars, filterParams: {}})).toEqual(cars);
    });

    it('If filter params color maroon must return array with maroon color cars', () => {
        expect(filterCars({cars, filterParams: {color: 'maroon'}})).toEqual([
            {
                color: 'Maroon',
                id: 2,
                make: 'Volkswagen',
                model: 'Passat',
                modelYear: 2008,
                price: 173,
                vin: 'WBANV9C51AC203320',
            },
        ]);
    });

    it('If filter params car make Volkswagen must return array with car make Volkswagen', () => {
        expect(filterCars({cars, filterParams: {make: 'volkswagen'}})).toEqual([
            {
                color: 'Maroon',
                id: 2,
                make: 'Volkswagen',
                model: 'Passat',
                modelYear: 2008,
                price: 173,
                vin: 'WBANV9C51AC203320',
            },
        ]);
    });

    it('If filter params car model Montero must return array with car model Montero', () => {
        expect(filterCars({cars, filterParams: {model: 'mOnTero'}})).toEqual([
            {
                id: 1,
                make: 'Mitsubishi',
                model: 'Montero',
                color: 'Yellow',
                modelYear: 2002,
                vin: 'SAJWJ0FF3F8321657',
                price: 281,
            },
        ]);
    });

    it('If filter params car model year 2003 must return array with car model year 2003', () => {
        expect(filterCars({cars, filterParams: {modelYear: 2003}})).toEqual([
            {
                id: 3,
                make: 'Saturn',
                model: 'L-Series',
                color: 'Red',
                modelYear: 2003,
                vin: '1HGCR6F34EA246317',
                price: 223,
            },
        ]);
    });

    it('If filter params car price range 100-200$ must return array with car price range 100-200$', () => {
        expect(filterCars({cars, filterParams: {price: {from: 100, to: 200}}})).toEqual([
            {
                color: 'Maroon',
                id: 2,
                make: 'Volkswagen',
                model: 'Passat',
                modelYear: 2008,
                price: 173,
                vin: 'WBANV9C51AC203320',
            },
        ]);
    });

    it('If filter params car price just with key to 200$ must return array with car price just with key to 200$', () => {
        expect(filterCars({cars, filterParams: {price: {to: 200}}})).toEqual([
            {
                color: 'Maroon',
                id: 2,
                make: 'Volkswagen',
                model: 'Passat',
                modelYear: 2008,
                price: 173,
                vin: 'WBANV9C51AC203320',
            },
        ]);
    });

    it('If filter params car price just with key from 300 must return array with car price just with key from 300$', () => {
        expect(filterCars({cars, filterParams: {price: {from: 300}}})).toEqual([
            {
                id: 5,
                make: 'Mitsubishi',
                model: 'Lancer Evolution',
                color: 'Purple',
                modelYear: 2002,
                vin: 'WAU2GBFCXDN339713',
                price: 384,
            },
        ]);
    });
});
