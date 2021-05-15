import React from 'react';
import { Select } from './settings-select.style';

const SettingsSelect = ({targetField, children, ...attrs}) => {
    return (
        <Select {...attrs}>
            {children}
        </Select>
    );
};

export default SettingsSelect;
