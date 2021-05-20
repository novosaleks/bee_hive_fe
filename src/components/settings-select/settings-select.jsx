import React from 'react';
import {Select} from './settings-select.style';

const SettingsSelect = ({targetField, children, ...attrs}) => {
    return (
        <Select width={[160, 240]} {...attrs}>
            {children}
        </Select>
    );
};

export default SettingsSelect;
