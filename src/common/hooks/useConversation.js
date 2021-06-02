import useLocalStorage from './useLocalStorage';
import { useState } from 'react';

import { arrayEquality } from '../utils';
import useContact from './useContact';

const useConversation = id => {
    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const availableContacts = useContact();

    const createConversation = recipients => {
        console.log(recipients);
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }];
        });
    };

    const addMessageToConversation = ({ recipients, text, sender }) => {
        setConversations(prevConversations => {
            let madeChange = false;
            const newMessage = { sender, text };
            const newConversations = prevConversations.map(conversation => {
                if (arrayEquality(conversation.recipients, recipients)) {
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
                    { recipients, messages: [newMessage] },
                ];
            }
        });
    };

    const sendMessage = (recipients, text) => {
        addMessageToConversation({ recipients, text, sender: id });
    };

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact =
                availableContacts &&
                availableContacts.find(contact => {
                    return +contact.id === recipient;
                });

            const name =
                (contact && `${contact.firstName} ${contact.lastName}`) ||
                recipient;

            return { id: recipient, name };
        });

        const messages = conversation.messages.map(message => {
            const contact =
                availableContacts &&
                availableContacts.find(contact => {
                    return +contact.id === message.sender;
                });
            const name = (contact && contact.firstName) || message.sender;
            const fromMe = id === message.sender;
            return { ...message, senderName: name, fromMe };
        });

        const selected = index === selectedConversationIndex;
        return { ...conversation, messages, recipients, selected };
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
