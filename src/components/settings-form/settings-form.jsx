import React, { useEffect, useRef } from 'react';
import InputContainer from '../../containers/input-container';
import { useForm } from 'react-hook-form';

import { Form, Label } from './settings-form.style';
import { Button } from '../../common/style';

import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../graphql/user';

const SettingsForm = ({ label, name, type, defaultValue }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [updateUser, { data }] = useMutation(UPDATE_USER);
    console.log(name, defaultValue);

    useEffect(() => {
        if (data) {
            const response = data.updateUser;
            if (response.success) {
                // TODO make a success notification
                console.log(response.message);
            } else {
                // TODO make an error notification
                console.error(response.message);
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
