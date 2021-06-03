import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';
import {
    ChatModalInput,
    ModalHeader,
    ModalBody,
} from './messages-new-chat-modal.style';
import { DivLine } from '../../common/style';

import { useConversationContext } from '../../common/context/conversationContext';

import MessagesGlobalSearch from '../messages-global-search';
import MessagesAvailableContacts from '../messages-available-contacts';

const MessagesNewChatModal = ({ closeModal, identifyUser }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const { createConversation, conversations } = useConversationContext();

    const handleClick = contactId => {
        //all user with whome we already have a conversation
        const existingRecipientsId = [];
        conversations.forEach(conversation =>
            existingRecipientsId.push(conversation.recipient.id)
        );

        //create conversation just if we do not have exicting conversation with this user yet
        if (!existingRecipientsId.includes(contactId)) {
            createConversation(contactId);
        }

        closeModal();
    };
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) return <div>LOADING...</div>;

    if (error) return <div>Error: {error.message}</div>;

    const users = data.getAllUsers;
    return (
        <>
            <ModalHeader>Create Conversation</ModalHeader>
            <DivLine backgroundColor='#E8E6E6' />
            <ModalBody overflow='auto'>
                <ChatModalInput
                    placeholder='Start conversation with ...'
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                    mb={3}
                />

                <>
                    {searchTerm === '' ? (
                        <MessagesGlobalSearch
                            {...{
                                identifyUser,
                                handleClick,
                                users,
                            }}
                        />
                    ) : (
                        <MessagesAvailableContacts
                            {...{
                                identifyUser,
                                handleClick,
                                searchTerm,
                                users,
                            }}
                        />
                    )}
                </>
            </ModalBody>
        </>
    );
};

export default MessagesNewChatModal;
