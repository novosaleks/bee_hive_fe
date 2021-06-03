import useLocalStorage from './useLocalStorage';
import { useState } from 'react';

import useContact from './useContact';

const useConversation = id => {
    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const availableContacts = useContact();

    const createConversation = recipient => {
        console.log(recipient);
        setConversations(prevConversations => {
            return [...prevConversations, { recipient, messages: [] }];
        });
    };

    const addMessageToConversation = ({ recipient, text, sender }) => {
        setConversations(prevConversations => {
            let madeChange = false;
            const newMessage = { sender, text };
            const newConversations = prevConversations.map(conversation => {
                if (conversation.recipient !== recipient) {
                    madeChange = true;
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage],
                    };
                }

                return conversation;
            });

            if (madeChange) {
                return newConversations;
            } else {
                return [
                    ...prevConversations,
                    { recipient, messages: [newMessage] },
                ];
            }
        });
    };

    const sendMessage = (recipient, text) => {
        addMessageToConversation({ recipient, text, sender: id });
    };

    const formattedConversations = conversations.map((conversation, index) => {
        const contact = availableContacts?.find(contact => {
            return contact.id === conversation.recipient;
        });
        const name = `${contact?.firstName} ${contact?.lastName}`;
        const recipient = { id: conversation.recipient, name };

        const messages = conversation.messages.map(message => {
            const contact = availableContacts?.find(contact => {
                return contact.id === message.sender;
            });
            const name = contact?.firstName;
            const fromMe = id === message.sender;
            return { ...message, senderName: name, fromMe };
        });

        const selected = index === selectedConversationIndex;
        return { ...conversation, messages, recipient, selected };
    });

    return {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation,
    };
};

export default useConversation;
