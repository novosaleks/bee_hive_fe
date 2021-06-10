import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const ConversationsBlockStyled = styled(StyledDiv)`
    overflow: auto;
`;
export const ConversationStyledDiv = styled(StyledDiv)`
    padding: 3%;
    cursor: pointer;
    &:hover {
        background-color: ${getValueFromTheme('hoverColor')};
    }
    &.active {
        background-color: ${getValueFromTheme('hoverColor')};
    }
`;

export const ContactInfoDiv = styled.div`
    width: 20vw;
    margin-left: 15px;
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 600px) {
        width: 40vw;
    }
`;
