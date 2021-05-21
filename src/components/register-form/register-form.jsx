import React from 'react';
import {
    FormContainer,
    FormBlock,
    Form,
    GroupedInputs,
} from './register-form.style';
import { Button } from '../../common/style';
import RegisterInputBlock from '../register-input-block';

const RegisterForm = ({ RegisterInput, registrationHandler }) => {
    return (
        <Form onSubmit={registrationHandler}>
            <FormContainer>
                <FormBlock>
                    <RegisterInputBlock value='name'>
                        <GroupedInputs>
                            <RegisterInput
                                name='firstName'
                                required
                                placeholder='First Name'
                            />
                            <RegisterInput
                                name='lastName'
                                required
                                placeholder='Last Name'
                            />
                        </GroupedInputs>
                    </RegisterInputBlock>
                    <RegisterInputBlock value='email and password'>
                        <GroupedInputs>
                            <RegisterInput
                                name='email'
                                required
                                placeholder='Email...'
                            />
                            <RegisterInput
                                name='password'
                                type='password'
                                required
                                placeholder='Password...'
                            />
                        </GroupedInputs>
                    </RegisterInputBlock>
                    <RegisterInputBlock value='birth date'>
                        <RegisterInput
                            name='birthDate'
                            type='date'
                            placeholder='Your birth date'
                        />
                    </RegisterInputBlock>
                </FormBlock>
                <FormBlock>
                    <RegisterInputBlock value='occupation'>
                        <RegisterInput
                            name='occupation'
                            placeholder='Occupation'
                        />
                    </RegisterInputBlock>
                    <RegisterInputBlock value='about yourself'>
                        <RegisterInput
                            name='userInfo'
                            placeholder='Me and 23 my personalities'
                        />
                    </RegisterInputBlock>
                    <RegisterInputBlock value='location'>
                        <RegisterInput
                            name='location'
                            placeholder='Your Location'
                        />
                    </RegisterInputBlock>
                </FormBlock>
            </FormContainer>
            <Button width={198} height={70}>
                Done
            </Button>
        </Form>
    );
};

export default RegisterForm;
