import React from 'react';
import UserAvatar from '../../components/user-avatar';
import UserInfo from '../../components/user-info';
import UserExtraInfo from '../../components/user-extra-info';

import { StyledSidebarDiv } from './sidebar-user-info-container.style';
import { DivLine, StyledText } from '../../common/style/index';

const generalIngo = {
    'birth': {
        'label': 'Date of birth',
        'data': '23.09.2000',
    },
    'location': {
        'label': 'Location',
        'data': 'Kiev',
    },
    'occupation': {
        'label': 'Occupation',
        'data': 'Student',
    },
    'about': {
        'label': 'About me',
        'data': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
};
const SideBarUserInfo = ({
    name,
    photo,
    status,
    ratingColor,
    statusColor,
    rateScore,
}) => {
    const generalIngoArray = Object.entries(generalIngo);

    return (

        <StyledSidebarDiv>
            <UserAvatar rating={ratingColor || '#c53b0e'}
                rateScore={rateScore || '1,5'} photo={photo} width={[130, 190]}
                height={[130, 190]} />
            <StyledText>{name || 'First name Second name'}</StyledText>
            <DivLine />
            <StyledText color={statusColor || '#5dac38'}>{status ||
                'Drink coffeee'}</StyledText>
            <DivLine />
            <UserInfo>
                {generalIngoArray.filter((info, index) => index <= 1)}
            </UserInfo>
            <UserExtraInfo>
                {generalIngoArray.filter((info, index) => index > 1)}
            </UserExtraInfo>
        </StyledSidebarDiv>
    );
};

export default SideBarUserInfo;
