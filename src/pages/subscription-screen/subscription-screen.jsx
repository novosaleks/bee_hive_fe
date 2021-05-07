import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import SidebarTab from '../../components/sidebarTab';
import { StyledPageWrapper, StyledDivPage } from '../../common/style/index';
import FollowUsersBlock from '../../components/followUsersBlock';

import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';

const SubscriptionScreen = () => {
    const subscriptions = {
        followers: [
            { name: 'Stan Pupcin', photo: null, status: 'in the gym', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '4,6', isFollow: false, login: 'user35668' },
            { name: 'Ann Pupcin', photo: null, status: 'at home', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '5', isFollow: true, login: 'user35668' },
            { name: 'Mark Pupcin', photo: null, status: 'at home', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '4', isFollow: false, login: 'user35668' },
        ],
        following: [
            { name: 'Ivan Pupcin', photo: null, status: 'in the gym', ratingColor: '#C53B0E', statusColor: '#5DAC38', rateScore: '1,6', isFollow: true, login: 'user35668' },
            { name: 'Ann Pupcin', photo: null, status: 'at home', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '5', isFollow: true, login: 'user35668' },
            { name: 'Tom Pupcin', photo: null, status: 'at the middle of nowhere', ratingColor: '#5DAC38', statusColor: '#C53B0E', rateScore: '4', isFollow: true, login: 'user35668' },
        ]
    };
    const tabs = {
        subscriptionPage: [
            { img: followers, title: 'Followers', alt: 'Followers icon', label: 'followers', data: subscriptions.followers },
            { img: following, title: 'Following', alt: 'Following icon', label: 'following', data: subscriptions.following },
        ]
    };
    const [activeTab, setActiveTab] = useState(tabs.subscriptionPage[0].label);
    const clickHandler = (label) => {
        setActiveTab(label)
    };

    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SidebarTab {...{ activeTab, clickHandler }} tabs={tabs.subscriptionPage} />
                <FollowUsersBlock tabsInfo={tabs.subscriptionPage} {...{ activeTab }} />
            </StyledDivPage>
        </StyledPageWrapper>
    )
};

export default SubscriptionScreen;
