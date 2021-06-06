import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIPTIONS_BY_USER_ID } from '../../graphql/user';
import { SUBSCRIBE_TO_USER } from '../../graphql/user';

import { useState } from 'react';
import { Button } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { useNotificationService } from '../../common/context/notificationContext';

const FollowButton = ({ userId, currentUserId }) => {
    const [subscribed, setSubscribed] = useState(null);
    const [subscribeToUser, { data }] = useMutation(SUBSCRIBE_TO_USER);
    const [subscriptionData, fallback] = useQueriedData(
        GET_SUBSCRIPTIONS_BY_USER_ID,
        {
            variables: { userId: userId },
        },
    );

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const success = data.subscribeToUser;
            if (success) {
                notify({ text: 'Success! You subscribed to the user!', type: 'success'});
            }
        } else if (subscriptionData) {
            //check whether currentUser subscribed to the user
            setSubscribed(
                subscriptionData.getSubscriptionsByUserId.some(
                    subscriber => subscriber.id === currentUserId,
                ),
            );
        }
    }, [data, subscriptionData]);

    const handlerClick = async () => {
        await subscribeToUser({
            variables: {
                userIdToSubscribe: userId,
            },
        });
        setSubscribed(true);
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
