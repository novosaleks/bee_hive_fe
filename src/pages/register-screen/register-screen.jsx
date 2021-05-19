import React from 'react';
import { RegisterContainer } from './register-screen.style';

import logo from '../../assets/LOGO.svg';
import RegisterFormContainer from '../../containers/register-form-container';
import {Logo} from "../../common/style";

const RegisterScreen = () => {
    return (
        <RegisterContainer>
            <Logo src={logo} alt='logo'/>
            <RegisterFormContainer/>
        </RegisterContainer>
    );
};

export default RegisterScreen;
