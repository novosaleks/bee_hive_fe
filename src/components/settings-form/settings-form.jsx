import React from 'react';
import InputContainer from '../../containers/input-container';
import { useForm } from 'react-hook-form';

import { Form, Label } from './settings-form.style';
import { Button } from '../../common/style';

const SettingsForm = ({label, name}) => {
    const {register, formState: {errors}} = useForm();

    return (
        <Form>
            <Label htmlFor={name}>{label}</Label>
            <InputContainer register={register} name={name}
                errors={errors} attrs={{id: name}}/>
            <Button>Change</Button>
        </Form>
    );
};

export default SettingsForm;
