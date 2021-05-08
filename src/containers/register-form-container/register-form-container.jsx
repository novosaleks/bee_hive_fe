import React from 'react';
import { useForm } from 'react-hook-form';
import InputContainer from '../input-container';
import RegisterForm from '../../components/register-form';

const RegisterFormContainer = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const registrationHandler = d => {
        // TODO implement registration service
    };

    const RegisterInput = (props) => {
        const {name, required = false, ...attrs} = props;

        return (
            <InputContainer register={register} name={name}
                errors={errors} rules={{required}}
                attrs={attrs}/>
        );
    };

    return (
        <RegisterForm RegisterInput={RegisterInput}
            registrationHandler={handleSubmit(registrationHandler)}/>
    );
};

export default RegisterFormContainer;
