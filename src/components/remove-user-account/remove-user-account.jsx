import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { REMOVE_USER } from '../../graphql/user';

import { DivLine, StyledDiv, Button } from '../../common/style/index';
const RemoveUserAccount = () => {
    const { userId } = useParams();
    const [removeUser, { data }] = useMutation(REMOVE_USER);

    useEffect(() => {
        if (data) {
            const response = data.removeUser;
            if (response) {
                // TODO add a notification
                console.log(response.message);
                window.location.reload();
            } else {
                // TODO add a notification
                console.error(response.message);
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
