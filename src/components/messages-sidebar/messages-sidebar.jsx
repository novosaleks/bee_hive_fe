import React, { useState } from 'react';

import MessagesAvaliableContacts from '../messages-avaliable-contacts';
import MessagesGlobalSearch from '../messages-global-search';
import MessagesNewChatModal from '../messages-new-chat-modal';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

import { Input } from '../../common/style';
import {
    MessagesSidebarStyled,
    NewConversationButton,
} from './messages-sidebar.style';

import { Modal } from 'react-bootstrap';

// NOT NESECCERY IN REAL PROJECT
// import { useConversations } from '../../common/context/conversationContext';
import MessagesConversations from '../messages-conversations';

const MessagesSidebar = ({ identifyUser }) => {
    const [modalOpen, setModalOpen] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('');

    //contacts that we already add to contacts list
    // const [avaliableContacts, setAvaliableContacts] = useState([]);

    //here we need DB to get all avalable contacts (query)
    //and be able to add new contacts(mutation)

    // const { createConversation, selectedConversation } = useConversations();

    // const handleClickSearch = (user) => {
    //     setAvaliableContacts((prevAvaliableContacts) =>
    //         prevAvaliableContacts.includes(user)
    //             ? prevAvaliableContacts
    //             : [...prevAvaliableContacts, user]
    //     );
    //     setSearchTerm('');
    //     createConversation(user);
    // };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <MessagesSidebarStyled>
            {/* input for searching contact */}

            {/* <Input
                placeholder="Start conversation with ..."
                buttonText="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            /> */}

            {/* shows users avaliable contacts or global search */}

            {/* {searchTerm !== '' ? (
                <MessagesGlobalSearch
                    searchTerm={searchTerm}
                    identifyUser={identifyUser}
                    handleClickSearch={handleClickSearch}
                />
            ) : (
                <MessagesAvaliableContacts
                    avaliableContacts={avaliableContacts}
                />
            )} */}

            {/* button to start a chat with a few users */}
            <NewConversationButton onClick={() => setModalOpen(true)}>
                New Conversation
            </NewConversationButton>

            <MessagesConversations />

            {/* modal for choosing with which avaliable contacts user whant to start a chat with */}

            <Modal show={modalOpen} onHide={closeModal}>
                <MessagesNewChatModal closeModal={closeModal} />
            </Modal>
        </MessagesSidebarStyled>
    );
};

export default MessagesSidebar;
