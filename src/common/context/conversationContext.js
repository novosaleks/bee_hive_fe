// const formattedConversations = conversations.map((conversation, index) => {
//     const recipients = conversation.recipients.map((recipient) => {
//         const name = `${recipient.firstName} ${recipient.lastName}`;

//         return { user: recipient, name };
//     });
//     const messages = conversation.messages.map((message) => {
//         //we need to find a first name of the sender here

//         const contact = avaliableContacts.find((contact) => {
//             return contact.id === message.sender;
//         });

//         const name = contact.firstName;

//         //we compere our current user id with the user who send the message

//         const fromMe = id === message.sender;

//         return { ...message, senderName: name, fromMe };
//     });
//     const selected = index === selectedConversationIndex;
//     return { ...conversation, messages, recipients, selected };
// });

import React, { useContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';
import { useSocket } from './SocketProvider';

const ConversationsContext = React.createContext();

export function useConversations() {
    return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    // const [conversations, setConversations] = useState([]);

    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const avaliableContacts = useContacts();
    const socket = useSocket();

    function createConversation(recipients) {
        setConversations((prevConversations) => {
            return [
                ...prevConversations,
                { recipients: recipients, messages: [] },
            ];
        });
    }

    const addMessageToConversation = useCallback(
        ({ recipients, text, sender }) => {
            setConversations((prevConversations) => {
                let madeChange = false;
                const newMessage = { sender, text };
                const newConversations = prevConversations.map(
                    (conversation) => {
                        console.log(
                            'conversation.recipients',
                            conversation.recipients
                        );
                        console.log('recipients', recipients);
                        if (
                            arrayEquality(conversation.recipients, recipients)
                        ) {
                            madeChange = true;
                            return {
                                ...conversation,
                                messages: [
                                    ...conversation.messages,
                                    newMessage,
                                ],
                            };
                        }

                        return conversation;
                    }
                );

                if (madeChange) {
                    return newConversations;
                } else {
                    return [
                        ...prevConversations,
                        { recipients, messages: [newMessage] },
                    ];
                }
            });
        },
        [setConversations]
    );

    useEffect(() => {
        if (socket == null) return;

        socket.on('receive-message', addMessageToConversation);

        return () => socket.off('receive-message');
    }, [socket, addMessageToConversation]);

    function sendMessage(recipients, text) {
        socket.emit('send-message', { recipients, text });

        addMessageToConversation({ recipients, text, sender: id });
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map((recipient) => {
            const contact =
                avaliableContacts &&
                avaliableContacts.find((contact) => {
                    return +contact.id === recipient;
                });

            const name =
                (contact && `${contact.firstName} ${contact.lastName}`) ||
                recipient;
            return { id: recipient, name };
        });

        const messages = conversation.messages.map((message) => {
            const contact =
                avaliableContacts &&
                avaliableContacts.find((contact) => {
                    return +contact.id === message.sender;
                });
            const name = (contact && contact.firstName) || message.sender;
            const fromMe = id === message.sender;
            return { ...message, senderName: name, fromMe };
        });

        const selected = index === selectedConversationIndex;
        return { ...conversation, messages, recipients, selected };
    });

    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation,
    };

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    );
}

function arrayEquality(a, b) {
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();

    return a.every((element, index) => {
        console.log('b[index]', b[index]);
        return element === b[index].id;
    });
}
