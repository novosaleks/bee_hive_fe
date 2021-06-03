import { useState, useEffect } from 'react';

import UserAvatar from '../../components/user-avatar';
import UserInfo from '../../components/user-info';
import UserExtraInfo from '../../components/user-extra-info';
import FollowButton from '../../components/follow-button';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

import { StyledSidebarDiv } from './sidebar-user-info-container.style';
import { DivLine, StyledText } from '../../common/style/index';

const SideBarUserInfo = ({ user }) => {
    const { loading, error, data: userData } = useQuery(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error! ${error.message}`}</div>;
    return (
        <StyledSidebarDiv>
            <UserAvatar
                rating={'#c53b0e'}
                rateScore={'1,5'}
                photo={user.avatar}
                width={[130, 190]}
                height={[130, 190]}
            />
            <StyledText>{`${user.firstName} ${user.lastName}`}</StyledText>
            <DivLine />
            <StyledText color={'#5dac38'}>{'Drink coffee'}</StyledText>
            <DivLine />
            <UserInfo user={user} />
            {currentUserId !== user.id && <FollowButton />}
            <UserExtraInfo user={user} />
        </StyledSidebarDiv>
    );
};

export default SideBarUserInfo;
