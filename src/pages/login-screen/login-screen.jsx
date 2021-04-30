import React from 'react';
import {
    LoginContainer,
    Presentation,
    PresentationText,
    CreateAccountLink,
    OptionText
} from './login-screen.style';


import logo from '../../assets/LOGO.svg';
import LoginForm from '../../components/login-form';

const LoginScreen = () => {
    return (
        <LoginContainer>
            <Presentation>
                <img src={logo} alt='logo'/>
                <PresentationText>
                    Start to be in the spotlight <br/>
                    right now
                </PresentationText>
            </Presentation>
            <div>
                <LoginForm/>
                <OptionText>or</OptionText>
                <CreateAccountLink to='/register'>
                    Create account
                </CreateAccountLink>
            </div>
        </LoginContainer>
    );
};

export default LoginScreen;
