import React from 'react';
import { RegisterContainer } from './register-screen.style';

import logo from '../../assets/LOGO.svg';
import RegisterFormContainer from '../../containers/register-form-container';

const RegisterScreen = () => {
    return (
        <RegisterContainer>
            <img src={logo} alt='logo'/>
            <RegisterFormContainer/>
        </RegisterContainer>
    );
};

export default RegisterScreen;
