import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';

export const AlbumsBlockDiv = styled(StyledDiv)`
    ${media.laptop && media.mobile} {
        min-width: 1500px;
    } ;
`;
export const TitleDiv = styled(StyledDiv)`
    flex-direction: row;
    justify-content: space-between;

    img {
        width: 35px;
        height: 35px;
        cursor: pointer;
        align-self: flex-end;
        margin-bottom: 5px;
    }
`;
