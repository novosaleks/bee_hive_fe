import React from 'react';
import FollowUser from '../follow-user';
import { StyledDiv } from '../../common/style/index';
const FollowUsersBlock = ({ tabsInfo, activeTab }) => {
    return (
        <>
            {tabsInfo.map(
                info =>
                    info.label === activeTab && (
                        <StyledDiv
                            StyledDiv
                            alignSelf='center'
                            label={info.label}
                            key={info.label}>
                            <FollowUser follow={info.data} />
                        </StyledDiv>
                    )
            )}
        </>
    );
};

export default FollowUsersBlock;
