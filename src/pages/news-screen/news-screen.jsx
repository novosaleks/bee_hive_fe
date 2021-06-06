import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_ALL_USERS } from '../../graphql/user';

import {
    StyledPageWrapper,
    StyledDivPage,
    StyledPageContent,
} from '../../common/style/index';
import { SidebarDivStyled } from './news-screen.style';
import Title from '../../components/title';
import UsersPreview from '../../components/users-preview';
import WallBlock from '../../components/wall-block';
const NewsScreen = () => {
    const [data, fallback] = useQueriedData(GET_ALL_USERS);
    const users = data?.getAllUsers;
    if (fallback) {
        return fallback;
    }
    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SidebarDivStyled>
                    <Title>Users online</Title>
                    <UsersPreview users={users} smallBlock />
                </SidebarDivStyled>
                <StyledPageContent>
                    <WallBlock />
                </StyledPageContent>
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default NewsScreen;
