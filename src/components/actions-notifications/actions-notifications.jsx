import ActionNotification from '../action-notification';
import { Notifications } from './actions-notifications.style';

import { useQuery } from '@apollo/client';
// import { GET_ALL_NOTIFICATIONS } from '../../graphql/notification';
import { GET_ALL_USERS } from '../../graphql/user';
const NOTOFICATIONS_EXEMPLE = [
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
    const { loading, error, data } = useQuery(GET_ALL_USERS);
    // const {  data } = useQuery(GET_ALL_NOTIFICATIONS);

    if (loading) return <div>LOADING...</div>;

    if (error) return <div>Error: {error.message}</div>;

    const users = data.getAllUsers;
    // const notifications = data.getAllNotifications;

    return (
        <Notifications>
            {NOTOFICATIONS_EXEMPLE.map(notification => {
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
