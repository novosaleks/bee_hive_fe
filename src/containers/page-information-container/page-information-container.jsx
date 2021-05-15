import React from 'react';
import SettingsContainer from '../settings-container';
import SettingsSelect from '../../components/settings-select';
import { SelectContainer } from './page-information-container.style';

const PageInformationContainer = () => {
    const selectForms = [
        {
            label: 'Theme',
            targetField: 'theme',
            options: [
                {
                    label: 'Light',
                    value: 'light',
                },
                {
                    label: 'Dark',
                    value: 'dark',
                },
            ],
        },
    ];

    const generateOptions = options => {
        return options.map(({label, value}) => {
            return <option key={value} value={value}>{label}</option>;
        });
    };

    return (
        <SettingsContainer title='Page settings'>
            {
                selectForms.map(({label, targetField, options}) => {
                    return (
                        <SelectContainer key={label}>
                            <span>{label}:</span>
                            <SettingsSelect targetField={targetField}>
                                {generateOptions(options)}
                            </SettingsSelect>
                        </SelectContainer>
                    );
                })
            }
        </SettingsContainer>
    );
};

export default PageInformationContainer;
