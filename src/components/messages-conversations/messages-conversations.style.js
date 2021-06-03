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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 20vw;
    margin-left: 15px;

    span {
        width: 100px;
        font-style: italic;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: 600px) {
        width: 40vw;
    }
`;
