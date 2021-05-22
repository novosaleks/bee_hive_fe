import React from 'react';
import { StyledDiv } from '../../common/style/index';
import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';

import { MessagesContactsDiv } from './messages-contact.style';

const MessagesContact = ({
    // firstName,
    // lastName,
    name,
    status,
    ratingColor,
    statusColor,
    rateScore,
    photo,
    smallBlock,
    event,
}) => {
    return (
        <MessagesContactsDiv
            align="center"
            direction="row"
            content="space-between"
            onClick={event}
            m={3}
            p={3}
        >
            <UserAvatar
                rating={ratingColor || '#C53B0E'}
                rateScore={rateScore || '1,5'}
                photo={photo}
                width={smallBlock ? 70 : [70, 135]}
                height={smallBlock ? 70 : [70, 135]}
                {...{ smallBlock }}
            />
            <StyledDiv
                width={smallBlock ? '70%' : '80%'}
                align="flex-end"
                ml="20px"
            >
                <PostAuthorAndData
                    // name={`${firstName} ${lastName}` || 'First and last name'}
                    name={name || 'First and last name'}
                    data={status || 'Online'}
                    color={statusColor || '#5DAC38'}
                    {...{ smallBlock }}
                />
            </StyledDiv>
        </MessagesContactsDiv>
    );
};

export default MessagesContact;
