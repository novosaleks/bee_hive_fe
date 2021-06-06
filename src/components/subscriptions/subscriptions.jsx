import { useEffect, useState } from 'react';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIPTIONS_BY_USER_ID } from '../../graphql/user';
import { GET_CURRENT_USER } from '../../graphql/user';

import SubscriptionUser from '../subscription-user';
import {
    StyledDiv,
    SearchContactsTitle,
    NotificationDiv,
} from '../../common/style/index';

const Subscription = ({ userId }) => {
    const [userData, fallbackUserData] = useQueriedData(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [data, fallback] = useQueriedData(GET_SUBSCRIPTIONS_BY_USER_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setSubscription(data.getSubscriptionsByUserId);
        } else if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [data, userData]);

    if (fallback || fallbackUserData) {
        return fallback || fallbackUserData;
    }
    return (
        <StyledDiv alignSelf='center'>
            {subscription?.length !== 0 ? (
                subscription?.map(subscriber => (
                    <StyledDiv alignSelf='center' key={subscriber.id}>
                        <SubscriptionUser user={subscriber} />
                    </StyledDiv>
                ))
            ) : (
                <NotificationDiv alignSelf='flex-end'>
                    <SearchContactsTitle>
                        {currentUserId === userId ? 'You' : 'This user'} do not
                        have any subscription!
                    </SearchContactsTitle>
                </NotificationDiv>
            )}
        </StyledDiv>
    );
};

export default Subscription;
