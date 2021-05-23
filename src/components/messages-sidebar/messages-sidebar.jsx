import React, { useState } from 'react';

import MessagesAvaliableContacts from '../messages-avaliable-contacts';
import MessagesGlobalSearch from '../messages-global-search';
import MessagesNewChatModal from '../messages-new-chat-modal';

import {
    MessagesSidebarStyled,
    NewConversationButton,
} from './messages-sidebar.style';

import { Modal } from 'react-bootstrap';

// NOT NESECCERY IN REAL PROJECT
// import { useConversations } from '../../common/context/conversationContext';
import MessagesConversations from '../messages-conversations';

const MessagesSidebar = ({ identifyUser, conversationOpen }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <MessagesSidebarStyled conversationOpen={conversationOpen}>
            {/* button to start a chat with a few users */}
            <NewConversationButton onClick={() => setModalOpen(true)}>
                New Conversation
            </NewConversationButton>

            <MessagesConversations />

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
