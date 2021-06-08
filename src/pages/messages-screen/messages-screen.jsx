import { useState } from 'react';

import { StyledMessagePageWrapper } from './messages-screen.style';

import { tabs } from '../../common/tabs';
import MessagesScreenMenu from '../../components/messages-screen-menu';
import ActionsNotifications from '../../components/actions-notifications';

import { GET_CURRENT_USER } from '../../graphql/user';
import MessageContainer from '../../containers/message-container';
import useQueriedData from '../../common/hooks/useQueriedData';

const MessagesScreen = () => {
    const [activeTab, setActiveTab] = useState(tabs.messagesPage[0].label);
    const clickHandler = label => () => {
        setActiveTab(label);
    };
    const {data, fallback} = useQueriedData(GET_CURRENT_USER);

    if (fallback) {
        return fallback;
    }

    const identifyUser = data.currentUser.id;

    return (
        <StyledMessagePageWrapper>
            <MessagesScreenMenu
                {...{ activeTab, clickHandler }}
                tabs={tabs.messagesPage}
            />

            {tabs.messagesPage[0].label === activeTab ? (
                <MessageContainer identifyUser={identifyUser} />
            ) : (
                <ActionsNotifications />
            )}
        </StyledMessagePageWrapper>
    );
};

export default MessagesScreen;
