import React from 'react';
import SettingsContainer from '../settings-container';
import SettingsForm from '../../components/settings-form';

const GeneralInformationContainer = () => {

// TODO dynamic content generation
          const formFields = [
              {label: 'name', type: 'text'},
              {label: 'date of birth', type: 'date'},
              {label: 'location', type: 'text'},
              {label: 'occupation', type: 'text'},
              {label: 'about me', type: 'text'},
              {label: 'password', type: 'password'},
          ];

          return (
              <SettingsContainer title='General information settings'>
                  {
                      formFields.map(({label, type}) => {
                          return <SettingsForm key={label} type={type} name={label}
                              label={`${label}:`}/>;
                      })
                  }
              </SettingsContainer>
          );
      }
;

export default GeneralInformationContainer;
