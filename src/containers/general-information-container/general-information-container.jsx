import { useEffect, useState } from 'react';
import SettingsContainer from '../settings-container';
import SettingsForm from '../../components/settings-form';
import { GET_CURRENT_USER } from '../../graphql/user';
import UploadPhoto from '../../components/upload-photo';
import RemoveUserAccount from '../../components/remove-user-account';
import useQueriedData from '../../common/hooks/useQueriedData';

const GeneralInformationContainer = () => {
    const [user, setUser] = useState(null);
    const [formFields, setFormFields] = useState(null);
    const { data, fallback } = useQueriedData(GET_CURRENT_USER);

    useEffect(() => {
        if (data) {
            setUser(data.currentUser);
        }
    }, [data]);

    useEffect(() => {
        if (user) {
            setFormFields([
                {
                    label: 'First name',
                    name: 'firstName',
                    type: 'text',
                    defaultValue: user.firstName,
                },
                {
                    label: 'Last name',
                    name: 'lastName',
                    type: 'text',
                    defaultValue: user.lastName,
                },
                {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    defaultValue: user.email,
                },
                {
                    label: 'Password',
                    name: 'password',
                    type: 'password',
                    defaultValue: '',
                },
                {
                    label: 'Occupation',
                    name: 'occupation',
                    type: 'text',
                    defaultValue: user.occupation,
                },
                {
                    label: 'Location',
                    name: 'location',
                    type: 'text',
                    defaultValue: user.location,
                },
                {
                    label: 'Birth date',
                    name: 'birthDate',
                    type: 'date',
                    defaultValue: user.birthDate,
                },
                {
                    label: 'About me',
                    name: 'userInfo',
                    type: 'text',
                    defaultValue: user.userInfo,
                },
            ]);
        }
    }, [user]);

    if (fallback) {
        return fallback;
    }

    return (
        <>
            {formFields && (
                <SettingsContainer title='General information settings'>
                    <UploadPhoto />
                    {formFields.map(({ label, name, type, defaultValue }) => {
                        return (
                            <SettingsForm
                                key={name}
                                type={type}
                                name={name}
                                label={`${label}:`}
                                defaultValue={defaultValue}
                            />
                        );
                    })}
                    <RemoveUserAccount />
                </SettingsContainer>
            )}
        </>
    );
};
export default GeneralInformationContainer;
