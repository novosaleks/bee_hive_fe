import { StyledPageWrapper, StyledPageContent } from '../../common/style/index';
import { StyledDivPageNews } from './news-screen.style';
import WallBlock from '../../components/wall-block';
const NewsScreen = () => {
    return (
        <StyledPageWrapper>
            <StyledDivPageNews>
                <StyledPageContent>
                    <WallBlock />
                </StyledPageContent>
            </StyledDivPageNews>
        </StyledPageWrapper>
    );
};

export default NewsScreen;
