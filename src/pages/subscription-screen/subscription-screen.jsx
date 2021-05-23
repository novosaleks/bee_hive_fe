import React, { useState } from 'react';
import SidebarTab from '../../components/sidebar-tab';
import { StyledPageWrapper, StyledDivPage } from '../../common/style/index';
import FollowUsersBlock from '../../components/follow-users-block';
import { tabs } from '../../common/tabs';
const SubscriptionScreen = () => {
    const [activeTab, setActiveTab] = useState(tabs.subscriptionPage[0].label);
    const clickHandler = (label) => () => {
        setActiveTab(label);
    };

    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SidebarTab
                    {...{ activeTab, clickHandler }}
                    tabs={tabs.subscriptionPage}
                />
                <FollowUsersBlock
                    tabsInfo={tabs.subscriptionPage}
                    {...{ activeTab }}
                />
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default SubscriptionScreen;
