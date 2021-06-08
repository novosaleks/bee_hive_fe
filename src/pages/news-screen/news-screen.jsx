import { GET_CURRENT_USER } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';
import { StyledPageWrapper, StyledPageContent } from '../../common/style/index';
import { StyledDivPageNews } from './news-screen.style';
import WallBlock from '../../components/wall-block';
const NewsScreen = () => {
    const [userData, fallback] = useQueriedData(GET_CURRENT_USER);
    return (
        fallback || (
            <StyledPageWrapper>
                <StyledDivPageNews>
                    <StyledPageContent>
                        <WallBlock currentUserId={userData.currentUser.id} />
                    </StyledPageContent>
                </StyledDivPageNews>
            </StyledPageWrapper>
        )
    );
};

export default NewsScreen;
