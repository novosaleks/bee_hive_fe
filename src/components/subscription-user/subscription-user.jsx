import React from 'react';
import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import FollowButton from '../follow-button';
import { StyledDiv } from '../../common/style/index';
import { NavLink } from '../../common/style';
const SubscriptionUser = ({
    name,
    photo,
    status,
    ratingColor,
    statusColor,
    rateScore,
    isFollow,
    login,
    onlineBlock,
}) => {
    return (
        <StyledDiv
            align='center'
            mt={10}
            mb={15}
            direction='row'
            content='space-between'>
            <StyledDiv width='18%'>
                <UserAvatar
                    rating={ratingColor || '#C53B0E'}
                    rateScore={rateScore || '1,5'}
                    photo={photo}
                    width={onlineBlock ? 70 : [70, 135]}
                    height={onlineBlock ? 70 : [70, 135]}
                    {...{ onlineBlock }}
                />
            </StyledDiv>

            <StyledDiv
                width={onlineBlock ? '70%' : '80%'}
                align='flex-end'
                ml='20px'>
                <FollowButton
                    isFollow={isFollow}
                    width={onlineBlock ? '70px' : '150px'}
                    height='30px'
                />
                <NavLink to={`/${login}`} width={1}>
                    <PostAuthorAndData
                        name={name || 'First and last name'}
                        data={status || 'Online'}
                        color={statusColor || '#5DAC38'}
                        {...{ onlineBlock }}
                    />
                </NavLink>
            </StyledDiv>
        </StyledDiv>
    );
};

export default SubscriptionUser;
