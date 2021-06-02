import { useState } from 'react';

import MessagesNewChatModal from '../messages-new-chat-modal';

import {
    MessagesSidebarStyled,
    NewConversationButton,
} from './messages-sidebar.style';

import { Modal } from 'react-bootstrap';

import MessagesConversations from '../messages-conversations';

const MessagesSidebar = ({ identifyUser, conversationOpen, handleClick }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
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

            {/* modal for choosing with which avaliable contacts user whant to start a chat with */}

            <Modal show={modalOpen} onHide={closeModal}>
                <MessagesNewChatModal
                    closeModal={closeModal}
                    identifyUser={identifyUser}
                />
            </Modal>
        </MessagesSidebarStyled>
    );
};

export default MessagesSidebar;
