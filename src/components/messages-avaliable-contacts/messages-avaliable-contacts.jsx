import React from 'react';
import MessagesContact from '../messages-contact';

import { StyledDiv } from '../../common/style/index';

const MessagesAvaliableContacts = ({ avaliableContacts }) => {
    return (
        <StyledDiv content="start">
            {avaliableContacts &&
                avaliableContacts.map((contact) => (
                    <MessagesContact
                        {...contact}
                        smallBlock={true}
                        key={contact.id}
                    />
                ))}
        </StyledDiv>
    );
};

export default MessagesAvaliableContacts;
