import React from 'react';
import GeneralSettings from '../../components/general-settings';
import SettingsForm from '../../components/settings-form';

const GeneralInformationContainer = () => {

// TODO dynamic content generation
    const fieldLabels = [
        'name',
        'date of birth',
        'location',
        'occupation',
        'about me',
        'password',
    ];

    return (
        <GeneralSettings>
            {
                fieldLabels.map(item => {
                    return <SettingsForm name={item} label={`${item}:`}/>;
                })
            }
        </GeneralSettings>
    );
};

export default GeneralInformationContainer;
