import { useEffect, useState } from 'react';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIPTIONS_BY_USER_ID } from '../../graphql/user';

import SubscriptionUser from '../subscription-user';
import {
    StyledDiv,
    SearchContactsTitle,
    NotificationDiv,
} from '../../common/style/index';

const Subscription = ({ userId }) => {
    const [subscription, setSubscription] = useState(null);
    const [data, fallback] = useQueriedData(GET_SUBSCRIPTIONS_BY_USER_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setSubscription(data.getSubscriptionsByUserId);
        }
    }, [data]);

    if (fallback) {
        return fallback;
    }
    return (
        <>
            {subscription?.length !== 0 ? (
                subscription?.map(subscriber => (
                    <StyledDiv alignSelf='center' key={subscriber.id}>
                        <SubscriptionUser user={subscriber} />
                    </StyledDiv>
                ))
            ) : (
                <NotificationDiv alignSelf='flex-end'>
                    <SearchContactsTitle>
                        You do not have any subscription!
                    </SearchContactsTitle>
                </NotificationDiv>
            )}
        </>
    );
};

export default Subscription;
