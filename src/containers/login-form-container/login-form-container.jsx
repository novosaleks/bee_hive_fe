import React, { useEffect } from 'react';
import InputContainer from '../input-container';
import { useForm } from 'react-hook-form';
import LoginForm from '../../components/login-form';
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { LOGIN } from "../../graphql/auth";

const LoginFormContainer = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [login, { data }] = useMutation(LOGIN);
    const history = useHistory();

    useEffect(() => {
        if (data) {
            const user = data.login;
            console.log("data:", user);
            // TODO implement saving user data in the cache
            if (user) {
                history.push("/");
            } else {
                console.error("Login failed!")
            }
        }
    }, [data]);

    const loginHandler = async d => {
        await login({
            variables: {
                email: d.email,
                password: d.password
            }
        });
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
