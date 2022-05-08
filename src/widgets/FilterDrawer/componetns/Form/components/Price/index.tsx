import {Field, useFormikContext} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {HelperText, Title} from 'react-native-paper';

import Input from 'components/ui/form/Input';

import {onlyNumbers} from 'utils/normalize';

import formFieldsPath from 'widgets/FilterDrawer/componetns/Form/utils/formFieldsPath';

import Slider from './components/Slider';

import styles from './styles';

const Price: React.FC = () => {
    const formik = useFormikContext();
    const meta = formik.getFieldMeta(formFieldsPath.getPriceFieldPath());
    const priceMaxLength = 3;

    return (
        <View style={styles.wrapper}>
            <Title style={styles.title}>Price, $</Title>
            <View style={styles.inputWrapper}>
                <Field
                    as={Input}
                    normalize={onlyNumbers}
                    maxLength={priceMaxLength}
                    label="From"
                    placeholder="Enter From"
                    name={formFieldsPath.getPriceFromFieldPath()}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Field
                    as={Input}
                    normalize={onlyNumbers}
                    maxLength={priceMaxLength}
                    label="To"
                    placeholder="Enter To"
                    name={formFieldsPath.getPriceToFieldPath()}
                />
            </View>
            <Slider />
            <HelperText style={styles.helperText} type="error" visible={Boolean(meta.error)}>
                {meta.error}
            </HelperText>
        </View>
    );
};

export default Price;
