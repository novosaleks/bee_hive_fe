import { useState } from 'react';

import { StyledMessagePageWrapper } from './messages-screen.style';
import { StyledDivPage } from '../../common/style/index';

import { tabs } from '../../common/tabs';
import MessagesScreenMenu from '../../components/messages-screen-menu';
import ActionsNotifications from '../../components/actions-notifications';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';
import MessageContainer from '../../containers/message-container';

const MessagesScreen = () => {
    const [activeTab, setActiveTab] = useState(tabs.messagesPage[0].label);
    const clickHandler = label => () => {
        setActiveTab(label);
    };
    const { loading, error, data } = useQuery(GET_CURRENT_USER);
    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const identifyUser = data.currentUser.id;

    return (
        <StyledMessagePageWrapper>
            <MessagesScreenMenu
                activeTab={activeTab}
                clickHandler={clickHandler}
                tabs={tabs.messagesPage}
            />
            <StyledDivPage pt={3}>
                {tabs.messagesPage[0].label === activeTab ? (
                    <MessageContainer identifyUser={identifyUser} />
                ) : (
                    <ActionsNotifications />
                )}
            </StyledDivPage>
        </StyledMessagePageWrapper>
    );
};

export default MessagesScreen;
