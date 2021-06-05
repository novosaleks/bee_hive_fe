import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';
import messages from '../../assets/messages.svg';
import notifications from '../../assets/notifications.svg';

//EXAMPLE OF THE DATA (DO NOT NEED IN REAL PROJECT)
//INSTEAD HERE WE WIIL USE QUERY FROM GRAPHQL
const subscriptions = {
    followers: [
        {
            id: '1',
            isFollow: false,
        },
        {
            id: '2',
            isFollow: true,
        },
    ],
    following: [
        {
            id: '2',
            isFollow: true,
        },
    ],
};

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
            //  data: ,
        },
        {
            img: notifications,
            title: 'Notifications',
            alt: 'Notifications icon',
            label: 'notifications',
            //  data: ,
        },
    ],
};
