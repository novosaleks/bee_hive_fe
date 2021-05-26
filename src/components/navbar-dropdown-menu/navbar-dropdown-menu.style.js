import styled from 'styled-components';
import { StyledDiv, StyledText, media } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const NavbarDropdownMenuHeaderDiv = styled(StyledDiv)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 215px;
    border-radius: 30px;
    img {
        width: 30px;
        height: 30px;
    }
    * {
        margin-left: 15px;
    }
    &:hover {
        background-color: ${getValueFromTheme('primaryBgColorDiv')};
    }
    ${media.mobile} {
        margin-left: 20%;
    }
    ${media.miniMobile} {
        margin-left: 3%;
        width: 15%;
        justify-content: flex-end;
        p,
        div {
            display: none;
        }
    }
`;

export const UserName = styled(StyledText)`
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0;
`;
