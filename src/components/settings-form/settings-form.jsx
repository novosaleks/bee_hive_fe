import { useEffect } from 'react';
import InputContainer from '../../containers/input-container';
import { useForm } from 'react-hook-form';

import { Form, Label } from './settings-form.style';
import { Button } from '../../common/style';

import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../graphql/user';
import { useNotificationService } from '../../common/context/notificationContext';
import { useUpdateCurrentUser } from '../../common/context/updateCurrentUserContext';

const SettingsForm = ({ label, name, type, defaultValue }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [updateUser, { data }] = useMutation(UPDATE_USER);

    const updateCurrentUser = useUpdateCurrentUser();

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.updateUser;
            if (response.success) {
                notify({ text: response.message, type: 'success' });
                updateCurrentUser();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

    const handleChange = async d => {
        await updateUser({
            variables: { ...d },
        });
    };

    return (
        <Form onSubmit={handleSubmit(handleChange)}>
            <Label fontSize={['0.6rem', '1rem']} htmlFor={name}>
                {label}
            </Label>
            <InputContainer
                register={register}
                name={name}
                errors={errors}
                attrs={{ id: name, type: type, defaultValue: defaultValue }}
            />
            <Button
                type='submit'
                fontSize={['1rem', '1.5rem']}
                width={[90, 150]}>
                Change
            </Button>
        </Form>
    );
};

export default SettingsForm;
