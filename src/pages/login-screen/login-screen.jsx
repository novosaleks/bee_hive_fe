import React from 'react';
import {
    LoginContainer,
    Presentation,
    PresentationText,
    CreateAccountLink,
    OptionText,
} from './login-screen.style';

import { Logo } from '../../common/style';

import logo from '../../assets/LOGO.svg';
import LoginFormContainer from '../../containers/login-form-container';

import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';

import { GET_CURRENT_USER } from '../../graphql/user';

const LoginScreen = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    const user = data.currentUser;

    return (
        <>
            {user ? (
                <Redirect to='/' />
            ) : (
                <LoginContainer>
                    <Presentation>
                        <Logo src={logo} alt='logo' />
                        <PresentationText>
                            Start to be in the spotlight <br />
                            right now
                        </PresentationText>
                    </Presentation>
                    <div>
                        <LoginFormContainer />
                        <OptionText>or</OptionText>
                        <CreateAccountLink to='/register'>
                            Create account
                        </CreateAccountLink>
                    </div>
                </LoginContainer>
            )}
        </>
    );
};

export default LoginScreen;
