import React from 'react';
import SettingsContainer from '../settings-container';
import SettingsSelect from '../../components/settings-select';
import {SelectContainer} from './page-information-container.style';

import {GET_ACTIVE_THEME, setActiveTheme} from '../../graphql/theme';
import {useQuery} from '@apollo/client';
import {THEMES} from '../../common/utils/constants';

const PageInformationContainer = () => {
    const {loading, error, data} = useQuery(GET_ACTIVE_THEME);

    const selectForms = [
        {
            label: 'Theme',
            options: [
                {
                    label: 'Light',
                    value: THEMES.light,
                },
                {
                    label: 'Dark',
                    value: THEMES.dark,
                },
            ],
        },
    ];

    const generateOptions = (options) => {
        return options.map(({label, value}) => {

            return (
                <option
                    key={value}
                    value={value}
                    defaultValue={THEMES[activeTheme]}
                >
                    {label}
                </option>
            );
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    const activeTheme = data.activeTheme;

    return (
        <SettingsContainer title="Page settings">
            {selectForms.map(({label, options}) => {
                return (
                    <SelectContainer key={label}>
                        <span>{label}:</span>
                        <SettingsSelect
                            selectedValue={THEMES[activeTheme]}
                            onChange={(e) => setActiveTheme(e.target.value)}
                        >
                            {generateOptions(options)}
                        </SettingsSelect>
                    </SelectContainer>
                );
            })}
        </SettingsContainer>
    );
};

export default PageInformationContainer;
