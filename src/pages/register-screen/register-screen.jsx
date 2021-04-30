import React from 'react';
import { RegisterContainer } from './register-screen.style';

import logo from '../../assets/LOGO.svg';
import RegisterForm from '../../components/register-form';

const RegisterScreen = () => {
    return (
        <RegisterContainer>
            <img src={logo} alt='logo'/>
            <RegisterForm/>
        </RegisterContainer>
    );
};

export default RegisterScreen;
