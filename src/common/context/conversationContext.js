import React, { useContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './contactsContext';
import { useSocket } from './socketContext';

//with gql
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_ALL_CONVERSATIONS, ADD_NEW_CONVERSATION } from '../../graphql/conversation';

const ConversationsContext = React.createContext();

export function useConversations() {
    return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
    //with gql (and we do not need useLocalStorage)
    // const { loading, error, data } = useQuery(GET_ALL_CONVERSATIONS);
    // const [addNewConversation, { data }] = useMutation(ADD_NEW_CONVERSATION);

    // if (loading) {
    //     return <div>LOADING...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // const conversations = data.getAllConversations;

    // const createConversation = async (recipients) => {
    //     await addNewConversation({
    //         variables: {
    //             recipients: recipients,
    //             messages: [],
    //         },
    //     });
    // };

    const [conversations, setConversations] = useLocalStorage(
        'conversations',
        []
    );
    const [selectedConversationIndex, setSelectedConversationIndex] =
        useState(0);
    const avaliableContacts = useContacts();
    const socket = useSocket();

    const createConversation = (recipients) => {
        setConversations((prevConversations) => {
            return [
                ...prevConversations,
                { recipients: recipients, messages: [] },
            ];
        });
    };

    const addMessageToConversation = useCallback(
        ({ recipients, text, sender }) => {
            console.log(recipients);
            setConversations((prevConversations) => {
                let madeChange = false;
                const newMessage = { sender, text };
                const newConversations = prevConversations.map(
                    (conversation) => {
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
        console.log(socket);

        socket.on('connect', function () {
            console.log('Connected to WS server');
            console.log(socket.connected);
        });

        socket.on('receive-message', addMessageToConversation);

        return () => socket.off('receive-message');
    }, [socket, addMessageToConversation]);

    const sendMessage = (recipients, text) => {
        socket.emit('send-message', { recipients, text });

        addMessageToConversation({ recipients, text, sender: id });
    };

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

const arrayEquality = (a, b) => {
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();

    return a.every((element, index) => {
        return element === b[index].id;
    });
};
