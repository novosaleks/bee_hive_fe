import React from 'react';

import AlbumsBlock from '../../components/albums-block';
import SideBarUserInfo from '../../containers/sidebar-user-info-container';
import Publications from '../../components/publications';
import {
    StyledPageWrapper,
    StyledDivPage,
    StyledPageContent,
} from '../../common/style/index';

const ProfileScreen = () => {
    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SideBarUserInfo />
                <StyledPageContent>
                    <AlbumsBlock />
                    <Publications />
                </StyledPageContent>
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default ProfileScreen;
