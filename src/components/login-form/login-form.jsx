import React from 'react';
import { Button, Input } from '../../common/style';
import { Form } from './login-form.style';

const LoginForm = () => {
    return (
        <Form>
            <Input placeholder='Email or Phone Number'/>
            <Input mt={100} placeholder='Password'/>
            <Button minWidth={198} minHeight={70} mx='auto' display='block'
                mt={55}>Login</Button>
        </Form>
    );
};

export default LoginForm;
