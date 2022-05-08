import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useFormikContext} from 'formik';

import {FilterParams} from 'store/slices/Filter/types';

import {MAX_PRICE} from 'widgets/FilterDrawer/constants';
import formFieldsPath from 'widgets/FilterDrawer/componetns/Form/utils/formFieldsPath';

import styles from './styles';

const Slider: React.FC = () => {
    const dimensions = useWindowDimensions();
    const formik = useFormikContext<FilterParams>();
    const field = formik.getFieldProps(formFieldsPath.getPriceFieldPath());
    const [sliderValue, setSliderValue] = useState<number[]>([0, MAX_PRICE]);

    // eslint-disable-next-line no-magic-numbers
    const sliderWidth = dimensions.width - 52;

    const handleChangeValue = (values: number[]): void => {
        const [from, to] = values;

        formik.setFieldValue(formFieldsPath.getPriceFromFieldPath(), from);
        formik.setFieldValue(formFieldsPath.getPriceToFieldPath(), to);
    };

    useEffect(() => {
        const {from = 0, to = MAX_PRICE} = field.value || {};

        setSliderValue([from, to]);
    }, [field.value]);

    return (
        <MultiSlider
            sliderLength={sliderWidth}
            containerStyle={styles.wrapper}
            min={0}
            max={MAX_PRICE}
            values={sliderValue}
            onValuesChange={handleChangeValue}
            markerStyle={{height: 20, width: 20}}
        />
    );
};

export default Slider;
