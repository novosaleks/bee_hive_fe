import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';

export const Header = styled(StyledDiv)`
    flex-direction: row;
    padding: 3px;
    align-items: center;
    justify-content: space-between;
    img {
        width: 35px;
        height: 35px;
        margin-right: 5%;
        cursor: pointer;
    }
`;
