import React from 'react';
import {TextInput} from 'react-native-paper';
import {FieldInputProps, useField} from 'formik';

interface OwnProps extends FieldInputProps<string | number> {
    label: string;
    placeholder: string;
    maxLength?: number;
    normalize?: (value: string) => string | number | undefined;
}

const Input: React.FC<OwnProps> = (props) => {
    const [field, meta, {setValue}] = useField(props);

    const handleChange = (value: string): void => {
        setValue(props.normalize ? props.normalize(value) : value);
    };

    return (
        <TextInput
            onChangeText={handleChange}
            value={field.value?.toString() || ''}
            mode="flat"
            label={props.label}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
        />
    );
};

export default Input;
