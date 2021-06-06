import UsersNews from '../../containers/user-news-container';
import Title from '../title';

import { DivLine, StyledDiv } from '../../common/style/index';
const WallBlock = () => {
    return (
        <StyledDiv marginTop='5%'>
            <Title>Wall</Title>
            <UsersNews />
            <DivLine />
            <UsersNews />
            <DivLine />
            <UsersNews />
        </StyledDiv>
    );
};

export default WallBlock;
