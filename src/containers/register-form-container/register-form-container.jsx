import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputContainer from '../input-container';
import RegisterForm from '../../components/register-form';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { CREATE_USER } from '../../graphql/user';
import { useNotificationService } from '../../common/context/notificationContext';

const RegisterFormContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [createUser, { data }] = useMutation(CREATE_USER);
    const history = useHistory();

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.createUser;
            if (response.success) {
                console.log(response.message);
                notify({ text: response.message, type: 'success' });
                history.push('/login');
            } else {
                console.error(response.message);
            }
        }
    }, [data]);

    const registrationHandler = async d => {
        await createUser({
            variables: {
                firstName: d.firstName,
                lastName: d.lastName,
                email: d.email,
                password: d.password,
                occupation: d.occupation,
                location: d.location,
                birthDate: d.birthDate,
                userInfo: d.userInfo,
            },
        });
    };

    const RegisterInput = props => {
        const { name, required = false, ...attrs } = props;

        return (
            <InputContainer
                register={register}
                name={name}
                errors={errors}
                rules={{ required }}
                attrs={attrs}
            />
        );
    };

    return (
        <RegisterForm
            RegisterInput={RegisterInput}
            registrationHandler={handleSubmit(registrationHandler)}
        />
    );
};

export default RegisterFormContainer;
