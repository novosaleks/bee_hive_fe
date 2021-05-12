import React from 'react';
import Title from '../title';

import { FormContainer, SettingsContainer } from './general-settings.style';

const GeneralSettings = ({children}) => {
    return (
        <SettingsContainer>
            <Title>General information settings</Title>
            <FormContainer>
                {children}
            </FormContainer>
        </SettingsContainer>
    );
};

export default GeneralSettings;
