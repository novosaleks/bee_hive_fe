import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';
import messages from '../../assets/messages.svg';
import notifications from '../../assets/notifications.svg';

//EXAMPLE OF THE DATA (DI NOT NEED IN REAL PROJECT)
//INSTEAD HERE WE WIIL USE QUERY FROM GRAPHQL
const subscriptions = {
    followers: [
        {
            name: 'Stan Pupcin',
            photo: null,
            status: 'in the gym',
            ratingColor: '#5DAC38',
            statusColor: '#5DAC38',
            rateScore: '4,6',
            isFollow: false,
            login: 'user35668',
        },
        {
            name: 'Ann Pupcin',
            photo: null,
            status: 'at home',
            ratingColor: '#5DAC38',
            statusColor: '#5DAC38',
            rateScore: '5',
            isFollow: true,
            login: 'user35668',
        },
        {
            name: 'Mark Pupcin',
            photo: null,
            status: 'at home',
            ratingColor: '#5DAC38',
            statusColor: '#5DAC38',
            rateScore: '4',
            isFollow: false,
            login: 'user35668',
        },
    ],
    following: [
        {
            name: 'Ivan Pupcin',
            photo: null,
            status: 'in the gym',
            ratingColor: '#C53B0E',
            statusColor: '#5DAC38',
            rateScore: '1,6',
            isFollow: true,
            login: 'user35668',
        },
        {
            name: 'Ann Pupcin',
            photo: null,
            status: 'at home',
            ratingColor: '#5DAC38',
            statusColor: '#5DAC38',
            rateScore: '5',
            isFollow: true,
            login: 'user35668',
        },
        {
            name: 'Tom Pupcin',
            photo: null,
            status: 'at the middle of nowhere',
            ratingColor: '#5DAC38',
            statusColor: '#C53B0E',
            rateScore: '4',
            isFollow: true,
            login: 'user35668',
        },
    ],
};

export const tabs = {
    subscriptionPage: [
        {
            img: followers,
            title: 'Followers',
            alt: 'Followers icon',
            label: 'followers',
            data: subscriptions.followers,
        },
        {
            img: following,
            title: 'Following',
            alt: 'Following icon',
            label: 'following',
            data: subscriptions.following,
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
