import {CarAdditionalInfo} from 'core/Entities/CarAdditialInfo/types';
import restApi from 'services/api';
import transformResponseToEntity from './mappers/transformResponseToEntity';

const baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended';

export const fetchCarAdditionalInfo = (data: {
    vin: string;
    modelYear: number;
}): Promise<CarAdditionalInfo | undefined> => {
    const {vin, modelYear} = data;
    const url = `${baseURL}/${vin}`;
    return restApi
        .get(url, {
            params: {
                modelyear: modelYear,
                format: 'json',
            },
        })
        .then(transformResponseToEntity);
};
