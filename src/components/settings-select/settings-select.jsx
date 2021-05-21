import React from 'react';
import {Select} from './settings-select.style';

const SettingsSelect = ({selectedValue, children, ...attrs}) => {
    return (
        <Select value={selectedValue} width={[160, 240]} {...attrs}>
            {children}
        </Select>
    );
};

export default SettingsSelect;
