import { useState } from 'react';

import moreInfo from '../../assets/moreInfo.svg';
import {
    MoreInfoImg,
    UserExtraInfoBlock,
    UserExtraInfoDiv,
} from './user-extra-info.style';
import { StyledText } from '../../common/style/index';

const UserExtraInfo = ({ user }) => {
    const [openState, setOpenState] = useState(false);

    const handlerClick = () => {
        setOpenState(prevState => !prevState);
    };
    return (
        <>
            <MoreInfoImg
                src={moreInfo}
                alt='additinal information about user'
                onClick={handlerClick}
            />
            {openState && (
                <UserExtraInfoBlock>
                    <UserExtraInfoDiv width='80%'>
                        <StyledText size='1rem'>{user.occupation}</StyledText>
                    </UserExtraInfoDiv>
                    <UserExtraInfoDiv width='80%'>
                        <StyledText size='1rem'>{user.userInfo}</StyledText>
                    </UserExtraInfoDiv>
                </UserExtraInfoBlock>
            )}
        </>
    );
};

export default UserExtraInfo;
