import React from 'react';
import { FormContainer, FormBlock, Form } from './register-form.style';
import { Button, Input } from '../../common/style';
import RegisterInputBlock from '../register-input-block';

const RegisterForm = () => {
    return (
        <Form>
            <FormContainer>
                <FormBlock>
                    <RegisterInputBlock value='name'>
                        <div style={{display: 'flex', gap: '2rem'}}>
                            <Input placeholder='First Name'/>
                            <Input placeholder='Last Name'/>
                        </div>
                    </RegisterInputBlock>
                    <RegisterInputBlock value='birth date'>
                        <Input placeholder='Your birth date'/>
                    </RegisterInputBlock>
                    <RegisterInputBlock value='location'>
                        <Input placeholder='Your Location'/>
                    </RegisterInputBlock>
                </FormBlock>
                <FormBlock>
                    <RegisterInputBlock value='occupation'>
                        <Input placeholder='Occupation'/>
                    </RegisterInputBlock>
                    <RegisterInputBlock value='about yourself'>
                        <Input placeholder='Me and 23 my personalities'/>
                    </RegisterInputBlock>
                </FormBlock>
            </FormContainer>
            <Button width={198} height={70}>Done</Button>
        </Form>
    );
};

export default RegisterForm;
