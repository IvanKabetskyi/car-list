import {AxiosResponse} from 'axios';
import first from 'lodash/first';

import {CarAdditionalInfo} from 'core/Entities/CarAdditialInfo/types';

export default function (response: AxiosResponse): CarAdditionalInfo | undefined {
    const result = first(response.data?.Results) as CarAdditionalInfo | undefined;

    if (!result) {
        return undefined;
    }

    return {
        PlantCity: result.PlantCity,
        Manufacturer: result.Manufacturer,
        PlantCountry: result.PlantCountry,
        PlantState: result.PlantState,
        VehicleType: result.VehicleType,
        MakeID: result.MakeID,
    };
}
