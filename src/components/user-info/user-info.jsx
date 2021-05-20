import React from 'react';

import { StyledText } from '../../common/style/index';

const UserInfo = ({ user }) => {
    const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
    };

    return (
        <>
            <StyledText size="1rem">{formatDate(user.birthDate)}</StyledText>
            <StyledText size="1rem">{user.location}</StyledText>
        </>
    );
};

export default UserInfo;
