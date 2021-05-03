import React from 'react';


import AlbumsBlock from '../../components/albumsBlock';
import SideBarUserInfo from '../../containers/sideBarUserInfo-container';
import Publications from '../../components/publications';
import { StyledDivPage, StyledPageContent } from './profile-screen.style';
import { StyledPageWrapper } from '../../common/style/index';


const ProfileScreen = () => {

    return (
        <StyledPageWrapper>
            <StyledDivPage direction="row" align="flex-start" content="space-around">
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
