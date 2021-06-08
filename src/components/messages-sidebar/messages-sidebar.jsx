import { useState } from 'react';

import { useConversationContext } from '../../common/context/conversationContext';
import SearchModal from '../search-modal';
import MessagesConversations from '../messages-conversations';

import {
    MessagesSidebarStyled,
    NewConversationButton,
} from './messages-sidebar.style';

const MessagesSidebar = ({ conversationOpen, handleClick }) => {
    const { createConversation, conversations } = useConversationContext();
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleClickConversation = contactId => {
        //all user with whose we already have a conversation
        const existingRecipientsId = [];
        conversations.forEach(conversation =>
            existingRecipientsId.push(conversation.recipient.id)
        );

        //create conversation just if we do not have existing conversation with this user yet
        if (!existingRecipientsId.includes(contactId)) {
            createConversation(contactId);
        }

        closeModal();
    };

    return (
        <MessagesSidebarStyled
            conversationOpen={conversationOpen}
            className='message-sidebar'>
            {/* button to start a chat with a few users */}
            <NewConversationButton onClick={() => setModalOpen(true)}>
                New Conversation
            </NewConversationButton>

            <MessagesConversations smallBlock handleClick={handleClick} />

            {/* modal for choosing with which available contacts user want to start a chat with */}

            {modalOpen && (
                <SearchModal
                    closeModal={closeModal}
                    handleClick={handleClickConversation}
                    placeholder='Start conversation with ...'
                    contactSearch='messages'
                    title='Create Conversation'
                />
            )}
        </MessagesSidebarStyled>
    );
};

export default MessagesSidebar;
