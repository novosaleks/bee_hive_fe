import { useEffect, useState } from 'react';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_SUBSCRIBERS_BY_USER_ID } from '../../graphql/user';

import SubscriptionUser from '../subscription-user';
import {
    StyledDiv,
    SearchContactsTitle,
    NotificationDiv,
} from '../../common/style/index';

const Subscribers = ({ userId }) => {
    const [subscribers, setSubscribers] = useState(null);
    const [data, fallback] = useQueriedData(GET_SUBSCRIBERS_BY_USER_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setSubscribers(data.getSubscribersByUserId);
        }
    }, [data]);

    if (fallback) {
        return fallback;
    }
    return (
        <>
            {subscribers?.length !== 0 ? (
                subscribers?.map(subscriber => (
                    <StyledDiv alignSelf='center' key={subscriber.id}>
                        <SubscriptionUser user={subscriber} />
                    </StyledDiv>
                ))
            ) : (
                <NotificationDiv alignSelf='flex-end'>
                    <SearchContactsTitle>
                        No one is following you...
                    </SearchContactsTitle>
                </NotificationDiv>
            )}
        </>
    );
};

export default Subscribers;
