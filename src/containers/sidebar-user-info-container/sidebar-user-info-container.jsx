import React from 'react';
import UserAvatar from '../../components/user-avatar';
import UserInfo from '../../components/user-info';
import UserExtraInfo from '../../components/user-extra-info';
import FollowButton from '../../components/follow-button';

import { StyledSidebarDiv } from './sidebar-user-info-container.style';
import { DivLine, StyledText } from '../../common/style/index';

import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const SideBarUserInfo = ({
    name,
    photo,
    status,
    ratingColor,
    statusColor,
    rateScore,
}) => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const user = data.currentUser;

    return (
        <StyledSidebarDiv>
            <UserAvatar
                rating={ratingColor || '#c53b0e'}
                rateScore={rateScore || '1,5'}
                photo={photo}
                width={[130, 190]}
                height={[130, 190]}
            />
            <StyledText>
                {name || `${user.firstName} ${user.lastName}`}
            </StyledText>
            <DivLine/>
            <StyledText color={statusColor || '#5dac38'}>
                {status || 'Drink coffee'}
            </StyledText>
            <DivLine/>
            <UserInfo user={user}/>
            {!user && <FollowButton/>}
            <UserExtraInfo user={user}/>
        </StyledSidebarDiv>
    );
};

export default SideBarUserInfo;
