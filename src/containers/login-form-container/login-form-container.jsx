import { useEffect } from 'react';
import InputContainer from '../input-container';
import { useForm } from 'react-hook-form';
import LoginForm from '../../components/login-form';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/auth';
import { useNotificationService } from '../../common/context/notificationContext';

const LoginFormContainer = () => {
    const notify = useNotificationService();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [login, { data }] = useMutation(LOGIN);

    useEffect(() => {
        if (data) {
            const response = data.login;
            if (response.success) {
                window.location.href = '/';
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

    const loginHandler = async d => {
        await login({
            variables: {
                email: d.email,
                password: d.password,
            },
        });
    };

    const LoginInput = props => {
        const { name, ...attrs } = props;

        return (
            <InputContainer
                register={register}
                name={name}
                errors={errors}
                rules={{ required: true }}
                attrs={attrs}
            />
        );
    };

    return (
        <LoginForm
            LoginInput={LoginInput}
            onSubmit={handleSubmit(loginHandler)}
        />
    );
};

export default LoginFormContainer;
