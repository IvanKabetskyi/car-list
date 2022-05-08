import React, {useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Button, Title} from 'react-native-paper';
import {Field, Formik} from 'formik';
import {isEqual} from 'lodash';

import Input from 'components/ui/form/Input';

import {FilterParams} from 'store/slices/Filter/types';

import {onlyNumbers} from 'utils/normalize';

import useFilterActions from 'widgets/FilterDrawer/hooks/useFilterActions';

import useStateFilterParams from 'hooks/useStateFilterParams';

import Header from './components/Header';
import Price from './components/Price';

import validation from './utils/validation';
import formFieldsPath from './utils/formFieldsPath';

import styles from './styles';

const Form: React.FC = () => {
    const {setFilterParams} = useFilterActions();
    const filterParams = useStateFilterParams();
    const navigation = useNavigation();
    const initialValues: FilterParams = {};

    const isDisabled = useCallback(
        (formData: FilterParams): boolean => {
            return isEqual(filterParams, formData);
        },
        [filterParams],
    );

    const submit = (value: FilterParams): void => {
        setFilterParams(value);
        navigation.dispatch(DrawerActions.closeDrawer());
    };
    return (
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
            <Formik validationSchema={validation} initialValues={initialValues} onSubmit={submit}>
                {({handleSubmit, values}) => (
                    <ScrollView>
                        <Header />

                        <Title style={styles.title}>Car Model</Title>
                        <Field
                            as={Input}
                            name={formFieldsPath.getMakeFieldPath()}
                            placeholder="Enter car make"
                            label="Car Make"
                        />
                        <Field
                            as={Input}
                            name={formFieldsPath.getModelFieldPath()}
                            placeholder="Enter car model"
                            label="Car Model"
                        />

                        <Title style={styles.title}>Car Additional Information </Title>
                        <Field
                            as={Input}
                            normalize={onlyNumbers}
                            name={formFieldsPath.getModelYearFieldPath()}
                            placeholder="Enter model year"
                            label="Model Year"
                        />
                        <Field
                            as={Input}
                            name={formFieldsPath.getColorFieldPath()}
                            placeholder="Enter car color"
                            label="Car Color"
                        />

                        <Price />
                        <Button
                            style={styles.button}
                            contentStyle={styles.buttonContent}
                            labelStyle={styles.buttonLabel}
                            onPress={handleSubmit}
                            mode="contained"
                            disabled={isDisabled(values)}
                        >
                            Search
                        </Button>
                    </ScrollView>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
};

export default Form;
