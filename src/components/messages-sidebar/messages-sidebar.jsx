import { useState } from 'react';

import MessagesNewChatModal from '../messages-new-chat-modal';

import {
    MessagesSidebarStyled,
    NewConversationButton,
    ModalDialog,
    ModalContent,
} from './messages-sidebar.style';

import MessagesConversations from '../messages-conversations';

const MessagesSidebar = ({ identifyUser, conversationOpen, handleClick }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };
    const handleClickModal = e => {
        if (e.target.classList.contains('modal-bg')) {
            closeModal();
        }
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

            {modalOpen && (
                <ModalDialog
                    className='modal-bg'
                    onClick={e => handleClickModal(e)}>
                    <ModalContent>
                        <MessagesNewChatModal
                            closeModal={closeModal}
                            identifyUser={identifyUser}
                        />
                    </ModalContent>
                </ModalDialog>
            )}
        </MessagesSidebarStyled>
    );
};

export default MessagesSidebar;
