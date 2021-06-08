import { useState } from 'react';
import ContactProvider from '../../common/context/contactContext';
import useContact from '../../common/hooks/useContact';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_CURRENT_USER } from '../../graphql/user';

import SidebarTab from '../../components/sidebar-tab';
import FollowUsersBlock from '../../components/follow-users-block';
import SubscriptionSearch from '../../components/subscription-search';
import { tabs } from '../../common/tabs';

import { StyledPageWrapper, StyledDivPage } from '../../common/style/index';

const SubscriptionScreen = () => {
    const {data: userData, fallback} = useQueriedData(GET_CURRENT_USER);
    const [activeTab, setActiveTab] = useState(tabs.subscriptionPage[0].label);
    const clickHandler = label => () => {
        setActiveTab(label);
    };
    const users = useContact();
    return (
        fallback || (
            <StyledPageWrapper>
                <StyledDivPage>
                    <ContactProvider value={users}>
                        <SubscriptionSearch />
                        <SidebarTab
                            {...{ activeTab, clickHandler }}
                            tabs={tabs.subscriptionPage}
                        />
                        <FollowUsersBlock
                            {...{ activeTab }}
                            currentUserId={userData.currentUser.id}
                        />
                    </ContactProvider>
                </StyledDivPage>
            </StyledPageWrapper>
        )
    );
};

export default SubscriptionScreen;
