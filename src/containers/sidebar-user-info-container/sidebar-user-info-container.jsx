import React from 'react';
import UserAvatar from '../../components/user-avatar';
import UserInfo from '../../components/user-info';
import UserExtraInfo from '../../components/user-extra-info';
import FollowButton from '../../components/follow-button';

import { StyledSidebarDiv } from './sidebar-user-info-container.style';
import { DivLine, StyledText } from '../../common/style/index';

const SideBarUserInfo = ({ user }) => {
    return (
        <StyledSidebarDiv>
            <UserAvatar
                rating={'#c53b0e'}
                rateScore={'1,5'}
                // photo={photo}
                width={[130, 190]}
                height={[130, 190]}
            />
            <StyledText>{`${user.firstName} ${user.lastName}`}</StyledText>
            <DivLine />
            <StyledText color={'#5dac38'}>{'Drink coffee'}</StyledText>
            <DivLine />
            <UserInfo user={user} />
            {!user && <FollowButton />}
            <UserExtraInfo user={user} />
        </StyledSidebarDiv>
    );
};

export default SideBarUserInfo;
