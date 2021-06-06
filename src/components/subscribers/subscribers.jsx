import { useEffect, useState } from 'react';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIBERS_BY_USER_ID } from '../../graphql/user';
import { GET_CURRENT_USER } from '../../graphql/user';

import SubscriptionUser from '../subscription-user';
import {
    StyledDiv,
    SearchContactsTitle,
    NotificationDiv,
} from '../../common/style/index';

const Subscribers = ({ userId }) => {
    const [userData, fallbackUserData] = useQueriedData(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [subscribers, setSubscribers] = useState(null);

    const [data, fallback] = useQueriedData(GET_SUBSCRIBERS_BY_USER_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setSubscribers(data.getSubscribersByUserId);
        } else if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [data, userData]);

    if (fallback || fallbackUserData) {
        return fallback || fallbackUserData;
    }
    return (
        <StyledDiv alignSelf='center'>
            {subscribers?.length !== 0 ? (
                subscribers?.map(subscriber => (
                    <StyledDiv alignSelf='center' key={subscriber.id}>
                        <SubscriptionUser user={subscriber} />
                    </StyledDiv>
                ))
            ) : (
                <NotificationDiv alignSelf='flex-end'>
                    <SearchContactsTitle>
                        No one is following{' '}
                        {currentUserId === userId ? 'you' : 'this user'} ...
                    </SearchContactsTitle>
                </NotificationDiv>
            )}
        </StyledDiv>
    );
};

export default Subscribers;
