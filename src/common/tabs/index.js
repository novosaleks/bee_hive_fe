import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';
import messages from '../../assets/messages.svg';
import notifications from '../../assets/notifications.svg';

export const tabs = {
    subscriptionPage: [
        {
            img: followers,
            title: 'Followers',
            alt: 'Followers icon',
            label: 'page followers',
        },
        {
            img: following,
            title: 'Following',
            alt: 'Following icon',
            label: 'page following',
        },
    ],
    messagesPage: [
        {
            img: messages,
            title: 'Messages',
            alt: 'Messages icon',
            label: 'messages',
        },
        {
            img: notifications,
            title: 'Notifications',
            alt: 'Notifications icon',
            label: 'notifications',
        },
    ],
};
