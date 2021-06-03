import React, { useState } from 'react';

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

    const { createConversation } = useConversationContext();

    const handleSubmit = contactId => {
        createConversation(contactId);
        // selectedContactIds.length !== 0 &&
        //     createConversation(selectedContactIds);
        closeModal();
    };

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
                                handleSubmit,
                            }}
                        />
                    ) : (
                        <MessagesAvailableContacts
                            {...{
                                identifyUser,
                                handleSubmit,
                                searchTerm,
                            }}
                        />
                    )}
                </>
            </ModalBody>
        </>
    );
};

export default MessagesNewChatModal;
