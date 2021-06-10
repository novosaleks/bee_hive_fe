import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIBERS_BY_USER_ID } from '../../graphql/user';
import { SUBSCRIBE_TO_USER } from '../../graphql/user';
import { UNSUBSCRIBE_TO_USER } from '../../graphql/user';

import { useState } from 'react';
import { Button } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { useUpdateCurrentUser } from '../../common/context/updateCurrentUserContext';
import { useNotificationService } from '../../common/context/notificationContext';

const FollowButton = ({ userId, currentUserId }) => {
    const [subscribed, setSubscribed] = useState(null);
    const [subscribeToUser, { data }] = useMutation(SUBSCRIBE_TO_USER);
    const [unsubscribeToUser, { data: unsubscribeData }] =
        useMutation(UNSUBSCRIBE_TO_USER);

    const { data: subscriptionData, fallback } = useQueriedData(
        GET_SUBSCRIBERS_BY_USER_ID,
        {
            variables: { userId: userId },
        }
    );

    const notify = useNotificationService();
    const updateCurrentUser = useUpdateCurrentUser();
    useEffect(() => {
        if (data) {
            const success = data.subscribeToUser;
            if (success) {
                updateCurrentUser();
                notify({
                    text: 'Success! You subscribed to the user!',
                    type: 'success',
                });
            }
        }
    }, [data]);
    useEffect(() => {
        if (unsubscribeData) {
            const success = unsubscribeData.unsubscribeToUser;
            if (success) {
                updateCurrentUser();
                notify({
                    text: 'Success! You unsubscribed to the user!',
                    type: 'success',
                });
            }
        }
    }, [unsubscribeData]);

    useEffect(() => {
        if (subscriptionData) {
            //check whether currentUser subscribed to the user
            setSubscribed(
                subscriptionData.getSubscribersByUserId.some(
                    subscriber => subscriber.id === currentUserId
                )
            );
        }
    }, [subscriptionData]);

    const unsubscribe = async () => {
        await unsubscribeToUser({
            variables: {
                userId: userId,
            },
        });
    };
    const subscribe = async () => {
        await subscribeToUser({
            variables: {
                userId: userId,
            },
        });
    };

    const handlerClick = () => {
        setSubscribed(prevState => !prevState);
        !subscribed ? subscribe() : unsubscribe();
    };

    return (
        fallback || (
            <Button
                fontFamily='Source Code Pro'
                color='#fff'
                width={1}
                height={30}
                mb='10px'
                backgroundColor={
                    subscribed
                        ? getValueFromTheme('primaryBgColorDiv')
                        : getValueFromTheme('primaryColor')
                }
                onClick={handlerClick}>
                {subscribed ? 'Followed' : 'Follow'}
            </Button>
        )
    );
};

export default FollowButton;
