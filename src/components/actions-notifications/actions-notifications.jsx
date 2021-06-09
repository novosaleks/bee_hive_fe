import ActionNotification from '../action-notification';
import { Notifications } from './actions-notifications.style';

import { GET_ALL_USERS } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';
const NOTIFICATIONS_EXAMPLE = [
    {
        userId: '1',
        rating: 'really good',
        ratingTextColor: 'reallyGoodColor',
        postText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        userId: '2',
        rating: 'good',
        ratingTextColor: 'goodColor',
        postText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

const ActionsNotifications = () => {
    const { fallback, data } = useQueriedData(GET_ALL_USERS);
    // const {  data } = useQuery(GET_ALL_NOTIFICATIONS);

    if (fallback) {
        return fallback;
    }

    const users = data.getAllUsers;
    // const notifications = data.getAllNotifications;

    return (
        <Notifications>
            {NOTIFICATIONS_EXAMPLE.map(notification => {
                const user = users?.find(
                    user => user.id === notification.userId
                );
                return (
                    <ActionNotification
                        key={notification.userId}
                        {...{ notification, user }}
                    />
                );
            })}
        </Notifications>
    );
};

export default ActionsNotifications;
