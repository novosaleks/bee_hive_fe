import React from 'react';
import { Button } from '../../common/style';
import { Form } from './login-form.style';
const LoginForm = ({LoginInput, onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            <LoginInput name='email' placeholder='Email or Phone Number'/>
            <LoginInput name='password' type='password' mt={100}
                placeholder='Password'/>
            <Button minWidth={198} minHeight={70} mx='auto' display='block'
                mt={55}>Login</Button>
        </Form>
    );
};

export default LoginForm;
