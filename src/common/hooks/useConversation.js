import { useState } from 'react';

import useContact from './useContact';
import useLocalStorage from './useLocalStorage';

const useConversation = id => {
    //varaibles
    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const [selectedConversationUserId, setSelectedConversationUserId] =
        useState(null);

    //varaibles from users hooks
    const users = useContact();

    const createConversation = recipient => {
        setSelectedConversationUserId(recipient);
        setConversations(prevConversations => {
            return [...prevConversations, { recipient }];
        });
    };

    const formattedConversations = conversations.map((conversation, index) => {
        //define user who receive the message
        const contact = users?.find(contact => {
            return contact.id === conversation.recipient;
        });
        //define the user name
        const name = `${contact?.firstName} ${contact?.lastName}`;

        const recipient = { id: conversation.recipient, name, contact };

        //define whether it is selected conversation or not
        const selected = index === selectedConversationIndex;

        return { ...conversation, recipient, selected };
    });

    return {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        selectConversationIndex: setSelectedConversationIndex,
        selectedConversationUserId,
        createConversation,
    };
};

export default useConversation;
