import { useEffect, useState } from 'react';
import SettingsContainer from '../settings-container';
import SettingsForm from '../../components/settings-form';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const GeneralInformationContainer = () => {
    const [user, setUser] = useState(null);
    const [formFields, setFormFields] = useState(null);
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    return (
        <>
            {formFields && (
                <SettingsContainer title='General information settings'>
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
                </SettingsContainer>
            )}
        </>
    );
};
export default GeneralInformationContainer;
