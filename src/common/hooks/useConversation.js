import useContact from './useContact';
import useLocalStorage from './useLocalStorage';
import { useState } from 'react';

const useConversation = id => {
    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const users = useContact();

    const createConversation = recipient => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipient, messages: [] }];
        });
    };

    const addMessageToConversation = ({ recipient, text, sender }) => {
        setConversations(prevConversations => {
            let madeChange = false;
            const newMessage = { sender, text };
            const newConversations = prevConversations.map(conversation => {
                //if it is a new conversation
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
                //if it is already existing conversation
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
        //define user who recieve the message
        const contact = users?.find(contact => {
            return contact.id === conversation.recipient;
        });
        //define the user name
        const name = `${contact?.firstName} ${contact?.lastName}`;

        const recipient = { id: conversation.recipient, name };

        const messages = conversation.messages.map(message => {
            // find user who sent the message
            const contact = users?.find(contact => {
                return contact.id === message.sender;
            });

            //define his name
            const name = contact?.firstName;

            //boolean: if this user is cuurent user
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
