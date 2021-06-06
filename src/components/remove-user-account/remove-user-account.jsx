import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { REMOVE_USER } from '../../graphql/user';

import { DivLine, StyledDiv, Button } from '../../common/style/index';
import { useNotificationService } from '../../common/context/notificationContext';
const RemoveUserAccount = () => {
    const { userId } = useParams();
    const [removeUser, { data }] = useMutation(REMOVE_USER);

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.removeUser;
            if (response) {
                notify({text: response.message, type: 'success'})
                window.location.reload();
            } else {
                notify({text: response.message, type: 'fail'})
            }
        }
    }, [data]);

    const handlerClick = async () => {
        await removeUser({
            variables: {
                userId: userId,
            },
        });
    };
    return (
        <StyledDiv align='flex-start'>
            <DivLine />
            <Button onClick={handlerClick} mt='15px' fontSize='1em'>
                Remove account
            </Button>
        </StyledDiv>
    );
};

export default RemoveUserAccount;
