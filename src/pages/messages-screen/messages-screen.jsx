import React, { useState } from 'react';

import { StyledMessagePageWrapper } from './messages-screen.style';
import { StyledDivPage } from '../../common/style/index';

import { tabs } from '../../common/tabs';
import MessagesScreenMenu from '../../components/messages-screen-menu';
import Messages from '../../components/messages';
import ActionsNotifications from '../../components/actions-notifications';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

// NOT NESECCERY IN REAL PROJECT
import { ConversationsProvider } from '../../common/context/conversationContext';
import { ContactsProvider } from '../../common/context/ContactsProvider';
import { SocketProvider } from '../../common/context/SocketProvider';

const MessagesScreen = () => {
    const [activeTab, setActiveTab] = useState(tabs.messagesPage[0].label);
    const clickHandler = (label) => {
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

    const messagesDiv = (
        <SocketProvider id={identifyUser}>
            <ContactsProvider>
                <ConversationsProvider id={identifyUser}>
                    <Messages identifyUser={identifyUser} />
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>
    );
    return (
        <StyledMessagePageWrapper flexDirection="column">
            <MessagesScreenMenu
                activeTab={activeTab}
                clickHandler={clickHandler}
                tabs={tabs.messagesPage}
            />
            <StyledDivPage>
                {tabs.messagesPage[0].label === activeTab ? (
                    messagesDiv
                ) : (
                    <ActionsNotifications />
                )}
            </StyledDivPage>
        </StyledMessagePageWrapper>
    );
};

export default MessagesScreen;
