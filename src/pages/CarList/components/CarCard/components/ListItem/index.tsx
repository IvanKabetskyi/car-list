import React from 'react';
import {Paragraph} from 'react-native-paper';

interface OwnProps {
    label: string;
    value: string | number;
}

const ListItem: React.FC<OwnProps> = (props) => {
    const {label, value} = props;

    return (
        <Paragraph>
            {label}: {value}
        </Paragraph>
    );
};

export default ListItem;
