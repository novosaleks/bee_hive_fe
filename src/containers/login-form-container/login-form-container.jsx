import React from 'react';
import InputContainer from '../input-container';
import { useForm } from 'react-hook-form';
import LoginForm from '../../components/login-form';

const LoginFormContainer = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const loginHandler = d => {
        // TODO implement login service
    };

    const LoginInput = (props) => {
        const {name, ...attrs} = props;

        return (
            <InputContainer register={register} name={name}
                errors={errors} rules={{required: true}}
                attrs={attrs}/>
        );
    };

    return <LoginForm LoginInput={LoginInput}
        onSubmit={handleSubmit(loginHandler)}/>;
};

export default LoginFormContainer;
