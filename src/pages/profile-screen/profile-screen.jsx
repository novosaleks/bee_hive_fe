import React from 'react';


import AlbumsBlock from '../../components/albumsBlock';
import SideBarUserInfo from '../../containers/sideBarUserInfo-container';
import Publications from '../../components/publications';
import { StyledPageContent } from './profile-screen.style';
import { StyledPageWrapper, StyledDivPage } from '../../common/style/index';


const ProfileScreen = () => {

    return (
        <StyledPageWrapper>
            <StyledDivPage >
                <SideBarUserInfo />
                <StyledPageContent>
                    <AlbumsBlock />
                    <Publications />
                </StyledPageContent>
            </StyledDivPage>
        </StyledPageWrapper >
    )
};

export default ProfileScreen;
