import React from 'react';
import InputContainer from '../../containers/input-container';
import {useForm} from 'react-hook-form';

import {Form, Label} from './settings-form.style';
import {Button} from '../../common/style';

const SettingsForm = ({label, name, type}) => {
    const {register, formState: {errors}} = useForm();

    return (
        <Form>
            <Label fontSize={['0.6rem', '1rem']} htmlFor={name}>{label}</Label>
            <InputContainer register={register} name={name}
                            errors={errors} attrs={{id: name, type: type}}/>
            <Button fontSize={['1rem', '1.5rem']} width={[90, 150]}>Change</Button>
        </Form>
    );
};

export default SettingsForm;
