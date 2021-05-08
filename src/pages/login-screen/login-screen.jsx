import React from 'react';
import {
    LoginContainer,
    Presentation,
    PresentationText,
    CreateAccountLink,
    OptionText,
} from './login-screen.style';

import logo from '../../assets/LOGO.svg';
import LoginFormContainer from '../../containers/login-form-container';

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
                <LoginFormContainer/>
                <OptionText>or</OptionText>
                <CreateAccountLink to='/register'>
                    Create account
                </CreateAccountLink>
            </div>
        </LoginContainer>
    );
};

export default LoginScreen;
