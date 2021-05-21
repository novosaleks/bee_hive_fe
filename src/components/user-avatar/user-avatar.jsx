import React from 'react';
import { DivImgForUserAvatar, RateScore } from './user-avatar.style';

const UserAvatar = props => {
    return (
        <DivImgForUserAvatar {...props}>
            <RateScore onlineBlock={props.onlineBlock}>
                {props.rateScore}
            </RateScore>
        </DivImgForUserAvatar>
    );
};

export default UserAvatar;
