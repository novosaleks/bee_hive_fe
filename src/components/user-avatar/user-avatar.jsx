import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PHOTO_BY_USER_ID } from '../../graphql/photo';

import { DivImgForUserAvatar, RateScore } from './user-avatar.style';

const UserAvatar = props => {
    return (
        <DivImgForUserAvatar {...props} className='user-avatar'>
            <RateScore {...props}>{props.rateScore}</RateScore>
        </DivImgForUserAvatar>
    );
};

export default UserAvatar;
