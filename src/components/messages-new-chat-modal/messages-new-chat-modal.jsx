import { useState } from 'react';
import {
    ChatModalInput,
    ModalHeader,
    ModalBody,
} from './messages-new-chat-modal.style';
import { DivLine } from '../../common/style';

import { useConversationContext } from '../../common/context/conversationContext';

import SearchGlobal from '../search-global';
import AvailableContacts from '../available-contacts';

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
                        <SearchGlobal
                            {...{
                                identifyUser,
                                handleClick,
                            }}
                        />
                    ) : (
                        <AvailableContacts
                            {...{
                                identifyUser,
                                handleClick,
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
