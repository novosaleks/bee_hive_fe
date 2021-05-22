import React, { useState, useEffect } from 'react';
import SidebarTab from '../../components/sidebar-tab';
import {
    StyledPageWrapper,
    StyledDivPage,
    DivLine,
} from '../../common/style/index';

import messages from '../../assets/messages.svg';
import notifications from '../../assets/notifications.svg';

import Messages from '../../components/messages';
import ActionsNotifications from '../../components/actions-notifications';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

// NOT NESECCERY IN REAL PROJECT
import { ConversationsProvider } from '../../common/context/conversationContext';
// import { Modal, Form, Button } from 'react-bootstrap';
import { ContactsProvider } from '../../common/context/ContactsProvider';
import { SocketProvider } from '../../common/context/SocketProvider';

const MessagesScreen = () => {
    const tabs = {
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
        <StyledPageWrapper flexDirection="column">
            <SidebarTab
                {...{ activeTab, clickHandler }}
                tabs={tabs.messagesPage}
                messageBlock={true}
            />
            <DivLine backgroundColor="#D3D3D3" />
            <StyledDivPage>
                {tabs.messagesPage[0].label === activeTab ? (
                    messagesDiv
                ) : (
                    <ActionsNotifications />
                )}
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default MessagesScreen;
