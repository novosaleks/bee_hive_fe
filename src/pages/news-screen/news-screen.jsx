import React from 'react';
import { StyledPageWrapper, StyledDivPage, StyledPageContent } from '../../common/style/index';
import { SidebarDivStyled } from './news-screen.style';
import Title from '../../components/title';
import FollowUser from '../../components/follow-user';
import WallBlock from '../../components/wall-block';
const NewsScreen = () => {
    const usersOnline = [
        { name: 'Stan Pupcin', photo: null, status: 'in the gym', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '4,6', isFollow: false, login: 'user35668' },
        { name: 'Ann Pupcin', photo: null, status: 'at home', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '5', isFollow: true, login: 'user35668' },
        { name: 'Mark Pupcin', photo: null, status: 'at home', ratingColor: '#5DAC38', statusColor: '#5DAC38', rateScore: '4', isFollow: false, login: 'user35668' },
    ]
    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SidebarDivStyled>
                    <Title>
                        Users online
                    </Title>
                    <FollowUser follow={usersOnline} onlineBlock={true} />
                </SidebarDivStyled>
                <StyledPageContent>
                    <WallBlock />
                </StyledPageContent>
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default NewsScreen;
