import React from 'react';
import {
    LoginContainer,
    Presentation,
    PresentationText,
    CreateAccountButton,
} from './login-screen.style';

import { TextCenter } from '../../common/style';

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
                <TextCenter>
                    <div style={{lineHeight: '110px'}}>or</div>
                    <CreateAccountButton primary>Create
                                                 account</CreateAccountButton>
                </TextCenter>
            </div>
        </LoginContainer>
    );
};

export default LoginScreen;
