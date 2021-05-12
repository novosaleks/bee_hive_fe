import React from 'react';
import GeneralSettings from '../../components/general-settings';
import SettingsForm from '../../components/settings-form';

const GeneralInformationContainer = () => {

// TODO dynamic content generation
          const fieldLabels = [
              {label: 'name', type: 'text'},
              {label: 'date of birth', type: 'date'},
              {label: 'location', type: 'text'},
              {label: 'occupation', type: 'text'},
              {label: 'about me', type: 'text'},
              {label: 'password', type: 'password'},
          ];

          return (
              <GeneralSettings>
                  {
                      fieldLabels.map(({label, type}) => {
                          return <SettingsForm key={label} type={type} name={label}
                              label={`${label}:`}/>;
                      })
                  }
              </GeneralSettings>
          );
      }
;

export default GeneralInformationContainer;
;
